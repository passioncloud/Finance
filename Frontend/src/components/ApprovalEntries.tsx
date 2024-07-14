/* eslint-disable @typescript-eslint/no-explicit-any */

import { useParams } from "react-router-dom";
import { Table, TableHead, TableRow, TableHeader, TableBody, TableCell } from "./catalyst/table";
import _ from "lodash";
import { SkeletonTableBody } from "./SkeletonTable";
import { usePurchaseRequisitionDocumentQuery } from "../services/UsersService";
import ApprovalEntriesCommandBar from "./ApprovalEntriesCommandBar";



function LoadingScreen() {
    return (<SkeletonTableBody columns={6} rows={3} />)
}

export function ApprovalEntries() {
    const params = useParams() as { No: string }
    const { data, isLoading, error } = usePurchaseRequisitionDocumentQuery(params.No)

    if (error) {
        return <div>
            Error {error?.error}
        </div>
    }

    return (
        <section className="">
            <h1>Approval Entries - {params.No}</h1>
            <ApprovalEntriesCommandBar />
       
                    <Table>
                        <TableHead>
                            <TableRow>
                                <TableHeader>Status</TableHeader>
                                <TableHeader>Approver</TableHeader>
                                <TableHeader>Last Modified At</TableHeader>
                                <TableHeader>Rejection Comment</TableHeader>
                            </TableRow>
                        </TableHead>
                        {isLoading && <LoadingScreen />}
                        {!isLoading && <ApprovalEntriesTableBody />}
                    </Table>
        </section>
    )
}


function ApprovalEntriesTableBody() {
    const params = useParams() as { No: string }
    const { data, isLoading, error } = usePurchaseRequisitionDocumentQuery(params.No)
    const approvalEntries = data?.approvalEntries;

    if (error) {
        return <div>
            Error {error?.error}
        </div>
    }

    if (isLoading) {
        return (
            <LoadingScreen />
        )
    }

    return (
        <TableBody>
            {approvalEntries!.map((approvalEntry) => (
                <ApprovalEntryRow approvalEntry={approvalEntry} key={approvalEntry.Entry_No} />
            ))}
        </TableBody>
    )
}


const dateFormatter = Intl.DateTimeFormat('en-uk', {  dateStyle: 'medium', })

function ApprovalEntryRow({ approvalEntry }: { approvalEntry: ApprovalEntriesApi }) {
  
    return (
        <TableRow key={approvalEntry.Entry_No} className="readonly">
            <TableCell>{approvalEntry.Status}</TableCell>
            <TableCell>{approvalEntry.Approver_Employee_Name}</TableCell>
            <TableCell>{dateFormatter.format(new Date(approvalEntry.Last_Date_Time_Modified))}</TableCell>
            <TableCell>{approvalEntry.Rejection_Comment}</TableCell>
        </TableRow>
    )
}



