'use client'

import { WorkSheetBusinessTable } from "./WorkSheetBusinessTable"


export default function WorkSheetForm({ workSheetData, onBlur }: {
    workSheetData: WorkSheetData,
    onBlur: (change: Record<string, string|number>, row: WorkSheetRow) => Promise<void>
}) {
    if (!workSheetData) return null;
    return (
        <div className='ms-nav-grid-horizontal-container'>
            <div
                role='grid'
                aria-multiselectable='true'
                className='ms-nav-grid-vertical-container thm-cont-g0-bgcolor-1'
                aria-rowcount={3}
                style={{ minHeight: 300 }} // no other way, only works when using inline style
            >
                <div className="ms-nav-scrollable thm-cont-g1-bgcolor" style={{ overflow: 'scroll' }}>
                    <WorkSheetBusinessTable workSheetData={workSheetData} onBlur={onBlur} />
                </div>
            </div>
        </div>
    )
}
