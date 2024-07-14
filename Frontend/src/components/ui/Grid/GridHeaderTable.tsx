export default function GridHeaderTable() {
    return (
        <table className="ms-nav-grid ms-nav-grid-edit ms-nav-grid-header-table"
            role="presentation" data-focus-zone="true">
       <GridHeader_THead />
        </table>
    )
}

export function GridHeader_THead() {
    return (
        <thead role="rowgroup" className="">
        <tr role="row" aria-selected="false">
            <th className="icon-column" aria-label="Error" scope="col" role="columnheader">
            </th>
            <th className="icon-column grid-selection-column" scope="col" role="presentation" aria-hidden="true" aria-label="Selected" tabIndex={-1}>
                <div tabIndex={-1} role="checkbox" title="Select all rows" className="grid-selection-column-checkbox-wrapper" aria-checked="false">
                    <input type="checkbox" className="ms-nav-grid-rowselectioncheckbox thm-cont-s2-bgcolor-1--checked-label thm-cont-s2-color-1--medtint--checked-label--pseudo_before thm-cont-s2-color-1--medtint--checked-label--pseudo_after" tabIndex={-1} aria-hidden="true" id="gridSelectAllCheckBox-b1r"/>
                        <label className="ms-nav-check-circle thm-cont-s2-subd-bgcolor-1 thm-cont-s2-subd-color-1--pseudo_before thm-cont-s2-subd-color-1--pseudo_after" htmlFor="gridSelectAllCheckBox-b1r">
                        </label>
                </div>
            </th>
            <th className="thm-cont-h1-bgcolor--hover ms-nav-contextmenu-trigger" abbr="Invoice No" scope="col" role="columnheader" style={{width: '39ex'}} aria-haspopup="menu" aria-expanded="false" aria-sort="ascending">
                <div className="columncaption columncaption-leftalign" style={{minWidth: '212px'}}>
                    <a draggable="false" href="#" role="button" className="thm-cont-c5-font-size thm-cont-c5-font-stack thm-cont-c5-color--medflat" id="column_header_b2y" data-sorting-column-link="true" title="Sort on 'Invoice No'" data-tabbable="true"  tabIndex={0} aria-label="Invoice No, sorted in Ascending order">Invoice No</a>
                    <span className="sorting-indicator ms-sortarrowup-iconouter">
                        <img draggable="false" alt="Ascending" src="https://localhost:8443/BC190/Resources/Images/sortingUpArrow.png?_v=19.0.29884.30666" />
                    </span>
                    <span className="filteredIndicator ms-nav-hidden">
                        <img draggable="false" alt="" src="https://localhost:8443/BC190/Resources/Images/BLANK.GIF?_v=19.0.29884.30666"/>
                    </span>
                </div>
                <div className="ms-nav-grid-columncaption-ctxmenuarrow">
                    <a draggable="false" title="Open Menu" href="#" className="ms-nav-grid-columncaption-ctxmenuarrowlink icon-DownCaretSmall" role="button" aria-haspopup="true" aria-expanded="false" aria-label="Open menu for Invoice No" data-tabbable="true"  tabIndex={-1}>
                    </a>
                </div>
                <button type="button" className="column-resize-bar thm-cont-s2-bgcolor-1--hover thm-cont-s2-bgcolor-1--focus" tabIndex={-1} aria-hidden="true">
                    <span className="left-area">
                    </span>
                    <span className="right-area wide-hover-area">
                    </span>
                </button>
            </th>
            <th className="contextmenu-column frozen-column-auto freeze-pane-border" scope="col" role="columnheader" aria-label="More Options" draggable="false">
                <div>
                </div>
            </th>
            <th className="thm-cont-h1-bgcolor--hover ms-nav-contextmenu-trigger" abbr="UHID" scope="col" role="columnheader" style={{width: '15ex'}} aria-haspopup="menu" aria-expanded="false">
                <div className="columncaption columncaption-leftalign" style={{minWidth: '68px'}}>
                    <a draggable="false" href="#" role="button" className="thm-cont-c5-font-size thm-cont-c5-font-stack thm-cont-c5-color--medflat" id="column_header_b2x" data-sorting-column-link="true" title="Sort on 'UHID'" data-tabbable="true"  tabIndex={-1}>UHID</a>
                    <span className="filteredIndicator ms-nav-hidden">
                        <img draggable="false" alt="" src="https://localhost:8443/BC190/Resources/Images/BLANK.GIF?_v=19.0.29884.30666"/>
                    </span>
                </div>
                <div className="ms-nav-grid-columncaption-ctxmenuarrow">
                    <a draggable="false" title="Open Menu" href="#" className="ms-nav-grid-columncaption-ctxmenuarrowlink icon-DownCaretSmall" role="button" aria-haspopup="true" aria-expanded="false" aria-label="Open menu for UHID" data-tabbable="true"  tabIndex={-1}>
                    </a>
                </div>
                <button type="button" className="column-resize-bar thm-cont-s2-bgcolor-1--hover thm-cont-s2-bgcolor-1--focus" tabIndex={-1} aria-hidden="true">
                    <span className="left-area">
                    </span>
                    <span className="right-area">
                    </span>
                </button>
            </th>
            <th className="thm-cont-h1-bgcolor--hover ms-nav-contextmenu-trigger" abbr="Patient Name" scope="col" role="columnheader" style={{width: '35ex'}} aria-haspopup="menu" aria-expanded="false">
                <div className="columncaption columncaption-leftalign" style={{minWidth: '188px'}}>
                    <a draggable="false" href="#" role="button" className="thm-cont-c5-font-size thm-cont-c5-font-stack thm-cont-c5-color--medflat" id="column_header_b2w" data-sorting-column-link="true" title="Sort on 'Patient Name'" data-tabbable="true"  tabIndex={-1}>Patient Name</a>
                    <span className="filteredIndicator ms-filter-iconouter">
                        <img draggable="false" alt="Filtered" src="https://localhost:8443/BC190/Resources/Images/Filtering.png?_v=19.0.29884.30666" />
                    </span>
                </div>
                <div className="ms-nav-grid-columncaption-ctxmenuarrow">
                    <a draggable="false" title="Open Menu" href="#" className="ms-nav-grid-columncaption-ctxmenuarrowlink icon-DownCaretSmall" role="button" aria-haspopup="true" aria-expanded="false" aria-label="Open menu for Patient Name" data-tabbable="true"  tabIndex={-1}>
                    </a>
                </div>
                <button type="button" className="column-resize-bar thm-cont-s2-bgcolor-1--hover thm-cont-s2-bgcolor-1--focus" tabIndex={-1} aria-hidden="true">
                    <span className="left-area">
                    </span>
                    <span className="right-area">
                    </span>
                </button>
            </th>
            <th className="thm-cont-h1-bgcolor--hover ms-nav-contextmenu-trigger" abbr="Encounter No" scope="col" role="columnheader" style={{width: '15ex'}} aria-haspopup="menu" aria-expanded="false">
                <div className="columncaption columncaption-leftalign" style={{minWidth: '68px'}}>
                    <a draggable="false" href="#" role="button" className="thm-cont-c5-font-size thm-cont-c5-font-stack thm-cont-c5-color--medflat" id="column_header_b2v" data-sorting-column-link="true" title="Sort on 'Encounter No'" data-tabbable="true"  tabIndex={-1}>Encounter No</a>
                    <span className="filteredIndicator ms-nav-hidden">
                        <img draggable="false" alt="" src="https://localhost:8443/BC190/Resources/Images/BLANK.GIF?_v=19.0.29884.30666"/>
                    </span>
                </div>
                <div className="ms-nav-grid-columncaption-ctxmenuarrow">
                    <a draggable="false" title="Open Menu" href="#" className="ms-nav-grid-columncaption-ctxmenuarrowlink icon-DownCaretSmall" role="button" aria-haspopup="true" aria-expanded="false" aria-label="Open menu for Encounter No" data-tabbable="true"  tabIndex={-1}>
                    </a>
                </div>
                <button type="button" className="column-resize-bar thm-cont-s2-bgcolor-1--hover thm-cont-s2-bgcolor-1--focus" tabIndex={-1} aria-hidden="true">
                    <span className="left-area">
                    </span>
                    <span className="right-area">
                    </span>
                </button>
            </th>
            <th className="thm-cont-h1-bgcolor--hover ms-nav-contextmenu-trigger" abbr="Insurance Company" scope="col" role="columnheader" style={{width: '35ex'}} aria-haspopup="menu" aria-expanded="false">
                <div className="columncaption columncaption-leftalign" style={{minWidth: '188px'}}>
                    <a draggable="false" href="#" role="button" className="thm-cont-c5-font-size thm-cont-c5-font-stack thm-cont-c5-color--medflat" id="column_header_b2u" data-sorting-column-link="true" title="Sort on 'Insurance Company'" data-tabbable="true"  tabIndex={-1}>Insurance Company</a>
                    <span className="filteredIndicator ms-nav-hidden">
                        <img draggable="false" alt="" src="https://localhost:8443/BC190/Resources/Images/BLANK.GIF?_v=19.0.29884.30666"/>
                    </span>
                </div>
                <div className="ms-nav-grid-columncaption-ctxmenuarrow">
                    <a draggable="false" title="Open Menu" href="#" className="ms-nav-grid-columncaption-ctxmenuarrowlink icon-DownCaretSmall" role="button" aria-haspopup="true" aria-expanded="false" aria-label="Open menu for Insurance Company" data-tabbable="true"  tabIndex={-1}>
                    </a>
                </div>
                <button type="button" className="column-resize-bar thm-cont-s2-bgcolor-1--hover thm-cont-s2-bgcolor-1--focus" tabIndex={-1} aria-hidden="true">
                    <span className="left-area">
                    </span>
                    <span className="right-area">
                    </span>
                </button>
            </th>
            <th className="thm-cont-h1-bgcolor--hover ms-nav-contextmenu-trigger" abbr="Employer" scope="col" role="columnheader" style={{width: '35ex'}} aria-haspopup="menu" aria-expanded="false">
                <div className="columncaption columncaption-leftalign" style={{minWidth: '188px'}}>
                    <a draggable="false" href="#" role="button" className="thm-cont-c5-font-size thm-cont-c5-font-stack thm-cont-c5-color--medflat" id="column_header_b2t" data-sorting-column-link="true" title="Sort on 'Employer'" data-tabbable="true"  tabIndex={-1}>Employer</a>
                    <span className="filteredIndicator ms-nav-hidden">
                        <img draggable="false" alt="" src="https://localhost:8443/BC190/Resources/Images/BLANK.GIF?_v=19.0.29884.30666"/>
                    </span>
                </div>
                <div className="ms-nav-grid-columncaption-ctxmenuarrow">
                    <a draggable="false" title="Open Menu" href="#" className="ms-nav-grid-columncaption-ctxmenuarrowlink icon-DownCaretSmall" role="button" aria-haspopup="true" aria-expanded="false" aria-label="Open menu for Employer" data-tabbable="true"  tabIndex={-1}>
                    </a>
                </div>
                <button type="button" className="column-resize-bar thm-cont-s2-bgcolor-1--hover thm-cont-s2-bgcolor-1--focus" tabIndex={-1} aria-hidden="true">
                    <span className="left-area">
                    </span>
                    <span className="right-area">
                    </span>
                </button>
            </th>
            <th className="thm-cont-h1-bgcolor--hover ms-nav-contextmenu-trigger" abbr="Claim No" scope="col" role="columnheader" style={{width: '35ex'}} aria-haspopup="menu" aria-expanded="false">
                <div className="columncaption columncaption-leftalign" style={{minWidth: '188px'}}>
                    <a draggable="false" href="#" role="button" className="thm-cont-c5-font-size thm-cont-c5-font-stack thm-cont-c5-color--medflat" id="column_header_b2s" data-sorting-column-link="true" title="Sort on 'Claim No'" data-tabbable="true"  tabIndex={-1}>Claim No</a>
                    <span className="filteredIndicator ms-nav-hidden">
                        <img draggable="false" alt="" src="https://localhost:8443/BC190/Resources/Images/BLANK.GIF?_v=19.0.29884.30666"/>
                    </span>
                </div>
                <div className="ms-nav-grid-columncaption-ctxmenuarrow">
                    <a draggable="false" title="Open Menu" href="#" className="ms-nav-grid-columncaption-ctxmenuarrowlink icon-DownCaretSmall" role="button" aria-haspopup="true" aria-expanded="false" aria-label="Open menu for Claim No" data-tabbable="true"  tabIndex={-1}>
                    </a>
                </div>
                <button type="button" className="column-resize-bar thm-cont-s2-bgcolor-1--hover thm-cont-s2-bgcolor-1--focus" tabIndex={-1} aria-hidden="true">
                    <span className="left-area">
                    </span>
                    <span className="right-area">
                    </span>
                </button>
            </th>
            <th className="thm-cont-h1-bgcolor--hover ms-nav-contextmenu-trigger" abbr="IPD Or OPD" scope="col" role="columnheader" style={{width: '15ex'}} aria-haspopup="menu" aria-expanded="false">
                <div className="columncaption columncaption-leftalign" style={{minWidth: '68px'}}>
                    <a draggable="false" href="#" role="button" className="thm-cont-c5-font-size thm-cont-c5-font-stack thm-cont-c5-color--medflat" id="column_header_b2r" data-sorting-column-link="true" title="Sort on 'IPD Or OPD'" data-tabbable="true"  tabIndex={-1}>IPD Or OPD</a>
                    <span className="filteredIndicator ms-nav-hidden">
                        <img draggable="false" alt="" src="https://localhost:8443/BC190/Resources/Images/BLANK.GIF?_v=19.0.29884.30666"/>
                    </span>
                </div>
                <div className="ms-nav-grid-columncaption-ctxmenuarrow">
                    <a draggable="false" title="Open Menu" href="#" className="ms-nav-grid-columncaption-ctxmenuarrowlink icon-DownCaretSmall" role="button" aria-haspopup="true" aria-expanded="false" aria-label="Open menu for IPD Or OPD" data-tabbable="true"  tabIndex={-1}>
                    </a>
                </div>
                <button type="button" className="column-resize-bar thm-cont-s2-bgcolor-1--hover thm-cont-s2-bgcolor-1--focus" tabIndex={-1} aria-hidden="true">
                    <span className="left-area">
                    </span>
                    <span className="right-area">
                    </span>
                </button>
            </th>
            <th className="thm-cont-h1-bgcolor--hover ms-nav-contextmenu-trigger" abbr="Doctor Name" scope="col" role="columnheader" style={{width: '35ex'}} aria-haspopup="menu" aria-expanded="false">
                <div className="columncaption columncaption-leftalign" style={{minWidth: '188px'}}>
                    <a draggable="false" href="#" role="button" className="thm-cont-c5-font-size thm-cont-c5-font-stack thm-cont-c5-color--medflat" id="column_header_b2q" data-sorting-column-link="true" title="Sort on 'Doctor Name'" data-tabbable="true"  tabIndex={-1}>Doctor Name</a>
                    <span className="filteredIndicator ms-nav-hidden">
                        <img draggable="false" alt="" src="https://localhost:8443/BC190/Resources/Images/BLANK.GIF?_v=19.0.29884.30666"/>
                    </span>
                </div>
                <div className="ms-nav-grid-columncaption-ctxmenuarrow">
                    <a draggable="false" title="Open Menu" href="#" className="ms-nav-grid-columncaption-ctxmenuarrowlink icon-DownCaretSmall" role="button" aria-haspopup="true" aria-expanded="false" aria-label="Open menu for Doctor Name" data-tabbable="true"  tabIndex={-1}>
                    </a>
                </div>
                <button type="button" className="column-resize-bar thm-cont-s2-bgcolor-1--hover thm-cont-s2-bgcolor-1--focus" tabIndex={-1} aria-hidden="true">
                    <span className="left-area">
                    </span>
                    <span className="right-area">
                    </span>
                </button>
            </th>
            <th className="thm-cont-h1-bgcolor--hover ms-nav-contextmenu-trigger" abbr="Pay Type" scope="col" role="columnheader" style={{width: '30ex'}} aria-haspopup="menu" aria-expanded="false">
                <div className="columncaption columncaption-leftalign" style={{minWidth: '158px'}}>
                    <a draggable="false" href="#" role="button" className="thm-cont-c5-font-size thm-cont-c5-font-stack thm-cont-c5-color--medflat" id="column_header_b2p" data-sorting-column-link="true" title="Sort on 'Pay Type'" data-tabbable="true"  tabIndex={-1}>Pay Type</a>
                    <span className="filteredIndicator ms-nav-hidden">
                        <img draggable="false" alt="" src="https://localhost:8443/BC190/Resources/Images/BLANK.GIF?_v=19.0.29884.30666"/>
                    </span>
                </div>
                <div className="ms-nav-grid-columncaption-ctxmenuarrow">
                    <a draggable="false" title="Open Menu" href="#" className="ms-nav-grid-columncaption-ctxmenuarrowlink icon-DownCaretSmall" role="button" aria-haspopup="true" aria-expanded="false" aria-label="Open menu for Pay Type" data-tabbable="true"  tabIndex={-1}>
                    </a>
                </div>
                <button type="button" className="column-resize-bar thm-cont-s2-bgcolor-1--hover thm-cont-s2-bgcolor-1--focus" tabIndex={-1} aria-hidden="true">
                    <span className="left-area">
                    </span>
                    <span className="right-area">
                    </span>
                </button>
            </th>
            <th className="thm-cont-h1-bgcolor--hover ms-nav-contextmenu-trigger" abbr="Clinic Name" scope="col" role="columnheader" style={{width: '35ex'}} aria-haspopup="menu" aria-expanded="false">
                <div className="columncaption columncaption-leftalign" style={{minWidth: '188px'}}>
                    <a draggable="false" href="#" role="button" className="thm-cont-c5-font-size thm-cont-c5-font-stack thm-cont-c5-color--medflat" id="column_header_b2o" data-sorting-column-link="true" title="Sort on 'Clinic Name'" data-tabbable="true"  tabIndex={-1}>Clinic Name</a>
                    <span className="filteredIndicator ms-nav-hidden">
                        <img draggable="false" alt="" src="https://localhost:8443/BC190/Resources/Images/BLANK.GIF?_v=19.0.29884.30666"/>
                    </span>
                </div>
                <div className="ms-nav-grid-columncaption-ctxmenuarrow">
                    <a draggable="false" title="Open Menu" href="#" className="ms-nav-grid-columncaption-ctxmenuarrowlink icon-DownCaretSmall" role="button" aria-haspopup="true" aria-expanded="false" aria-label="Open menu for Clinic Name" data-tabbable="true"  tabIndex={-1}>
                    </a>
                </div>
                <button type="button" className="column-resize-bar thm-cont-s2-bgcolor-1--hover thm-cont-s2-bgcolor-1--focus" tabIndex={-1} aria-hidden="true">
                    <span className="left-area">
                    </span>
                    <span className="right-area">
                    </span>
                </button>
            </th>
            <th className="thm-cont-h1-bgcolor--hover ms-nav-contextmenu-trigger" abbr="Department Name" scope="col" role="columnheader" style={{width: '35ex'}} aria-haspopup="menu" aria-expanded="false">
                <div className="columncaption columncaption-leftalign" style={{minWidth: '188px'}}>
                    <a draggable="false" href="#" role="button" className="thm-cont-c5-font-size thm-cont-c5-font-stack thm-cont-c5-color--medflat" id="column_header_b2n" data-sorting-column-link="true" title="Sort on 'Department Name'" data-tabbable="true"  tabIndex={-1}>Department Name</a>
                    <span className="filteredIndicator ms-nav-hidden">
                        <img draggable="false" alt="" src="https://localhost:8443/BC190/Resources/Images/BLANK.GIF?_v=19.0.29884.30666"/>
                    </span>
                </div>
                <div className="ms-nav-grid-columncaption-ctxmenuarrow">
                    <a draggable="false" title="Open Menu" href="#" className="ms-nav-grid-columncaption-ctxmenuarrowlink icon-DownCaretSmall" role="button" aria-haspopup="true" aria-expanded="false" aria-label="Open menu for Department Name" data-tabbable="true"  tabIndex={-1}>
                    </a>
                </div>
                <button type="button" className="column-resize-bar thm-cont-s2-bgcolor-1--hover thm-cont-s2-bgcolor-1--focus" tabIndex={-1} aria-hidden="true">
                    <span className="left-area">
                    </span>
                    <span className="right-area">
                    </span>
                </button>
            </th>
            <th className="thm-cont-h1-bgcolor--hover ms-nav-contextmenu-trigger" abbr="Column N Amount" scope="col" role="columnheader" style={{width: '18ex'}} aria-haspopup="menu" aria-expanded="false">
                <div className="columncaption columncaption-rightalign" style={{minWidth: '86px'}}>
                    <a draggable="false" href="#" role="button" className="thm-cont-c5-font-size thm-cont-c5-font-stack thm-cont-c5-color--medflat" id="column_header_b2m" data-sorting-column-link="true" title="Sort on 'Column N Amount'" data-tabbable="true"  tabIndex={-1}>Column N Amount</a>
                    <span className="filteredIndicator ms-nav-hidden">
                        <img draggable="false" alt="" src="https://localhost:8443/BC190/Resources/Images/BLANK.GIF?_v=19.0.29884.30666"/>
                    </span>
                </div>
                <div className="ms-nav-grid-columncaption-ctxmenuarrow">
                    <a draggable="false" title="Open Menu" href="#" className="ms-nav-grid-columncaption-ctxmenuarrowlink icon-DownCaretSmall" role="button" aria-haspopup="true" aria-expanded="false" aria-label="Open menu for Column N Amount" data-tabbable="true"  tabIndex={-1}>
                    </a>
                </div>
                <button type="button" className="column-resize-bar thm-cont-s2-bgcolor-1--hover thm-cont-s2-bgcolor-1--focus" tabIndex={-1} aria-hidden="true">
                    <span className="left-area">
                    </span>
                    <span className="right-area">
                    </span>
                </button>
            </th>
            <th className="thm-cont-h1-bgcolor--hover ms-nav-contextmenu-trigger" abbr="Anaesthetist Fee" scope="col" role="columnheader" style={{width: '18ex'}} aria-haspopup="menu" aria-expanded="false">
                <div className="columncaption columncaption-rightalign" style={{minWidth: '86px'}}>
                    <a draggable="false" href="#" role="button" className="thm-cont-c5-font-size thm-cont-c5-font-stack thm-cont-c5-color--medflat" id="column_header_b2l" data-sorting-column-link="true" title="Sort on 'Anaesthetist Fee'" data-tabbable="true"  tabIndex={-1}>Anaesthetist Fee</a>
                    <span className="filteredIndicator ms-nav-hidden">
                        <img draggable="false" alt="" src="https://localhost:8443/BC190/Resources/Images/BLANK.GIF?_v=19.0.29884.30666"/>
                    </span>
                </div>
                <div className="ms-nav-grid-columncaption-ctxmenuarrow">
                    <a draggable="false" title="Open Menu" href="#" className="ms-nav-grid-columncaption-ctxmenuarrowlink icon-DownCaretSmall" role="button" aria-haspopup="true" aria-expanded="false" aria-label="Open menu for Anaesthetist Fee" data-tabbable="true"  tabIndex={-1}>
                    </a>
                </div>
                <button type="button" className="column-resize-bar thm-cont-s2-bgcolor-1--hover thm-cont-s2-bgcolor-1--focus" tabIndex={-1} aria-hidden="true">
                    <span className="left-area">
                    </span>
                    <span className="right-area">
                    </span>
                </button>
            </th>
            <th className="thm-cont-h1-bgcolor--hover ms-nav-contextmenu-trigger" abbr="Bed Charges" scope="col" role="columnheader" style={{width: '18ex'}} aria-haspopup="menu" aria-expanded="false">
                <div className="columncaption columncaption-rightalign" style={{minWidth: '86px'}}>
                    <a draggable="false" href="#" role="button" className="thm-cont-c5-font-size thm-cont-c5-font-stack thm-cont-c5-color--medflat" id="column_header_b2k" data-sorting-column-link="true" title="Sort on 'Bed Charges'" data-tabbable="true"  tabIndex={-1}>Bed Charges</a>
                    <span className="filteredIndicator ms-nav-hidden">
                        <img draggable="false" alt="" src="https://localhost:8443/BC190/Resources/Images/BLANK.GIF?_v=19.0.29884.30666"/>
                    </span>
                </div>
                <div className="ms-nav-grid-columncaption-ctxmenuarrow">
                    <a draggable="false" title="Open Menu" href="#" className="ms-nav-grid-columncaption-ctxmenuarrowlink icon-DownCaretSmall" role="button" aria-haspopup="true" aria-expanded="false" aria-label="Open menu for Bed Charges" data-tabbable="true"  tabIndex={-1}>
                    </a>
                </div>
                <button type="button" className="column-resize-bar thm-cont-s2-bgcolor-1--hover thm-cont-s2-bgcolor-1--focus" tabIndex={-1} aria-hidden="true">
                    <span className="left-area">
                    </span>
                    <span className="right-area">
                    </span>
                </button>
            </th>
            <th className="thm-cont-h1-bgcolor--hover ms-nav-contextmenu-trigger" abbr="Booking Fee" scope="col" role="columnheader" style={{width: '18ex'}} aria-haspopup="menu" aria-expanded="false">
                <div className="columncaption columncaption-rightalign" style={{minWidth: '86px'}}>
                    <a draggable="false" href="#" role="button" className="thm-cont-c5-font-size thm-cont-c5-font-stack thm-cont-c5-color--medflat" id="column_header_b2j" data-sorting-column-link="true" title="Sort on 'Booking Fee'" data-tabbable="true"  tabIndex={-1}>Booking Fee</a>
                    <span className="filteredIndicator ms-nav-hidden">
                        <img draggable="false" alt="" src="https://localhost:8443/BC190/Resources/Images/BLANK.GIF?_v=19.0.29884.30666"/>
                    </span>
                </div>
                <div className="ms-nav-grid-columncaption-ctxmenuarrow">
                    <a draggable="false" title="Open Menu" href="#" className="ms-nav-grid-columncaption-ctxmenuarrowlink icon-DownCaretSmall" role="button" aria-haspopup="true" aria-expanded="false" aria-label="Open menu for Booking Fee" data-tabbable="true"  tabIndex={-1}>
                    </a>
                </div>
                <button type="button" className="column-resize-bar thm-cont-s2-bgcolor-1--hover thm-cont-s2-bgcolor-1--focus" tabIndex={-1} aria-hidden="true">
                    <span className="left-area">
                    </span>
                    <span className="right-area">
                    </span>
                </button>
            </th>
            <th className="thm-cont-h1-bgcolor--hover ms-nav-contextmenu-trigger" abbr="Consultation Charges" scope="col" role="columnheader" style={{width: '18ex'}} aria-haspopup="menu" aria-expanded="false">
                <div className="columncaption columncaption-rightalign" style={{minWidth: '86px'}}>
                    <a draggable="false" href="#" role="button" className="thm-cont-c5-font-size thm-cont-c5-font-stack thm-cont-c5-color--medflat" id="column_header_b2i" data-sorting-column-link="true" title="Sort on 'Consultation Charges'" data-tabbable="true"  tabIndex={-1}>Consultation Charges</a>
                    <span className="filteredIndicator ms-nav-hidden">
                        <img draggable="false" alt="" src="https://localhost:8443/BC190/Resources/Images/BLANK.GIF?_v=19.0.29884.30666"/>
                    </span>
                </div>
                <div className="ms-nav-grid-columncaption-ctxmenuarrow">
                    <a draggable="false" title="Open Menu" href="#" className="ms-nav-grid-columncaption-ctxmenuarrowlink icon-DownCaretSmall" role="button" aria-haspopup="true" aria-expanded="false" aria-label="Open menu for Consultation Charges" data-tabbable="true"  tabIndex={-1}>
                    </a>
                </div>
                <button type="button" className="column-resize-bar thm-cont-s2-bgcolor-1--hover thm-cont-s2-bgcolor-1--focus" tabIndex={-1} aria-hidden="true">
                    <span className="left-area">
                    </span>
                    <span className="right-area">
                    </span>
                </button>
            </th>
            <th className="thm-cont-h1-bgcolor--hover ms-nav-contextmenu-trigger" abbr="CT Scan" scope="col" role="columnheader" style={{width: '18ex'}} aria-haspopup="menu" aria-expanded="false">
                <div className="columncaption columncaption-rightalign" style={{minWidth: '86px'}}>
                    <a draggable="false" href="#" role="button" className="thm-cont-c5-font-size thm-cont-c5-font-stack thm-cont-c5-color--medflat" id="column_header_b2h" data-sorting-column-link="true" title="Sort on 'CT Scan'" data-tabbable="true"  tabIndex={-1}>CT Scan</a>
                    <span className="filteredIndicator ms-nav-hidden">
                        <img draggable="false" alt="" src="https://localhost:8443/BC190/Resources/Images/BLANK.GIF?_v=19.0.29884.30666"/>
                    </span>
                </div>
                <div className="ms-nav-grid-columncaption-ctxmenuarrow">
                    <a draggable="false" title="Open Menu" href="#" className="ms-nav-grid-columncaption-ctxmenuarrowlink icon-DownCaretSmall" role="button" aria-haspopup="true" aria-expanded="false" aria-label="Open menu for CT Scan" data-tabbable="true"  tabIndex={-1}>
                    </a>
                </div>
                <button type="button" className="column-resize-bar thm-cont-s2-bgcolor-1--hover thm-cont-s2-bgcolor-1--focus" tabIndex={-1} aria-hidden="true">
                    <span className="left-area">
                    </span>
                    <span className="right-area">
                    </span>
                </button>
            </th>
            <th className="thm-cont-h1-bgcolor--hover ms-nav-contextmenu-trigger" abbr="Day Care" scope="col" role="columnheader" style={{width: '18ex'}} aria-haspopup="menu" aria-expanded="false">
                <div className="columncaption columncaption-rightalign" style={{minWidth: '86px'}}>
                    <a draggable="false" href="#" role="button" className="thm-cont-c5-font-size thm-cont-c5-font-stack thm-cont-c5-color--medflat" id="column_header_b2g" data-sorting-column-link="true" title="Sort on 'Day Care'" data-tabbable="true"  tabIndex={-1}>Day Care</a>
                    <span className="filteredIndicator ms-nav-hidden">
                        <img draggable="false" alt="" src="https://localhost:8443/BC190/Resources/Images/BLANK.GIF?_v=19.0.29884.30666"/>
                    </span>
                </div>
                <div className="ms-nav-grid-columncaption-ctxmenuarrow">
                    <a draggable="false" title="Open Menu" href="#" className="ms-nav-grid-columncaption-ctxmenuarrowlink icon-DownCaretSmall" role="button" aria-haspopup="true" aria-expanded="false" aria-label="Open menu for Day Care" data-tabbable="true"  tabIndex={-1}>
                    </a>
                </div>
                <button type="button" className="column-resize-bar thm-cont-s2-bgcolor-1--hover thm-cont-s2-bgcolor-1--focus" tabIndex={-1} aria-hidden="true">
                    <span className="left-area">
                    </span>
                    <span className="right-area">
                    </span>
                </button>
            </th>
            <th className="thm-cont-h1-bgcolor--hover ms-nav-contextmenu-trigger" abbr="Delivery" scope="col" role="columnheader" style={{width: '18ex'}} aria-haspopup="menu" aria-expanded="false">
                <div className="columncaption columncaption-rightalign" style={{minWidth: '86px'}}>
                    <a draggable="false" href="#" role="button" className="thm-cont-c5-font-size thm-cont-c5-font-stack thm-cont-c5-color--medflat" id="column_header_b2f" data-sorting-column-link="true" title="Sort on 'Delivery'" data-tabbable="true"  tabIndex={-1}>Delivery</a>
                    <span className="filteredIndicator ms-nav-hidden">
                        <img draggable="false" alt="" src="https://localhost:8443/BC190/Resources/Images/BLANK.GIF?_v=19.0.29884.30666"/>
                    </span>
                </div>
                <div className="ms-nav-grid-columncaption-ctxmenuarrow">
                    <a draggable="false" title="Open Menu" href="#" className="ms-nav-grid-columncaption-ctxmenuarrowlink icon-DownCaretSmall" role="button" aria-haspopup="true" aria-expanded="false" aria-label="Open menu for Delivery" data-tabbable="true"  tabIndex={-1}>
                    </a>
                </div>
                <button type="button" className="column-resize-bar thm-cont-s2-bgcolor-1--hover thm-cont-s2-bgcolor-1--focus" tabIndex={-1} aria-hidden="true">
                    <span className="left-area">
                    </span>
                    <span className="right-area">
                    </span>
                </button>
            </th>
            <th className="thm-cont-h1-bgcolor--hover ms-nav-contextmenu-trigger" abbr="Doctors Fee" scope="col" role="columnheader" style={{width: '18ex'}} aria-haspopup="menu" aria-expanded="false">
                <div className="columncaption columncaption-rightalign" style={{minWidth: '86px'}}>
                    <a draggable="false" href="#" role="button" className="thm-cont-c5-font-size thm-cont-c5-font-stack thm-cont-c5-color--medflat" id="column_header_b2e" data-sorting-column-link="true" title="Sort on 'Doctors Fee'" data-tabbable="true"  tabIndex={-1}>Doctors Fee</a>
                    <span className="filteredIndicator ms-nav-hidden">
                        <img draggable="false" alt="" src="https://localhost:8443/BC190/Resources/Images/BLANK.GIF?_v=19.0.29884.30666"/>
                    </span>
                </div>
                <div className="ms-nav-grid-columncaption-ctxmenuarrow">
                    <a draggable="false" title="Open Menu" href="#" className="ms-nav-grid-columncaption-ctxmenuarrowlink icon-DownCaretSmall" role="button" aria-haspopup="true" aria-expanded="false" aria-label="Open menu for Doctors Fee" data-tabbable="true"  tabIndex={-1}>
                    </a>
                </div>
                <button type="button" className="column-resize-bar thm-cont-s2-bgcolor-1--hover thm-cont-s2-bgcolor-1--focus" tabIndex={-1} aria-hidden="true">
                    <span className="left-area">
                    </span>
                    <span className="right-area">
                    </span>
                </button>
            </th>
            <th className="thm-cont-h1-bgcolor--hover ms-nav-contextmenu-trigger" abbr="ECG Or Echo" scope="col" role="columnheader" style={{width: '18ex'}} aria-haspopup="menu" aria-expanded="false">
                <div className="columncaption columncaption-rightalign" style={{minWidth: '86px'}}>
                    <a draggable="false" href="#" role="button" className="thm-cont-c5-font-size thm-cont-c5-font-stack thm-cont-c5-color--medflat" id="column_header_b2d" data-sorting-column-link="true" title="Sort on 'ECG Or Echo'" data-tabbable="true"  tabIndex={-1}>ECG Or Echo</a>
                    <span className="filteredIndicator ms-nav-hidden">
                        <img draggable="false" alt="" src="https://localhost:8443/BC190/Resources/Images/BLANK.GIF?_v=19.0.29884.30666"/>
                    </span>
                </div>
                <div className="ms-nav-grid-columncaption-ctxmenuarrow">
                    <a draggable="false" title="Open Menu" href="#" className="ms-nav-grid-columncaption-ctxmenuarrowlink icon-DownCaretSmall" role="button" aria-haspopup="true" aria-expanded="false" aria-label="Open menu for ECG Or Echo" data-tabbable="true"  tabIndex={-1}>
                    </a>
                </div>
                <button type="button" className="column-resize-bar thm-cont-s2-bgcolor-1--hover thm-cont-s2-bgcolor-1--focus" tabIndex={-1} aria-hidden="true">
                    <span className="left-area">
                    </span>
                    <span className="right-area">
                    </span>
                </button>
            </th>
            <th className="thm-cont-h1-bgcolor--hover ms-nav-contextmenu-trigger" abbr="Endoscopy" scope="col" role="columnheader" style={{width: '18ex'}} aria-haspopup="menu" aria-expanded="false">
                <div className="columncaption columncaption-rightalign" style={{minWidth: '86px'}}>
                    <a draggable="false" href="#" role="button" className="thm-cont-c5-font-size thm-cont-c5-font-stack thm-cont-c5-color--medflat" id="column_header_b2c" data-sorting-column-link="true" title="Sort on 'Endoscopy'" data-tabbable="true"  tabIndex={-1}>Endoscopy</a>
                    <span className="filteredIndicator ms-nav-hidden">
                        <img draggable="false" alt="" src="https://localhost:8443/BC190/Resources/Images/BLANK.GIF?_v=19.0.29884.30666"/>
                    </span>
                </div>
                <div className="ms-nav-grid-columncaption-ctxmenuarrow">
                    <a draggable="false" title="Open Menu" href="#" className="ms-nav-grid-columncaption-ctxmenuarrowlink icon-DownCaretSmall" role="button" aria-haspopup="true" aria-expanded="false" aria-label="Open menu for Endoscopy" data-tabbable="true"  tabIndex={-1}>
                    </a>
                </div>
                <button type="button" className="column-resize-bar thm-cont-s2-bgcolor-1--hover thm-cont-s2-bgcolor-1--focus" tabIndex={-1} aria-hidden="true">
                    <span className="left-area">
                    </span>
                    <span className="right-area">
                    </span>
                </button>
            </th>
            <th className="thm-cont-h1-bgcolor--hover ms-nav-contextmenu-trigger" abbr="ICU Or HDU" scope="col" role="columnheader" style={{width: '18ex'}} aria-haspopup="menu" aria-expanded="false">
                <div className="columncaption columncaption-rightalign" style={{minWidth: '86px'}}>
                    <a draggable="false" href="#" role="button" className="thm-cont-c5-font-size thm-cont-c5-font-stack thm-cont-c5-color--medflat" id="column_header_b2b" data-sorting-column-link="true" title="Sort on 'ICU Or HDU'" data-tabbable="true"  tabIndex={-1}>ICU Or HDU</a>
                    <span className="filteredIndicator ms-nav-hidden">
                        <img draggable="false" alt="" src="https://localhost:8443/BC190/Resources/Images/BLANK.GIF?_v=19.0.29884.30666"/>
                    </span>
                </div>
                <div className="ms-nav-grid-columncaption-ctxmenuarrow">
                    <a draggable="false" title="Open Menu" href="#" className="ms-nav-grid-columncaption-ctxmenuarrowlink icon-DownCaretSmall" role="button" aria-haspopup="true" aria-expanded="false" aria-label="Open menu for ICU Or HDU" data-tabbable="true"  tabIndex={-1}>
                    </a>
                </div>
                <button type="button" className="column-resize-bar thm-cont-s2-bgcolor-1--hover thm-cont-s2-bgcolor-1--focus" tabIndex={-1} aria-hidden="true">
                    <span className="left-area">
                    </span>
                    <span className="right-area">
                    </span>
                </button>
            </th>
            <th className="thm-cont-h1-bgcolor--hover ms-nav-contextmenu-trigger" abbr="Lab" scope="col" role="columnheader" style={{width: '18ex'}} aria-haspopup="menu" aria-expanded="false">
                <div className="columncaption columncaption-rightalign" style={{minWidth: '86px'}}>
                    <a draggable="false" href="#" role="button" className="thm-cont-c5-font-size thm-cont-c5-font-stack thm-cont-c5-color--medflat" id="column_header_b2a" data-sorting-column-link="true" title="Sort on 'Lab'" data-tabbable="true"  tabIndex={-1}>Lab</a>
                    <span className="filteredIndicator ms-nav-hidden">
                        <img draggable="false" alt="" src="https://localhost:8443/BC190/Resources/Images/BLANK.GIF?_v=19.0.29884.30666"/>
                    </span>
                </div>
                <div className="ms-nav-grid-columncaption-ctxmenuarrow">
                    <a draggable="false" title="Open Menu" href="#" className="ms-nav-grid-columncaption-ctxmenuarrowlink icon-DownCaretSmall" role="button" aria-haspopup="true" aria-expanded="false" aria-label="Open menu for Lab" data-tabbable="true"  tabIndex={-1}>
                    </a>
                </div>
                <button type="button" className="column-resize-bar thm-cont-s2-bgcolor-1--hover thm-cont-s2-bgcolor-1--focus" tabIndex={-1} aria-hidden="true">
                    <span className="left-area">
                    </span>
                    <span className="right-area">
                    </span>
                </button>
            </th>
            <th className="thm-cont-h1-bgcolor--hover ms-nav-contextmenu-trigger" abbr="Mortuary" scope="col" role="columnheader" style={{width: '18ex'}} aria-haspopup="menu" aria-expanded="false">
                <div className="columncaption columncaption-rightalign" style={{minWidth: '86px'}}>
                    <a draggable="false" href="#" role="button" className="thm-cont-c5-font-size thm-cont-c5-font-stack thm-cont-c5-color--medflat" id="column_header_b29" data-sorting-column-link="true" title="Sort on 'Mortuary'" data-tabbable="true"  tabIndex={-1}>Mortuary</a>
                    <span className="filteredIndicator ms-nav-hidden">
                        <img draggable="false" alt="" src="https://localhost:8443/BC190/Resources/Images/BLANK.GIF?_v=19.0.29884.30666"/>
                    </span>
                </div>
                <div className="ms-nav-grid-columncaption-ctxmenuarrow">
                    <a draggable="false" title="Open Menu" href="#" className="ms-nav-grid-columncaption-ctxmenuarrowlink icon-DownCaretSmall" role="button" aria-haspopup="true" aria-expanded="false" aria-label="Open menu for Mortuary" data-tabbable="true"  tabIndex={-1}>
                    </a>
                </div>
                <button type="button" className="column-resize-bar thm-cont-s2-bgcolor-1--hover thm-cont-s2-bgcolor-1--focus" tabIndex={-1} aria-hidden="true">
                    <span className="left-area">
                    </span>
                    <span className="right-area">
                    </span>
                </button>
            </th>
            <th className="thm-cont-h1-bgcolor--hover ms-nav-contextmenu-trigger" abbr="Nursing Charges" scope="col" role="columnheader" style={{width: '18ex'}} aria-haspopup="menu" aria-expanded="false">
                <div className="columncaption columncaption-rightalign" style={{minWidth: '86px'}}>
                    <a draggable="false" href="#" role="button" className="thm-cont-c5-font-size thm-cont-c5-font-stack thm-cont-c5-color--medflat" id="column_header_b28" data-sorting-column-link="true" title="Sort on 'Nursing Charges'" data-tabbable="true"  tabIndex={-1}>Nursing Charges</a>
                    <span className="filteredIndicator ms-nav-hidden">
                        <img draggable="false" alt="" src="https://localhost:8443/BC190/Resources/Images/BLANK.GIF?_v=19.0.29884.30666"/>
                    </span>
                </div>
                <div className="ms-nav-grid-columncaption-ctxmenuarrow">
                    <a draggable="false" title="Open Menu" href="#" className="ms-nav-grid-columncaption-ctxmenuarrowlink icon-DownCaretSmall" role="button" aria-haspopup="true" aria-expanded="false" aria-label="Open menu for Nursing Charges" data-tabbable="true"  tabIndex={-1}>
                    </a>
                </div>
                <button type="button" className="column-resize-bar thm-cont-s2-bgcolor-1--hover thm-cont-s2-bgcolor-1--focus" tabIndex={-1} aria-hidden="true">
                    <span className="left-area">
                    </span>
                    <span className="right-area">
                    </span>
                </button>
            </th>
            <th className="thm-cont-h1-bgcolor--hover ms-nav-contextmenu-trigger" abbr="Food And Beverages" scope="col" role="columnheader" style={{width: '18ex'}} aria-haspopup="menu" aria-expanded="false">
                <div className="columncaption columncaption-rightalign" style={{minWidth: '86px'}}>
                    <a draggable="false" href="#" role="button" className="thm-cont-c5-font-size thm-cont-c5-font-stack thm-cont-c5-color--medflat" id="column_header_b27" data-sorting-column-link="true" title="Sort on 'Food And Beverages'" data-tabbable="true"  tabIndex={-1}>Food And Beverages</a>
                    <span className="filteredIndicator ms-nav-hidden">
                        <img draggable="false" alt="" src="https://localhost:8443/BC190/Resources/Images/BLANK.GIF?_v=19.0.29884.30666"/>
                    </span>
                </div>
                <div className="ms-nav-grid-columncaption-ctxmenuarrow">
                    <a draggable="false" title="Open Menu" href="#" className="ms-nav-grid-columncaption-ctxmenuarrowlink icon-DownCaretSmall" role="button" aria-haspopup="true" aria-expanded="false" aria-label="Open menu for Food And Beverages" data-tabbable="true"  tabIndex={-1}>
                    </a>
                </div>
                <button type="button" className="column-resize-bar thm-cont-s2-bgcolor-1--hover thm-cont-s2-bgcolor-1--focus" tabIndex={-1} aria-hidden="true">
                    <span className="left-area">
                    </span>
                    <span className="right-area">
                    </span>
                </button>
            </th>
            <th className="thm-cont-h1-bgcolor--hover ms-nav-contextmenu-trigger" abbr="Pharmacy Charges" scope="col" role="columnheader" style={{width: '18ex'}} aria-haspopup="menu" aria-expanded="false">
                <div className="columncaption columncaption-rightalign" style={{minWidth: '86px'}}>
                    <a draggable="false" href="#" role="button" className="thm-cont-c5-font-size thm-cont-c5-font-stack thm-cont-c5-color--medflat" id="column_header_b26" data-sorting-column-link="true" title="Sort on 'Pharmacy Charges'" data-tabbable="true"  tabIndex={-1}>Pharmacy Charges</a>
                    <span className="filteredIndicator ms-nav-hidden">
                        <img draggable="false" alt="" src="https://localhost:8443/BC190/Resources/Images/BLANK.GIF?_v=19.0.29884.30666"/>
                    </span>
                </div>
                <div className="ms-nav-grid-columncaption-ctxmenuarrow">
                    <a draggable="false" title="Open Menu" href="#" className="ms-nav-grid-columncaption-ctxmenuarrowlink icon-DownCaretSmall" role="button" aria-haspopup="true" aria-expanded="false" aria-label="Open menu for Pharmacy Charges" data-tabbable="true"  tabIndex={-1}>
                    </a>
                </div>
                <button type="button" className="column-resize-bar thm-cont-s2-bgcolor-1--hover thm-cont-s2-bgcolor-1--focus" tabIndex={-1} aria-hidden="true">
                    <span className="left-area">
                    </span>
                    <span className="right-area">
                    </span>
                </button>
            </th>
            <th className="thm-cont-h1-bgcolor--hover ms-nav-contextmenu-trigger" abbr="Physiotherapy" scope="col" role="columnheader" style={{width: '18ex'}} aria-haspopup="menu" aria-expanded="false">
                <div className="columncaption columncaption-rightalign" style={{minWidth: '86px'}}>
                    <a draggable="false" href="#" role="button" className="thm-cont-c5-font-size thm-cont-c5-font-stack thm-cont-c5-color--medflat" id="column_header_b25" data-sorting-column-link="true" title="Sort on 'Physiotherapy'" data-tabbable="true"  tabIndex={-1}>Physiotherapy</a>
                    <span className="filteredIndicator ms-nav-hidden">
                        <img draggable="false" alt="" src="https://localhost:8443/BC190/Resources/Images/BLANK.GIF?_v=19.0.29884.30666"/>
                    </span>
                </div>
                <div className="ms-nav-grid-columncaption-ctxmenuarrow">
                    <a draggable="false" title="Open Menu" href="#" className="ms-nav-grid-columncaption-ctxmenuarrowlink icon-DownCaretSmall" role="button" aria-haspopup="true" aria-expanded="false" aria-label="Open menu for Physiotherapy" data-tabbable="true"  tabIndex={-1}>
                    </a>
                </div>
                <button type="button" className="column-resize-bar thm-cont-s2-bgcolor-1--hover thm-cont-s2-bgcolor-1--focus" tabIndex={-1} aria-hidden="true">
                    <span className="left-area">
                    </span>
                    <span className="right-area">
                    </span>
                </button>
            </th>
            <th className="thm-cont-h1-bgcolor--hover ms-nav-contextmenu-trigger" abbr="Procedures" scope="col" role="columnheader" style={{width: '18ex'}} aria-haspopup="menu" aria-expanded="false">
                <div className="columncaption columncaption-rightalign" style={{minWidth: '86px'}}>
                    <a draggable="false" href="#" role="button" className="thm-cont-c5-font-size thm-cont-c5-font-stack thm-cont-c5-color--medflat" id="column_header_b24" data-sorting-column-link="true" title="Sort on 'Procedures'" data-tabbable="true"  tabIndex={-1}>Procedures</a>
                    <span className="filteredIndicator ms-nav-hidden">
                        <img draggable="false" alt="" src="https://localhost:8443/BC190/Resources/Images/BLANK.GIF?_v=19.0.29884.30666"/>
                    </span>
                </div>
                <div className="ms-nav-grid-columncaption-ctxmenuarrow">
                    <a draggable="false" title="Open Menu" href="#" className="ms-nav-grid-columncaption-ctxmenuarrowlink icon-DownCaretSmall" role="button" aria-haspopup="true" aria-expanded="false" aria-label="Open menu for Procedures" data-tabbable="true"  tabIndex={-1}>
                    </a>
                </div>
                <button type="button" className="column-resize-bar thm-cont-s2-bgcolor-1--hover thm-cont-s2-bgcolor-1--focus" tabIndex={-1} aria-hidden="true">
                    <span className="left-area">
                    </span>
                    <span className="right-area">
                    </span>
                </button>
            </th>
            <th className="thm-cont-h1-bgcolor--hover ms-nav-contextmenu-trigger" abbr="Radio" scope="col" role="columnheader" style={{width: '18ex'}} aria-haspopup="menu" aria-expanded="false">
                <div className="columncaption columncaption-rightalign" style={{minWidth: '86px'}}>
                    <a draggable="false" href="#" role="button" className="thm-cont-c5-font-size thm-cont-c5-font-stack thm-cont-c5-color--medflat" id="column_header_b23" data-sorting-column-link="true" title="Sort on 'Radio'" data-tabbable="true"  tabIndex={-1}>Radio</a>
                    <span className="filteredIndicator ms-nav-hidden">
                        <img draggable="false" alt="" src="https://localhost:8443/BC190/Resources/Images/BLANK.GIF?_v=19.0.29884.30666"/>
                    </span>
                </div>
                <div className="ms-nav-grid-columncaption-ctxmenuarrow">
                    <a draggable="false" title="Open Menu" href="#" className="ms-nav-grid-columncaption-ctxmenuarrowlink icon-DownCaretSmall" role="button" aria-haspopup="true" aria-expanded="false" aria-label="Open menu for Radio" data-tabbable="true"  tabIndex={-1}>
                    </a>
                </div>
                <button type="button" className="column-resize-bar thm-cont-s2-bgcolor-1--hover thm-cont-s2-bgcolor-1--focus" tabIndex={-1} aria-hidden="true">
                    <span className="left-area">
                    </span>
                    <span className="right-area">
                    </span>
                </button>
            </th>
            <th className="thm-cont-h1-bgcolor--hover ms-nav-contextmenu-trigger" abbr="SCU" scope="col" role="columnheader" style={{width: '18ex'}} aria-haspopup="menu" aria-expanded="false">
                <div className="columncaption columncaption-rightalign" style={{minWidth: '86px'}}>
                    <a draggable="false" href="#" role="button" className="thm-cont-c5-font-size thm-cont-c5-font-stack thm-cont-c5-color--medflat" id="column_header_b22" data-sorting-column-link="true" title="Sort on 'SCU'" data-tabbable="true"  tabIndex={-1}>SCU</a>
                    <span className="filteredIndicator ms-nav-hidden">
                        <img draggable="false" alt="" src="https://localhost:8443/BC190/Resources/Images/BLANK.GIF?_v=19.0.29884.30666"/>
                    </span>
                </div>
                <div className="ms-nav-grid-columncaption-ctxmenuarrow">
                    <a draggable="false" title="Open Menu" href="#" className="ms-nav-grid-columncaption-ctxmenuarrowlink icon-DownCaretSmall" role="button" aria-haspopup="true" aria-expanded="false" aria-label="Open menu for SCU" data-tabbable="true"  tabIndex={-1}>
                    </a>
                </div>
                <button type="button" className="column-resize-bar thm-cont-s2-bgcolor-1--hover thm-cont-s2-bgcolor-1--focus" tabIndex={-1} aria-hidden="true">
                    <span className="left-area">
                    </span>
                    <span className="right-area">
                    </span>
                </button>
            </th>
            <th className="thm-cont-h1-bgcolor--hover ms-nav-contextmenu-trigger" abbr="Service Fee" scope="col" role="columnheader" style={{width: '18ex'}} aria-haspopup="menu" aria-expanded="false">
                <div className="columncaption columncaption-rightalign" style={{minWidth: '86px'}}>
                    <a draggable="false" href="#" role="button" className="thm-cont-c5-font-size thm-cont-c5-font-stack thm-cont-c5-color--medflat" id="column_header_b21" data-sorting-column-link="true" title="Sort on 'Service Fee'" data-tabbable="true"  tabIndex={-1}>Service Fee</a>
                    <span className="filteredIndicator ms-nav-hidden">
                        <img draggable="false" alt="" src="https://localhost:8443/BC190/Resources/Images/BLANK.GIF?_v=19.0.29884.30666"/>
                    </span>
                </div>
                <div className="ms-nav-grid-columncaption-ctxmenuarrow">
                    <a draggable="false" title="Open Menu" href="#" className="ms-nav-grid-columncaption-ctxmenuarrowlink icon-DownCaretSmall" role="button" aria-haspopup="true" aria-expanded="false" aria-label="Open menu for Service Fee" data-tabbable="true"  tabIndex={-1}>
                    </a>
                </div>
                <button type="button" className="column-resize-bar thm-cont-s2-bgcolor-1--hover thm-cont-s2-bgcolor-1--focus" tabIndex={-1} aria-hidden="true">
                    <span className="left-area">
                    </span>
                    <span className="right-area">
                    </span>
                </button>
            </th>
            <th className="thm-cont-h1-bgcolor--hover ms-nav-contextmenu-trigger" abbr="Professional Fee" scope="col" role="columnheader" style={{width: '18ex'}} aria-haspopup="menu" aria-expanded="false">
                <div className="columncaption columncaption-rightalign" style={{minWidth: '86px'}}>
                    <a draggable="false" href="#" role="button" className="thm-cont-c5-font-size thm-cont-c5-font-stack thm-cont-c5-color--medflat" id="column_header_b20" data-sorting-column-link="true" title="Sort on 'Professional Fee'" data-tabbable="true"  tabIndex={-1}>Professional Fee</a>
                    <span className="filteredIndicator ms-nav-hidden">
                        <img draggable="false" alt="" src="https://localhost:8443/BC190/Resources/Images/BLANK.GIF?_v=19.0.29884.30666"/>
                    </span>
                </div>
                <div className="ms-nav-grid-columncaption-ctxmenuarrow">
                    <a draggable="false" title="Open Menu" href="#" className="ms-nav-grid-columncaption-ctxmenuarrowlink icon-DownCaretSmall" role="button" aria-haspopup="true" aria-expanded="false" aria-label="Open menu for Professional Fee" data-tabbable="true"  tabIndex={-1}>
                    </a>
                </div>
                <button type="button" className="column-resize-bar thm-cont-s2-bgcolor-1--hover thm-cont-s2-bgcolor-1--focus" tabIndex={-1} aria-hidden="true">
                    <span className="left-area">
                    </span>
                    <span className="right-area">
                    </span>
                </button>
            </th>
            <th className="thm-cont-h1-bgcolor--hover ms-nav-contextmenu-trigger" abbr="Theatre Charges" scope="col" role="columnheader" style={{width: '18ex'}} aria-haspopup="menu" aria-expanded="false">
                <div className="columncaption columncaption-rightalign" style={{minWidth: '86px'}}>
                    <a draggable="false" href="#" role="button" className="thm-cont-c5-font-size thm-cont-c5-font-stack thm-cont-c5-color--medflat" id="column_header_b1z" data-sorting-column-link="true" title="Sort on 'Theatre Charges'" data-tabbable="true"  tabIndex={-1}>Theatre Charges</a>
                    <span className="filteredIndicator ms-nav-hidden">
                        <img draggable="false" alt="" src="https://localhost:8443/BC190/Resources/Images/BLANK.GIF?_v=19.0.29884.30666"/>
                    </span>
                </div>
                <div className="ms-nav-grid-columncaption-ctxmenuarrow">
                    <a draggable="false" title="Open Menu" href="#" className="ms-nav-grid-columncaption-ctxmenuarrowlink icon-DownCaretSmall" role="button" aria-haspopup="true" aria-expanded="false" aria-label="Open menu for Theatre Charges" data-tabbable="true"  tabIndex={-1}>
                    </a>
                </div>
                <button type="button" className="column-resize-bar thm-cont-s2-bgcolor-1--hover thm-cont-s2-bgcolor-1--focus" tabIndex={-1} aria-hidden="true">
                    <span className="left-area">
                    </span>
                    <span className="right-area">
                    </span>
                </button>
            </th>
            <th className="thm-cont-h1-bgcolor--hover ms-nav-contextmenu-trigger" abbr="Ultra sound" scope="col" role="columnheader" style={{width: '18ex'}} aria-haspopup="menu" aria-expanded="false">
                <div className="columncaption columncaption-rightalign" style={{minWidth: '86px'}}>
                    <a draggable="false" href="#" role="button" className="thm-cont-c5-font-size thm-cont-c5-font-stack thm-cont-c5-color--medflat" id="column_header_b1y" data-sorting-column-link="true" title="Sort on 'Ultra sound'" data-tabbable="true"  tabIndex={-1}>Ultra sound</a>
                    <span className="filteredIndicator ms-nav-hidden">
                        <img draggable="false" alt="" src="https://localhost:8443/BC190/Resources/Images/BLANK.GIF?_v=19.0.29884.30666"/>
                    </span>
                </div>
                <div className="ms-nav-grid-columncaption-ctxmenuarrow">
                    <a draggable="false" title="Open Menu" href="#" className="ms-nav-grid-columncaption-ctxmenuarrowlink icon-DownCaretSmall" role="button" aria-haspopup="true" aria-expanded="false" aria-label="Open menu for Ultra sound" data-tabbable="true"  tabIndex={-1}>
                    </a>
                </div>
                <button type="button" className="column-resize-bar thm-cont-s2-bgcolor-1--hover thm-cont-s2-bgcolor-1--focus" tabIndex={-1} aria-hidden="true">
                    <span className="left-area">
                    </span>
                    <span className="right-area">
                    </span>
                </button>
            </th>
            <th className="thm-cont-h1-bgcolor--hover ms-nav-contextmenu-trigger" abbr="XRay" scope="col" role="columnheader" style={{width: '18ex'}} aria-haspopup="menu" aria-expanded="false">
                <div className="columncaption columncaption-rightalign" style={{minWidth: '86px'}}>
                    <a draggable="false" href="#" role="button" className="thm-cont-c5-font-size thm-cont-c5-font-stack thm-cont-c5-color--medflat" id="column_header_b1x" data-sorting-column-link="true" title="Sort on 'XRay'" data-tabbable="true"  tabIndex={-1}>XRay</a>
                    <span className="filteredIndicator ms-nav-hidden">
                        <img draggable="false" alt="" src="https://localhost:8443/BC190/Resources/Images/BLANK.GIF?_v=19.0.29884.30666"/>
                    </span>
                </div>
                <div className="ms-nav-grid-columncaption-ctxmenuarrow">
                    <a draggable="false" title="Open Menu" href="#" className="ms-nav-grid-columncaption-ctxmenuarrowlink icon-DownCaretSmall" role="button" aria-haspopup="true" aria-expanded="false" aria-label="Open menu for XRay" data-tabbable="true"  tabIndex={-1}>
                    </a>
                </div>
                <button type="button" className="column-resize-bar thm-cont-s2-bgcolor-1--hover thm-cont-s2-bgcolor-1--focus" tabIndex={-1} aria-hidden="true">
                    <span className="left-area">
                    </span>
                    <span className="right-area">
                    </span>
                </button>
            </th>
            <th className="thm-cont-h1-bgcolor--hover ms-nav-contextmenu-trigger" abbr="Total Bill Amount" scope="col" role="columnheader" style={{width: '18ex'}} aria-haspopup="menu" aria-expanded="false">
                <div className="columncaption columncaption-rightalign" style={{minWidth: '86px'}}>
                    <a draggable="false" href="#" role="button" className="thm-cont-c5-font-size thm-cont-c5-font-stack thm-cont-c5-color--medflat" id="column_header_b1w" data-sorting-column-link="true" title="Sort on 'Total Bill Amount'" data-tabbable="true"  tabIndex={-1}>Total Bill Amount</a>
                    <span className="filteredIndicator ms-nav-hidden">
                        <img draggable="false" alt="" src="https://localhost:8443/BC190/Resources/Images/BLANK.GIF?_v=19.0.29884.30666"/>
                    </span>
                </div>
                <div className="ms-nav-grid-columncaption-ctxmenuarrow">
                    <a draggable="false" title="Open Menu" href="#" className="ms-nav-grid-columncaption-ctxmenuarrowlink icon-DownCaretSmall" role="button" aria-haspopup="true" aria-expanded="false" aria-label="Open menu for Total Bill Amount" data-tabbable="true"  tabIndex={-1}>
                    </a>
                </div>
                <button type="button" className="column-resize-bar thm-cont-s2-bgcolor-1--hover thm-cont-s2-bgcolor-1--focus" tabIndex={-1} aria-hidden="true">
                    <span className="left-area">
                    </span>
                    <span className="right-area">
                    </span>
                </button>
            </th>
            <th className="thm-cont-h1-bgcolor--hover ms-nav-contextmenu-trigger" abbr="Discount Amount" scope="col" role="columnheader" style={{width: '18ex'}} aria-haspopup="menu" aria-expanded="false">
                <div className="columncaption columncaption-rightalign" style={{minWidth: '86px'}}>
                    <a draggable="false" href="#" role="button" className="thm-cont-c5-font-size thm-cont-c5-font-stack thm-cont-c5-color--medflat" id="column_header_b1v" data-sorting-column-link="true" title="Sort on 'Discount Amount'" data-tabbable="true"  tabIndex={-1}>Discount Amount</a>
                    <span className="filteredIndicator ms-nav-hidden">
                        <img draggable="false" alt="" src="https://localhost:8443/BC190/Resources/Images/BLANK.GIF?_v=19.0.29884.30666"/>
                    </span>
                </div>
                <div className="ms-nav-grid-columncaption-ctxmenuarrow">
                    <a draggable="false" title="Open Menu" href="#" className="ms-nav-grid-columncaption-ctxmenuarrowlink icon-DownCaretSmall" role="button" aria-haspopup="true" aria-expanded="false" aria-label="Open menu for Discount Amount" data-tabbable="true"  tabIndex={-1}>
                    </a>
                </div>
                <button type="button" className="column-resize-bar thm-cont-s2-bgcolor-1--hover thm-cont-s2-bgcolor-1--focus" tabIndex={-1} aria-hidden="true">
                    <span className="left-area">
                    </span>
                    <span className="right-area">
                    </span>
                </button>
            </th>
            <th className="thm-cont-h1-bgcolor--hover ms-nav-contextmenu-trigger" abbr="Advance Deposit Amount" scope="col" role="columnheader" style={{width: '18ex'}} aria-haspopup="menu" aria-expanded="false">
                <div className="columncaption columncaption-rightalign" style={{minWidth: '86px'}}>
                    <a draggable="false" href="#" role="button" className="thm-cont-c5-font-size thm-cont-c5-font-stack thm-cont-c5-color--medflat" id="column_header_b1u" data-sorting-column-link="true" title="Sort on 'Advance Deposit Amount'" data-tabbable="true"  tabIndex={-1}>Advance Deposit Amount</a>
                    <span className="filteredIndicator ms-nav-hidden">
                        <img draggable="false" alt="" src="https://localhost:8443/BC190/Resources/Images/BLANK.GIF?_v=19.0.29884.30666"/>
                    </span>
                </div>
                <div className="ms-nav-grid-columncaption-ctxmenuarrow">
                    <a draggable="false" title="Open Menu" href="#" className="ms-nav-grid-columncaption-ctxmenuarrowlink icon-DownCaretSmall" role="button" aria-haspopup="true" aria-expanded="false" aria-label="Open menu for Advance Deposit Amount" data-tabbable="true"  tabIndex={-1}>
                    </a>
                </div>
                <button type="button" className="column-resize-bar thm-cont-s2-bgcolor-1--hover thm-cont-s2-bgcolor-1--focus" tabIndex={-1} aria-hidden="true">
                    <span className="left-area">
                    </span>
                    <span className="right-area">
                    </span>
                </button>
            </th>
            <th className="thm-cont-h1-bgcolor--hover ms-nav-contextmenu-trigger" abbr="Co Payment Amount" scope="col" role="columnheader" style={{width: '18ex'}} aria-haspopup="menu" aria-expanded="false">
                <div className="columncaption columncaption-rightalign" style={{minWidth: '86px'}}>
                    <a draggable="false" href="#" role="button" className="thm-cont-c5-font-size thm-cont-c5-font-stack thm-cont-c5-color--medflat" id="column_header_b1t" data-sorting-column-link="true" title="Sort on 'Co Payment Amount'" data-tabbable="true"  tabIndex={-1}>Co Payment Amount</a>
                    <span className="filteredIndicator ms-nav-hidden">
                        <img draggable="false" alt="" src="https://localhost:8443/BC190/Resources/Images/BLANK.GIF?_v=19.0.29884.30666"/>
                    </span>
                </div>
                <div className="ms-nav-grid-columncaption-ctxmenuarrow">
                    <a draggable="false" title="Open Menu" href="#" className="ms-nav-grid-columncaption-ctxmenuarrowlink icon-DownCaretSmall" role="button" aria-haspopup="true" aria-expanded="false" aria-label="Open menu for Co Payment Amount" data-tabbable="true"  tabIndex={-1}>
                    </a>
                </div>
                <button type="button" className="column-resize-bar thm-cont-s2-bgcolor-1--hover thm-cont-s2-bgcolor-1--focus" tabIndex={-1} aria-hidden="true">
                    <span className="left-area">
                    </span>
                    <span className="right-area">
                    </span>
                </button>
            </th>
            <th className="thm-cont-h1-bgcolor--hover ms-nav-contextmenu-trigger" abbr="Amount" scope="col" role="columnheader" style={{width: '18ex'}} aria-haspopup="menu" aria-expanded="false">
                <div className="columncaption columncaption-rightalign" style={{minWidth: '86px'}}>
                    <a draggable="false" href="#" role="button" className="thm-cont-c5-font-size thm-cont-c5-font-stack thm-cont-c5-color--medflat" id="column_header_b1s" data-sorting-column-link="true" title="Sort on 'Amount'" data-tabbable="true"  tabIndex={-1}>Amount</a>
                    <span className="filteredIndicator ms-nav-hidden">
                        <img draggable="false" alt="" src="https://localhost:8443/BC190/Resources/Images/BLANK.GIF?_v=19.0.29884.30666"/>
                    </span>
                </div>
                <div className="ms-nav-grid-columncaption-ctxmenuarrow">
                    <a draggable="false" title="Open Menu" href="#" className="ms-nav-grid-columncaption-ctxmenuarrowlink icon-DownCaretSmall" role="button" aria-haspopup="true" aria-expanded="false" aria-label="Open menu for Amount" data-tabbable="true"  tabIndex={-1}>
                    </a>
                </div>
                <button type="button" className="column-resize-bar thm-cont-s2-bgcolor-1--hover thm-cont-s2-bgcolor-1--focus" tabIndex={-1} aria-hidden="true">
                    <span className="left-area">
                    </span>
                    <span className="right-area">
                    </span>
                </button>
            </th>
            <th className="freeze-pane-padding show-freeze-pane-padding" style={{width: '0px'}} draggable="false">
                <div>
                </div>
            </th>
        </tr>
    </thead>
    )
}