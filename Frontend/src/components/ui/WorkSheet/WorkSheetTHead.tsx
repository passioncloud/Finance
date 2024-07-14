
function WorkSheetTHeadColumn({ column }: { column: WorkSheetColumnDefinition }) {
    return (
        <th className="thm-cont-h1-bgcolor--hover ms-nav-contextmenu-trigger" abbr="Invoice No" scope="col" role="columnheader" style={{ width: '39ex' }} aria-haspopup="menu" aria-expanded="false" aria-sort="ascending">
            <div className="columncaption columncaption-leftalign" style={{ minWidth: '180px' }}>
                {column.label}
                {/* <a draggable="false" href="#" role="button" className="thm-cont-c5-font-size thm-cont-c5-font-stack thm-cont-c5-color--medflat" id="column_header_b2y" data-sorting-column-link="true" title="Sort on 'Invoice No'" data-tabbable="true" tabIndex={0} aria-label="Invoice No, sorted in Ascending order">{column.label}</a> */}
            </div>
        </th>
    )
}

export function WorkSheetTHead({ columns }: { columns: WorkSheetColumnDefinition[] }) {
    if (!columns.length) return null;
    const [firstColumn, ...otherColumns] = columns
    return (
        <thead role="rowgroup" className="">
            <tr role="row" aria-selected="false">
                <th className="icon-column" aria-label="Error" scope="col" role="columnheader">
                </th>
                <th className="icon-column grid-selection-column" scope="col" role="presentation" aria-hidden="true" aria-label="Selected" tabIndex={-1}>
                    <div tabIndex={-1} role="checkbox" title="Select all rows" className="grid-selection-column-checkbox-wrapper" aria-checked="false">
                        <input type="checkbox" className="ms-nav-grid-rowselectioncheckbox thm-cont-s2-bgcolor-1--checked-label thm-cont-s2-color-1--medtint--checked-label--pseudo_before thm-cont-s2-color-1--medtint--checked-label--pseudo_after" tabIndex={-1} aria-hidden="true" id="gridSelectAllCheckBox-b1r" />
                        <label className="ms-nav-check-circle thm-cont-s2-subd-bgcolor-1 thm-cont-s2-subd-color-1--pseudo_before thm-cont-s2-subd-color-1--pseudo_after" htmlFor="gridSelectAllCheckBox-b1r">
                        </label>
                    </div>
                </th>
                <WorkSheetTHeadColumn
                    column={firstColumn}
                />
                <th className="contextmenu-column frozen-column-auto freeze-pane-border" scope="col" role="columnheader" aria-label="More Options" draggable="false">
                    <div>
                    </div>
                </th>
                {otherColumns.map(col => (
                    <WorkSheetTHeadColumn column={col} key={col.name} />
                ))}
                
                <th className="freeze-pane-padding show-freeze-pane-padding" style={{ width: '0px' }} draggable="false">
                    <div>
                    </div>
                </th>
            </tr>
        </thead>
    )
}