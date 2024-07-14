import clsx from "clsx";
import { WorkSheetTHead } from "./WorkSheetTHead";
import { useState } from "react";
import { WorkSheetCell } from "./WorksSheetCell";




function getRowColumnByName(name: string, rowColumns: WorkSheetRow): WorkSheetColumnData {
    const result = rowColumns.find(rowCol => rowCol.name === name)
    if (!result) {
        throw new Error('no row column  with column name ' + name)
    }
    return result;
}

function getColumnDefinitionByName(name: string, columnDefinitions: WorkSheetColumnDefinition[]): WorkSheetColumnDefinition {
    const result = columnDefinitions.find(colDef => colDef.name === name)
    if (!result) {
        throw new Error('no column definition with name ' + name)
    }
    return result;
}

function WorkSheetTBodyRow({
    rowColumns, columns, isSelected, rowIndex, handleRowClicked, onBlur
}: {
    rowColumns: WorkSheetRow,
    columns: WorkSheetColumnDefinition[],
    isSelected: boolean,
    rowIndex: number,
    handleRowClicked: () => void,
    onBlur: (change: Record<string, any>, row: WorkSheetRow) => Promise<void>
}) {

    // only consider rows that are in the column definitions
    let relevantRowColumns = [...rowColumns.filter(rowColumn => columns.some(col => col.name === rowColumn.name))]
    const columnNames = columns.map(c => c.name)
    const [firstColumnName, ...otherColumnNames] = columnNames;

    async function onRowBlur(change: Record<string, any>) {
        onBlur(change, rowColumns)
    }

    return (
        <tr
            role="row"
            className={clsx(
                "thm-cont-g0-bgcolor",
                {
                    'real-current': isSelected
                })
            }
            aria-selected={isSelected}
            aria-rowindex={rowIndex}
            onClick={handleRowClicked}
        >
            <td role="rowheader" tabIndex={-1} scope="row" className="thm-cont-h1-bgcolor-1--safe-sel-l1-hover--view-mode-grid thm-cont-h1-bgcolor--hover--edit-mode-grid thm-cont-g3-bdrcolor--border-top thm-cont-g3-bdrcolor--border-left--edit-mode-grid thm-cont-s1-bgcolor--grid-row-selected thm-cont-g0-bgcolor--grid-row-selected--edit-mode-grid thm-cont-s1-bgcolor--grid-row-current--multiselect-grid thm-cont-g0-bgcolor--grid-row-current--edit-mode-grid">
            </td>
            <td aria-hidden="true" role="presentation" className="grid-selection-column thm-cont-g3-bdrcolor--border-top thm-cont-h1-bgcolor-1--safe-sel-l1-hover--view-mode-grid thm-cont-h1-bgcolor--hover--edit-mode-grid thm-cont-g3-bdrcolor--border-right--edit-mode-grid thm-cont-s1-bgcolor--grid-row-selected thm-cont-g0-bgcolor--grid-row-selected--edit-mode-grid thm-cont-s1-bgcolor--grid-row-current--multiselect-grid thm-cont-g0-bgcolor--grid-row-current--edit-mode-grid" tabIndex={-1}>
                <div title="Select row" className="grid-selection-column-checkbox-wrapper" tabIndex={-1} role="checkbox" aria-checked="true">
                    <input type="checkbox" className="ms-nav-grid-rowselectioncheckbox" tabIndex={-1} aria-hidden="true" id="rowSelectCheckBox-b91" />
                    <label className="ms-nav-check-circle thm-cont-s2-subd-bgcolor-1 thm-cont-s2-subd-color-1--pseudo_before thm-cont-s2-subd-color-1--pseudo_after thm-cont-s2-subd-bgcolor-1--grid-row-nosel-hovered thm-cont-s2-subd-color-1--grid-row-nosel-hovered--pseudo_before thm-cont-s2-subd-color-1--grid-row-nosel-hovered--pseudo_after thm-cont-s2-bgcolor-1--grid-row-selected thm-cont-s2-color-1--medtint--grid-row-selected--pseudo_before thm-cont-s2-color-1--medtint--grid-row-selected--pseudo_after" data-focusable="true" tabIndex={-1} htmlFor="rowSelectCheckBox-b91">
                    </label>
                </div>
            </td>
            <WorkSheetCell
                isRowSelected={isSelected}
                rowColumn={getRowColumnByName(firstColumnName, relevantRowColumns)}
                rowIndex={rowIndex}
                onBlur={onRowBlur}
                columnDefinition={getColumnDefinitionByName(firstColumnName, columns)}
            />
            <OptionsWorkSheetCell />
            {
                otherColumnNames.map((rowColumnName, columnIndex) => {
                    columnIndex += 1
                    return (
                        <WorkSheetCell
                            key={columnIndex}
                            isRowSelected={isSelected}
                            rowColumn={getRowColumnByName(rowColumnName, relevantRowColumns)}
                            rowIndex={rowIndex}
                            onBlur={onRowBlur}
                            columnDefinition={getColumnDefinitionByName(rowColumnName, columns)}
                        />
                    )
                })
            }
        </tr>
    )
}

export function WorkSheetTBody(
    {
        workSheetData,
        onBlur
    }: {
        workSheetData: WorkSheetData,
        onBlur: (change: Record<string, any>, row: WorkSheetRow) => Promise<void>
    }) {
    const [selectedIndex, setSelectedIndex] = useState(0)
    return (
        <tbody data-focus-zone="true">
            {workSheetData.rows.map((row, index) => (
                <WorkSheetTBodyRow
                    key={index + '-' + row[0].value}
                    rowColumns={row}
                    columns={workSheetData.columnDefinitions}
                    isSelected={index === selectedIndex}
                    rowIndex={index}
                    handleRowClicked={() => {
                        console.log('setting selected index', index)
                        setSelectedIndex(index)
                    }}
                    onBlur={onBlur}
                />
            ))}
        </tbody>
    )
}


export function WorkSheetBusinessTable({ workSheetData, onBlur }: {
    workSheetData: WorkSheetData,
    onBlur: (change: Record<string, any>, row: WorkSheetRow) => Promise<void>

}) {
    return (
        <table className="ms-nav-grid ms-nav-grid-edit ms-nav-grid-data-table ms-nav-grid-header-hideXX thm-cont-g0-bgcolor-1">
            <caption className="ms-nav-hidden">Work Sheet Business Table</caption>
            <WorkSheetTHead columns={workSheetData.columnDefinitions} />
            <WorkSheetTBody workSheetData={workSheetData} onBlur={onBlur} />
        </table>
    )
}

function OptionsWorkSheetCell() {
    return (
        <td role="gridcell" className="ms-list-itemLink-td ms-cellstyle thm-cont-g3-bdrcolor--border-top thm-cont-g3-bdrcolor--border-right--edit-mode-grid thm-cont-h1-bgcolor--hover--grid-row-nosel-hovered thm-cont-g0-bgcolor-1--grid-row-nosel-hovered thm-cont-s1-bgcolor--grid-row-selected thm-cont-s2-bgcolor--hover--grid-row-selected thm-cont-g0-bgcolor--grid-row-selected--edit-mode-grid--multiselect-grid thm-cont-s1-bgcolor--grid-row-current--multiselect-grid thm-cont-s1-bgcolor--grid-row-selected-current--multiselect-grid frozen-column-auto" tabIndex={-1}>
            <a draggable="false" role="button" href="#" tabIndex={-1} className="ms-list-itemLink thm-cont-a2-icon-color--maxtint30--grid-row-current thm-glob-c0-icon-color thm-cont-s1-bdrcolor thm-cont-a2-icon-color--medtint30--grid-row-hovered icon-VertEllipsis thm-cont-s2-bgcolor--focus thm-cont-s2-bgcolor--states_opened" title="Show more options" data-focusable="true" >
            </a>
        </td>
    )
}
