/* eslint-disable @typescript-eslint/no-explicit-any */
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "../catalyst/table"
import { Dropdown, DropdownButton, DropdownItem, DropdownMenu } from "../catalyst/dropdown"
import { EllipsisVerticalIcon } from "@heroicons/react/20/solid"
import { Link } from "../catalyst/link"
import _ from "lodash"
import { SkeletonTableBody } from "../SkeletonTable"
import { useEmployeesQuery } from "./EmployeeService"
import { ErrorBox } from "../ErrorBox"
import EmployeesCommandBar from "./EmployeesCommandBar"

function LoadingScreen() {
    return (<SkeletonTableBody columns={9} rows={5} />)
}

export default function Employees() {
    return (
        <div className="p-2">
            <h1 className="mt-4 mb-4 ml-2"><b>Employees</b></h1>
            <EmployeesCommandBar />

            <Table>
                <TableHead>
                    <TableRow>
                        <TableHeader>No</TableHeader>
                        <TableHeader className="relative w-0">
                            <span className="sr-only">Actions</span>
                        </TableHeader>
                        <TableHeader>First Name</TableHeader>
                        <TableHeader>Last Name</TableHeader>
                        <TableHeader>Email</TableHeader>
                        <TableHeader>Status</TableHeader>
                    </TableRow>
                </TableHead>
                <EmployeesTableBody />

            </Table>
        </div>
    )
}

function EmployeesTableBody() {
    const { data, isLoading, error } = useEmployeesQuery()
    const employees = data;

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
            {employees!.map((employee) => (
                <TableRow key={employee.No}>
                    <TableCell className="font-medium">
                        <Link href={employee.No} className="nav-link">{employee.No}</Link>

                    </TableCell>
                    <TableCell>
                        <div className="-mx-3 -my-1.5 sm:-mx-2.5">
                            <Dropdown>
                                <DropdownButton plain aria-label="More options">
                                    <EllipsisVerticalIcon />
                                </DropdownButton>
                                <DropdownMenu anchor="bottom start">
                                    <DropdownItem href={`${employee.No}`}>
                                        View
                                    </DropdownItem>
                                </DropdownMenu>
                            </Dropdown>
                        </div>
                    </TableCell>
                    <TableCell>{employee.FirstName}</TableCell>
                    <TableCell>{employee.LastName}</TableCell>
                    <TableCell>{employee.Email}</TableCell>
                    <TableCell>{employee.Status}</TableCell>
                </TableRow>
            ))}
        </TableBody>
    )
}