

import { BusinessGridTable } from "./BusinessGridTable"
// import GridHeaderTable from "./GridHeaderTable"

export default function D365Page() {

    return (
        <div className="designer designer-thm-navi-g4-bgcolor">
            <div className='my-data-grid ms-nav-grid-horizontal-container ms-nav-grid-container ak' id='b1r'>
                <div role='grid' aria-labelledby="Caption_BusinessGrid_b1r" aria-multiselectable='true'
                    className='ms-nav-grid-vertical-container thm-cont-g0-bgcolor-1' aria-rowcount={3}>
                    {/* <div style={{ overflow: 'scroll' }}>
                        <GridHeaderTable />
                    </div> */}
                    <div className="ms-nav-scrollable thm-cont-g1-bgcolor" style={{ overflow: 'scroll' }}>
                        <BusinessGridTable />
                        d
                    </div>
                </div>
            </div>
        </div>
    )
}




