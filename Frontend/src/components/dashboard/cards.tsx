import {
    BanknotesIcon,
    ClockIcon,
    UserGroupIcon,
    InboxIcon,
} from '@heroicons/react/24/outline';
import { useDashboardQuery } from '../../services/DashboardService';
import { FetchBaseQueryError } from '@reduxjs/toolkit/query';
import { SerializedError } from '@reduxjs/toolkit';
import { formatNumber } from '../cell/number-cell';

const iconMap = {
    collected: BanknotesIcon,
    customers: UserGroupIcon,
    pending: ClockIcon,
    invoices: InboxIcon,
};

function ErrorBox({ errorMessage }: { errorMessage?: string | FetchBaseQueryError | SerializedError }) {
    if (errorMessage) {
        return <div className='bg-red-600 text-white p-2'>{String(errorMessage)}</div>
    }
    return undefined
}

export default function CardWrapper() {

    const { data, isLoading, error } = useDashboardQuery()
    if (isLoading) {
        return 'Loading...'
    }
    if (error) {
        return <ErrorBox errorMessage={error} />
    }

    const dashboard: DashboardApi = data!
    // await new Promise((resolve) => setTimeout(resolve, 2000));
    const {
        OpenRequisitions,
        RequestsToApprove,
        TotalRequestedAmount,
        TotalApprovedAmount,
    } = dashboard;
    return (
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            <Card title="Total Requested Amount (LCY)" value={TotalRequestedAmount} type="collected" />
            <Card title="Total Approved Amount (LCY)" value={TotalApprovedAmount} type="pending" />
            <Card title="Requests To Approve" value={RequestsToApprove} type="invoices" />
            <Card
                title="Open Requisitions"
                value={OpenRequisitions}
                type="customers"
            />
        </div>
    );
}

export function Card({
    title,
    value,
    type,
}: {
    title: string;
    value: number | string;
    type: 'invoices' | 'customers' | 'pending' | 'collected';
}) {
    const Icon = iconMap[type];

    return (
        <div className="rounded-xl bg-gray-50 p-2 shadow-sm">
            <div className="flex p-4">
                {Icon ? <Icon className="h-5 w-5 text-gray-700" /> : null}
                <h3 className="ml-2 text-sm font-medium">{title}</h3>
            </div>
            <p
                className={`truncate rounded-xl bg-white px-4 py-8 text-center text-2xl`}
            >
                {formatNumber(value)}
            </p>
        </div>
    );
}
