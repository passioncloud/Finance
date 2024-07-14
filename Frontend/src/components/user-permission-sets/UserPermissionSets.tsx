/* eslint-disable @typescript-eslint/no-explicit-any */
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "../catalyst/table"
import { Dropdown, DropdownButton, DropdownItem, DropdownMenu } from "../catalyst/dropdown"
import { EllipsisVerticalIcon } from "@heroicons/react/20/solid"
import { Link } from "../catalyst/link"
import _ from "lodash"
import { SkeletonTableBody } from "../SkeletonTable"
import { useUsersQuery } from "../../services/UsersService"
import { ErrorBox } from "../ErrorBox"
import UsersCommandBar from "../users/UsersCommandBar"
import { useParams } from "react-router-dom"

function LoadingScreen() {
    return (<SkeletonTableBody columns={9} rows={5} />)
}

export default function UserPermissionSets() {
    const params = useParams() as { username: string }
    return (
        <div className="mt-4">
            <h1 className="mt-4 mb-4"><b>User Permission Sets - {params.username}</b></h1>
     
            <Table>
                <TableHead>
                    <TableRow>
                        <TableHeader>Name</TableHeader>
                        <TableHeader className="relative w-0">
                            <span className="sr-only">Actions</span>
                        </TableHeader>
                        <TableHeader>Description</TableHeader>
                    </TableRow>
                </TableHead>
                <UserPermissionSetsTableBody />

            </Table>
        </div>
    )
}

function UserPermissionSetsTableBody() {
    const { data, isLoading, error } = useUsersQuery()
    const users = data;

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
            {users!.map((user) => (
                <TableRow key={user.username}>
                    <TableCell className="font-medium">
                        <Link href={user.username} className="nav-link">{user.username}</Link>

                    </TableCell>
                    <TableCell>
                        <div className="-mx-3 -my-1.5 sm:-mx-2.5">
                            <Dropdown>
                                <DropdownButton plain aria-label="More options">
                                    <EllipsisVerticalIcon />
                                </DropdownButton>
                                <DropdownMenu anchor="bottom start">
                                    <DropdownItem href={`${user.username}`}>
                                        View
                                    </DropdownItem>
                                </DropdownMenu>
                            </Dropdown>
                        </div>
                    </TableCell>
                    <TableCell>{user.fullname}</TableCell>
                    <TableCell>{user.email}</TableCell>
                </TableRow>
            ))}
        </TableBody>
    )
}