

import { useState } from "react";
import MyDatePicker from "./MyDatePicker";


export function WorkSheetCell({
    rowColumn,
    isRowSelected,
    rowIndex,
    onBlur,
    columnDefinition
}: {
    rowColumn: WorkSheetColumnData,
    isRowSelected: boolean,
    rowIndex: number,
    columnDefinition: WorkSheetColumnDefinition,
    onBlur: (change: Record<string, string|number>) => Promise<void>
}) {

    const [cellValue, setCellValue] = useState(rowColumn.value)
    async function onCellBlur(e: any) {
        if (rowColumn.value == cellValue) return;
        onBlur({
            [e.target.name]: e.target.value
        })
    }
    if (isRowSelected) {
        // selected row  
        return (
            <td
                key={rowColumn.name}
                tabIndex={0}
                role="gridcell"
                aria-selected={true}
                // className="thm-cont-g3-bdrcolor--border-top thm-cont-g3-bdrcolor--border-right--edit-mode-grid thm-cont-h1-bgcolor-1--safe-sel-l1-hover--view-mode-grid thm-cont-h1-bgcolor--hover--edit-mode-grid thm-cont-s1-bgcolor--grid-row-selected thm-cont-g0-bgcolor--grid-row-selected--edit-mode-grid thm-cont-s1-bgcolor--grid-row-current--multiselect-grid"
                className="thm-cont-g3-bdrcolor--border-top thm-cont-g3-bdrcolor--border-right--edit-mode-grid thm-cont-h1-bgcolor-1--safe-sel-l1-hover--view-mode-grid thm-cont-h1-bgcolor--hover--edit-mode-grid thm-cont-s1-bgcolor--grid-row-selected thm-cont-g0-bgcolor--grid-row-selected--edit-mode-grid thm-cont-s1-bgcolor--grid-row-current--multiselect-grid thm-cont-g0-bgcolor--grid-row-current--edit-mode-grid edit-container"
            >
                {
                    columnDefinition.type === 'date' &&
                    <MyDatePicker />
                }

                {
                    columnDefinition.type === 'string' &&
                    <input
                        className="cursorinherit stringcontrol-edit thm-cont-u1-font-size thm-cont-u1-font-stack thm-cont-g2-bdrcolor-1 thm-cont-s1-bdrcolor--focus thm-cont-s1-outlinecolor--focus thm-cont-u1-color-2--medflat thm-cont-h1-bdrcolor--hover thm-cont-h1-bdrcolor--prev-sib-hover"
                        type="text"
                        spellCheck="false"
                        maxLength={255}
                        aria-labelledby="column_header_b2x"
                        role="textbox"
                        autoComplete="autoComplete-off"
                        value={cellValue}
                        onChange={(e) => setCellValue(e.target.value)}
                        name={rowColumn.name}
                        onBlur={onCellBlur}
                        readOnly={columnDefinition.readOnly}
                        disabled={columnDefinition.readOnly}
                
                    />
                }
                 {
                    columnDefinition.type === 'number' &&
                    <input
                        className="cursorinherit stringcontrol-edit thm-cont-u1-font-size thm-cont-u1-font-stack thm-cont-g2-bdrcolor-1 thm-cont-s1-bdrcolor--focus thm-cont-s1-outlinecolor--focus thm-cont-u1-color-2--medflat thm-cont-h1-bdrcolor--hover thm-cont-h1-bdrcolor--prev-sib-hover"
                        type="number"
                        spellCheck="false"
                        maxLength={255}
                        aria-labelledby="column_header_b2x"
                        role="textbox"
                        autoComplete="autoComplete-off"
                        value={cellValue}
                        onChange={(e) => setCellValue(e.target.value)}
                        name={rowColumn.name}
                        onBlur={onCellBlur}
                        readOnly={columnDefinition.readOnly}
                        disabled={columnDefinition.readOnly}
                    />
                }
                {
                    columnDefinition.type === 'option' &&
                    <select
                        className="cursorinherit stringcontrol-edit thm-cont-u1-font-size thm-cont-u1-font-stack thm-cont-g2-bdrcolor-1 thm-cont-s1-bdrcolor--focus thm-cont-s1-outlinecolor--focus thm-cont-u1-color-2--medflat thm-cont-h1-bdrcolor--hover thm-cont-h1-bdrcolor--prev-sib-hover"
                        spellCheck="false"
                        aria-labelledby="column_header_b2x"
                        role="textbox"
                        autoComplete="autoComplete-off"
                        value={cellValue}
                        onChange={(e) => setCellValue(e.target.value)}
                        name={rowColumn.name}
                        onBlur={onCellBlur}
                         disabled={columnDefinition.readOnly}
                
                        >
                        {columnDefinition.options?.map(opt => (
                            <option value={opt.value} key={opt.value}>{opt.description}</option>
                        ))}
                    </select>

                 }
            </td>
        )
    }

    // not selected row 
    return (
        <td key={rowColumn.name} tabIndex={0} role="gridcell" className="thm-cont-g3-bdrcolor--border-top thm-cont-g3-bdrcolor--border-right--edit-mode-grid thm-cont-h1-bgcolor-1--safe-sel-l1-hover--view-mode-grid thm-cont-h1-bgcolor--hover--edit-mode-grid thm-cont-s1-bgcolor--grid-row-selected thm-cont-g0-bgcolor--grid-row-selected--edit-mode-grid thm-cont-s1-bgcolor--grid-row-current--multiselect-grid thm-cont-g0-bgcolor--grid-row-current--edit-mode-grid edit-container">
            <span className="stringcontrol-read value thm-cont-u1-font-size-2--medflat thm-cont-u1-font-stack-2--medflat thm-cont-u1-color-2--medflat thm-cont-u1-color-2--medtint--grid-row-selected thm-cont-u1-color-2--mintint--grid-row-nosel-hovered thm-cont-g2-bgcolor-2 thm-cont-s1-bdrcolor--focus thm-cont-s1-outlinecolor--focus" id="b94ee" role="textbox" aria-readonly="true" title="KHL-PID/50076270" aria-labelledby="column_header_b2x">
                {rowColumn.value}
            </span>
        </td>
    )
}
