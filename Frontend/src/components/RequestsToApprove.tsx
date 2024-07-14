/* eslint-disable @typescript-eslint/no-explicit-any */
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "./catalyst/table"
import { Dropdown, DropdownButton, DropdownItem, DropdownMenu } from "./catalyst/dropdown"
import { EllipsisVerticalIcon } from "@heroicons/react/20/solid"
import { Link } from "./catalyst/link"
import _ from "lodash"
import { usePrintMutation, usePurchaseRequisitionsQuery } from "../services/UsersService"
import { SkeletonTableBody } from "./SkeletonTable"
import UsersCommandBar from "./users/UsersCommandBar"
import { formatNumber } from "./cell/number-cell"
import { useApproveMutation, useRejectMutation, useRequestsToApproveQuery } from "../services/ApprovalRequestsService"
import { useParams } from "react-router-dom"
import { ChangeEvent, useState } from "react"
import { Dialog, DialogActions, DialogBody, DialogTitle } from "./catalyst/dialog"
import { Input } from "./catalyst/input"
import { Button } from "./catalyst/button"
import { enqueueSnackbar } from "notistack"
import { errorMessageFor } from "../data"

export default function RequestsToApprove() {



    return (
        <div className="p-2">
            <h1 className="mt-4 mb-4 ml-2">Requests To Approve</h1>
            {/* <RequestsToApproveCommandBar /> */}

            <Table>
                <TableHead>
                    <TableRow>
                        <TableHeader>Document No</TableHeader>
                        <TableHeader className="relative w-0">
                            <span className="sr-only">Actions</span>
                        </TableHeader>
                        <TableHeader>Currency</TableHeader>
                        <TableHeader>Total Amount</TableHeader>
                        <TableHeader>Requested By</TableHeader>
                    </TableRow>
                </TableHead>
                <RequestsToApproveTableBody />

            </Table>
        </div>
    )
}


function RequestsToApproveTableBody() {
    const { data, isLoading, error } = useRequestsToApproveQuery()
    const requestsToApprove = data;

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
            {requestsToApprove!.map((approvalRequest) => (
                <RequestToApproveRow approvalRequest={approvalRequest} />
            ))}
        </TableBody>
    )
}

function RequestToApproveRow({ approvalRequest }: { approvalRequest: ApprovalRequestsApi }) {
    const [approve] = useApproveMutation()
    const [print] = usePrintMutation()
    const [isRejectionDialogOpen, setRejectionDialogOpen] = useState(false)

    async function handleApprove() {
        await approve(approvalRequest)
    }

    function handleReject() {
        setRejectionDialogOpen(true)
    }

    async function handlePrint() {
        await print({ No: approvalRequest.Document_No })
    }

    return (
        <TableRow key={approvalRequest.Entry_No}>
            <TableCell className="font-medium">
                <Link href={`/purchase-requisitions/${approvalRequest.Document_No}`} className="nav-link">{approvalRequest.Document_No}</Link>
            </TableCell>
            <TableCell>
                <div className="-mx-3 -my-1.5 sm:-mx-2.5">
                    <Dropdown>
                        <DropdownButton plain aria-label="More options">
                            <EllipsisVerticalIcon />
                        </DropdownButton>
                        <DropdownMenu anchor="bottom start">
                            <DropdownItem href={`/purchase-requisitions/${approvalRequest.Document_No}`}>
                                View
                            </DropdownItem>
                            <DropdownItem onClick={handlePrint}>
                                Print
                            </DropdownItem>
                            <DropdownItem onClick={handleApprove}>
                                Approve
                            </DropdownItem>
                            <DropdownItem onClick={handleReject}>
                                Reject
                            </DropdownItem>
                        </DropdownMenu>

                    </Dropdown>
                </div>
            </TableCell>
            <TableCell>{approvalRequest.Currency_Code}</TableCell>
            <TableCell>{formatNumber(approvalRequest.Amount)}</TableCell>
            <TableCell>{approvalRequest.Sender_Employee_Name}</TableCell>
            <RejectionDialog isOpen={isRejectionDialogOpen} setIsOpen={setRejectionDialogOpen} approvalRequest={approvalRequest} />
        </TableRow>
    )
}


function RejectionDialog({ isOpen, setIsOpen, approvalRequest }: { isOpen: boolean, setIsOpen: (v: boolean) => void, approvalRequest: ApprovalRequestsApi }) {
    const [reject] = useRejectMutation()
    const [comment, setComment] = useState('')

    const handleReject = async () => {
        await reject({ Entry_No: approvalRequest.Entry_No, comment })
        setIsOpen(false)
    }

    const handleCommentChange = (e: ChangeEvent<HTMLInputElement>) => {
        setComment(e.target.value)
    }



    return (
        <Dialog open={isOpen} onClose={setIsOpen}>
            <DialogTitle>Rejection Comment</DialogTitle>
            <DialogBody>
                <Input value={comment} onChange={handleCommentChange} />
            </DialogBody>
            <DialogActions>
                <Button plain onClick={() => setIsOpen(false)}>Cancel</Button>
                <Button color="emerald" onClick={handleReject}>Reject</Button>
            </DialogActions>
        </Dialog>
    )
}


function LoadingScreen() {
    return (<SkeletonTableBody columns={9} rows={5} />)
}


