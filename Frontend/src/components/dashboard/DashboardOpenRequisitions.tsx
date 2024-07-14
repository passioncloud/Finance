import { ArrowPathIcon } from '@heroicons/react/24/outline';
import clsx from 'clsx';
import { usePrintMutation, usePurchaseRequisitionsQuery } from '../../services/UsersService';
import { formatNumber } from '../cell/number-cell';
import { Link } from '../catalyst/link';
import { Dropdown, DropdownButton, DropdownItem, DropdownMenu } from '../catalyst/dropdown';
import { EllipsisVerticalIcon } from '@heroicons/react/20/solid';



export default function DashboardOpenRequisitions() {
    const [print] = usePrintMutation()
    const { data, isLoading, error } = usePurchaseRequisitionsQuery()
    if (isLoading) {
        return <div>Loading...</div>
    }
    if (error) {
        // @ts-ignore
        return <div>Error {error?.error}</div>
    }
    const purchaseRequisitions = data!.filter(p => p.Status === 'Open')

    return (
        <div>
            <div className="flex w-full flex-col md:col-span-4">
                <h2 className={`mb-4 text-xl md:text-2xl`}>
                    Open Requisitions
                </h2>
                <div className="flex grow flex-col justify-between rounded-xl bg-gray-50 p-4">

                    <div className="bg-white px-6">
                        {purchaseRequisitions.map((purchaseRequisition, i) => {
                            return (
                                <div
                                    key={purchaseRequisition.No}
                                    className='flex flex-row items-center justify-between py-4'
                                >
                                    <p className="truncate text-sm font-semibold md:text-base">
                                        <Link href={`/purchase-requisitions/${purchaseRequisition.No}`} className="nav-link">{purchaseRequisition.No}</Link>
                                    </p>
                                    <div className='flex flex-row items-center'>
                                        <p
                                            className={`truncate md:text-base`}
                                        >
                                            {purchaseRequisition.Currency_Code} {formatNumber(purchaseRequisition.Amount)}
                                        </p>
                                        <Dropdown>
                                            <DropdownButton plain aria-label="More options">
                                                <EllipsisVerticalIcon />
                                            </DropdownButton>
                                            <DropdownMenu anchor="bottom start">
                                                <DropdownItem href={`/purchase-requisitions/${purchaseRequisition.No}`}>
                                                    View
                                                </DropdownItem>
                                                <DropdownItem onClick={() => print({ No: purchaseRequisition.No })}>
                                                    Print
                                                </DropdownItem>
                                            </DropdownMenu>
                                        </Dropdown>
                                    </div>
                                </div>
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
