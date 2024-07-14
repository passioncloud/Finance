/* eslint-disable @typescript-eslint/no-explicit-any */
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "../catalyst/table"
import { Dropdown, DropdownButton, DropdownItem, DropdownMenu } from "../catalyst/dropdown"
import { EllipsisVerticalIcon } from "@heroicons/react/20/solid"
import { Link } from "../catalyst/link"
import _ from "lodash"
import { SkeletonTableBody } from "../SkeletonTable"
import { useInvoicesQuery } from "./service"
import { ErrorBox } from "../ErrorBox"
import InvoicesCommandBar from "./list-commandbar"

function LoadingScreen() {
    return (<SkeletonTableBody columns={5} rows={3} />)
}

export default function Invoices() {
    return (
        <div className="p-2">
            <h1 className="mt-4 mb-4 ml-2"><b>Invoices</b></h1>
            <InvoicesCommandBar />

            <Table>
                <TableHead>
                    <TableRow>
                        <TableHeader>Id</TableHeader>
                        <TableHeader className="relative w-0">
                            <span className="sr-only">Actions</span>
                        </TableHeader>
                        <TableHeader>Customer Id</TableHeader>
                        <TableHeader>Customer Name</TableHeader>
                        <TableHeader>Invoice Date</TableHeader>
                    </TableRow>
                </TableHead>
                <InvoicesTableBody />

            </Table>
        </div>
    )
}

function InvoicesTableBody() {
    const { data, isLoading, error } = useInvoicesQuery()
    const invoices = data;

    if (error) {
        return <ErrorBox errorMessage={error} />
    }

    if (isLoading) {
        return (
            <LoadingScreen />
        )
    }

    return (
        <TableBody>
            {invoices!.map((invoice) => (
                <TableRow key={invoice.id}>
                    <TableCell className="font-medium">
                        <Link href={invoice.id?.toString()} className="nav-link">{invoice.id}</Link>

                    </TableCell>
                    <TableCell>
                        <span>
                            <Dropdown>
                                <DropdownButton plain aria-label="More options">
                                    <EllipsisVerticalIcon />
                                </DropdownButton>
                                <DropdownMenu anchor="bottom start">
                                    <DropdownItem href={`${invoice.id}`}>
                                        View
                                    </DropdownItem>
                                </DropdownMenu>
                            </Dropdown>
                        </span>
                    </TableCell>
                    <TableCell>{invoice.customerId}</TableCell>
                    <TableCell>{invoice.customerName}</TableCell>
                    <TableCell>{invoice.invoiceDate}</TableCell>
                </TableRow>
            ))}
        </TableBody>
    )
}