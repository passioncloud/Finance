/* eslint-disable @typescript-eslint/no-explicit-any */
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "../catalyst/table"
import { Dropdown, DropdownButton, DropdownItem, DropdownMenu } from "../catalyst/dropdown"
import { EllipsisVerticalIcon } from "@heroicons/react/20/solid"
import { Link } from "../catalyst/link"
import _ from "lodash"
import { SkeletonTableBody } from "../SkeletonTable"
import { useItemsQuery } from "./service"
import { ErrorBox } from "../ErrorBox"
import ItemsCommandBar from "./list-commandbar"

function LoadingScreen() {
    return (<SkeletonTableBody columns={5} rows={3} />)
}

export default function Items() {
    return (
        <div className="p-2">
            <h1 className="mt-4 mb-4 ml-2"><b>Items</b></h1>
            <ItemsCommandBar />

            <Table>
                <TableHead>
                    <TableRow>
                        <TableHeader>Id</TableHeader>
                        <TableHeader className="relative w-0">
                            <span className="sr-only">Actions</span>
                        </TableHeader>
                        <TableHeader>Name</TableHeader>
                        <TableHeader>Price</TableHeader>
                        <TableHeader>Cost</TableHeader>
                    </TableRow>
                </TableHead>
                <ItemsTableBody />

            </Table>
        </div>
    )
}

function ItemsTableBody() {
    const { data, isLoading, error } = useItemsQuery()
    const items = data;

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
            {items!.map((item) => (
                <TableRow key={item.id}>
                    <TableCell className="font-medium">
                        <Link href={item.id} className="nav-link">{item.id}</Link>

                    </TableCell>
                    <TableCell>
                        <span>
                            <Dropdown>
                                <DropdownButton plain aria-label="More options">
                                    <EllipsisVerticalIcon />
                                </DropdownButton>
                                <DropdownMenu anchor="bottom start">
                                    <DropdownItem href={`${item.id}`}>
                                        View
                                    </DropdownItem>
                                </DropdownMenu>
                            </Dropdown>
                        </span>
                    </TableCell>
                    <TableCell>{item.name}</TableCell>
                    <TableCell>{item.price}</TableCell>
                    <TableCell>{item.cost}</TableCell>
                </TableRow>
            ))}
        </TableBody>
    )
}