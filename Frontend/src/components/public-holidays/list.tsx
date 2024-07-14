/* eslint-disable @typescript-eslint/no-explicit-any */
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "../catalyst/table"
import { Dropdown, DropdownButton, DropdownItem, DropdownMenu } from "../catalyst/dropdown"
import { EllipsisVerticalIcon } from "@heroicons/react/20/solid"
import { Link } from "../catalyst/link"
import _ from "lodash"
import { SkeletonTableBody } from "../SkeletonTable"
import { usePublicHolidaysQuery } from "./service"
import { ErrorBox } from "../ErrorBox"
import PublicHolidaysCommandBar from "./list-commandbar"

function LoadingScreen() {
    return (<SkeletonTableBody columns={9} rows={5} />)
}

export default function PublicHolidays() {
    return (
        <div className="p-2">
            <h1 className="mt-4 mb-4 ml-2"><b>Public Holidays</b></h1>
            <PublicHolidaysCommandBar />

            <Table>
                <TableHead>
                    <TableRow>
                        <TableHeader>Id</TableHeader>
                        <TableHeader className="relative w-0">
                            <span className="sr-only">Actions</span>
                        </TableHeader>
                        <TableHeader>Day</TableHeader>
                        <TableHeader>Description</TableHeader>
                        <TableHeader>Year</TableHeader>
                    </TableRow>
                </TableHead>
                <ListTableBody />

            </Table>
        </div>
    )
}

function ListTableBody() {
    const { data, isLoading, error } = usePublicHolidaysQuery()
    const publicHolidays = data;

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
            {publicHolidays!.map((publicHoliday) => (
                <TableRow key={publicHoliday.Id}>
                    <TableCell className="font-medium">
                        <Link href={publicHoliday.Id.toString()} className="nav-link">{publicHoliday.Id}</Link>

                    </TableCell>
                    <TableCell>
                        <div className="-mx-3 -my-1.5 sm:-mx-2.5">
                            <Dropdown>
                                <DropdownButton plain aria-label="More options">
                                    <EllipsisVerticalIcon />
                                </DropdownButton>
                                <DropdownMenu anchor="bottom start">
                                    <DropdownItem href={`${publicHoliday.Id}`}>
                                        View
                                    </DropdownItem>
                                </DropdownMenu>
                            </Dropdown>
                        </div>
                    </TableCell>
                    <TableCell>{publicHoliday.Day.split('T')[0]}</TableCell>
                    <TableCell>{publicHoliday.Description}</TableCell>
                    <TableCell>{publicHoliday.Year}</TableCell>
                </TableRow>
            ))}
        </TableBody>
    )
}