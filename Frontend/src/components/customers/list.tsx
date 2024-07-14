/* eslint-disable @typescript-eslint/no-explicit-any */
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "../catalyst/table"
import { Dropdown, DropdownButton, DropdownItem, DropdownMenu } from "../catalyst/dropdown"
import { EllipsisVerticalIcon } from "@heroicons/react/20/solid"
import { Link } from "../catalyst/link"
import _ from "lodash"
import { SkeletonTableBody } from "../SkeletonTable"
import { useCustomersQuery } from "./service"
import { ErrorBox } from "../ErrorBox"
import CustomersCommandBar from "./list-commandbar-2"
import { Breadcrumb, BreadcrumbItem, BreadcrumbButton, BreadcrumbDivider, Title3 } from "@fluentui/react-components"

function LoadingScreen() {
    return (<SkeletonTableBody columns={5} rows={3} />)
}

export default function Customers() {
    return (
        <div>
            <Breadcrumb>
                <BreadcrumbItem>
                    <Link href="/customers">
                        <BreadcrumbButton current>Customers</BreadcrumbButton>
                    </Link>
                </BreadcrumbItem>
            </Breadcrumb>
            <Title3>Customers</Title3>
            <CustomersCommandBar />

            <Table>
                <TableHead>
                    <TableRow>
                        <TableHeader>Name</TableHeader>
                        <TableHeader className="relative w-0">
                            <span className="sr-only">Actions</span>
                        </TableHeader>
                        <TableHeader>Phone No</TableHeader>
                        <TableHeader>Email</TableHeader>
                    </TableRow>
                </TableHead>
                <CustomersTableBody />

            </Table>
        </div>
    )
}

function CustomersTableBody() {
    const { data, isLoading, error } = useCustomersQuery()
    const customers = data;

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
            {customers!.map((customer) => (
                <TableRow key={customer.Id} className="py-1">
                    <TableCell className="font-medium">
                        <Link href={`${customer.Id}`} className="nav-link">{customer.Name}</Link>

                    </TableCell>
                    <TableCell>
                        <span>
                            <Dropdown>
                                <DropdownButton plain aria-label="More options">
                                    <EllipsisVerticalIcon />
                                </DropdownButton>
                                <DropdownMenu anchor="bottom start">
                                    <DropdownItem href={`${customer.Id}`}>
                                        View
                                    </DropdownItem>
                                </DropdownMenu>
                            </Dropdown>
                        </span>
                    </TableCell>
                    <TableCell>{customer.PhoneNo}</TableCell>
                    <TableCell>{customer.Email}</TableCell>
                </TableRow>
            ))}
        </TableBody>
    )
}