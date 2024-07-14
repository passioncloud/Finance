import { ArrowPathIcon, EllipsisVerticalIcon } from '@heroicons/react/24/outline';
import clsx from 'clsx';
import { usePrintMutation, usePurchaseRequisitionsQuery } from '../../services/UsersService';
import { useApproveMutation, useRejectMutation, useRequestsToApproveQuery } from '../../services/ApprovalRequestsService';
import { formatNumber } from '../cell/number-cell';
import { Dropdown, DropdownButton, DropdownItem, DropdownMenu } from '../catalyst/dropdown';


export default function DashboardRequestsToApprove() {
    const { data, isLoading, error } = useRequestsToApproveQuery()
    if (isLoading) {
        return <div>Loading...</div>
    }
    if (error) {
        // @ts-ignore
        return <div>Error {error?.error}</div>
    }
    const requestsToApprove = data!

    return (
        <div>


            <div className="flex w-full flex-col md:col-span-4">
                <h2 className={`mb-4 text-xl md:text-2xl`}>
                    Requests to approve
                </h2>
                <div className="flex grow flex-col justify-between rounded-xl bg-gray-50 p-4">
                    <div className="bg-white px-6">
                        {requestsToApprove.map((approvalRequest, i) => {
                            return (
                                <DashboardRequestToApproveRow approvalRequest={approvalRequest} key={approvalRequest.Entry_No} />
                            );
                        })}
                    </div>
                    <div className="flex items-center pb-2 pt-6">
                        <ArrowPathIcon className="h-5 w-5 text-gray-500" />
                        <h3 className="ml-2 text-sm text-gray-500 ">Updated just now</h3>
                    </div>
                </div>
            </div>
        </div>
    );
}



function DashboardRequestToApproveRow({ approvalRequest }: { approvalRequest: ApprovalRequestsApi }) {
    const [approve] = useApproveMutation()
    const [reject] = useRejectMutation()
    const [print] = usePrintMutation()

    async function handleApprove() {
        await approve(approvalRequest)
    }

    async function handleReject() {
        await reject(approvalRequest)
    }

    async function handlePrint() {
        await print({ No: approvalRequest.Document_No })
    }

    return (
        <div
            key={approvalRequest.Entry_No}
            className='flex flex-row items-center justify-between py-4 border-t'
        >
            <div className="flex items-center">
                <div className="min-w-0">
                    <p className="truncate text-sm font-semibold md:text-base">
                        By {approvalRequest.Sender_Employee_Name}
                    </p>
                </div>
            </div>
            <p
                className={`truncate text-sm font-medium md:text-base`}
            >
                {approvalRequest.Currency_Code} {formatNumber(approvalRequest.Amount)}
            </p>
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
    )
}
