import * as React from "react";
import {
    FolderRegular,
    EditRegular,
    OpenRegular,
    DocumentRegular,
    PeopleRegular,
    DocumentPdfRegular,
    VideoRegular,
} from "@fluentui/react-icons";
import {
    TableBody,
    TableCell,
    TableRow,
    Table,
    TableHeader,
    TableHeaderCell,
    TableCellLayout,
    PresenceBadgeStatus,
    Avatar,
    Breadcrumb,
    BreadcrumbButton,
    BreadcrumbItem,
    Title3,
    Field,
    SearchBox,
} from "@fluentui/react-components";
import { ErrorBox } from "../ErrorBox";
import { useItemsQuery } from "./service";
import { SkeletonTableBody } from "../SkeletonTable";
import { Link, useSearchParams } from "react-router-dom";
import ItemsCommandBar from "./list-commandbar";



const columns = [
    { columnKey: "Name", label: "Name" },
    { columnKey: "Price", label: "Price" },
    { columnKey: "Cost", label: "Cost" },
];

function LoadingScreen() {
    return (<SkeletonTableBody columns={5} rows={3} />)
}
export default function Items() {
    const [searchParams, setSearchParams] = useSearchParams()
    const search = searchParams.get('search') ?? ''
    const { data, isLoading, error } = useItemsQuery(search)
    const items = data || [];

    if (error) {
        return <ErrorBox errorMessage={error} />
    }

    const tableBodyItems = items.map(item => ({
        Id: { label: item.Id },
        Name: { label: item.Name },
        Price: { label: item.Price },
        Cost: { label: item.Cost },
    }))

    return (
        <div>
            <Breadcrumb>
                <BreadcrumbItem>
                    <Link to="/items">
                        <BreadcrumbButton current>Items</BreadcrumbButton>
                    </Link>
                </BreadcrumbItem>
            </Breadcrumb>
            <Title3>Items</Title3>
            <ItemsCommandBar />
                
            <Table style={{ minWidth: "510px" }}>
                <TableHeader>
                    <TableRow>
                        {columns.map((column) => (
                            <TableHeaderCell key={column.columnKey}>
                                <b>{column.label}</b>
                            </TableHeaderCell>
                        ))}
                    </TableRow>
                </TableHeader>
                {isLoading && <LoadingScreen />}
                {!isLoading &&
                    <TableBody>
                        {tableBodyItems.map((item) => (
                            <TableRow key={item.Name.label}>
                                <TableCell color="blue">
                                    <Link to={`/items/${item.Id.label}`} style={{ color: 'blue' }}>
                                        {item.Name.label}
                                    </Link>
                                </TableCell>
                                <TableCell>
                                    {item.Price.label}
                                </TableCell>
                                <TableCell>{item.Cost.label}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                }
            </Table>
        </div>
    );
};