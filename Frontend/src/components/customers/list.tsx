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
import { useCustomersQuery } from "./service";
import { SkeletonTableBody } from "../SkeletonTable";
import { Link } from "react-router-dom";
import CustomersCommandBar from "./list-commandbar-2";



const columns = [
    { columnKey: "name", label: "Name" },
    { columnKey: "phoneNo", label: "Phone No" },
    { columnKey: "email", label: "Email" },
    { columnKey: "address", label: "Address" },
];

function LoadingScreen() {
    return (<SkeletonTableBody columns={5} rows={3} />)
}
export const List2 = () => {
    const { data, isLoading, error } = useCustomersQuery()
    const customers = data || [];

    if (error) {
        return <ErrorBox errorMessage={error} />
    }

    const items = customers.map(customer => ({
        id: { label: customer.Id },
        name: { label: customer.Name },
        email: { label: customer.Email },
        phoneNo: { label: customer.PhoneNo },
        address: { label: customer.Address }
    }))

    return (
        <div>
            <Breadcrumb>
                <BreadcrumbItem>
                    <Link to="/customers">
                        <BreadcrumbButton current>Customers</BreadcrumbButton>
                    </Link>
                </BreadcrumbItem>
            </Breadcrumb>
            <Title3>Customers</Title3>
            <CustomersCommandBar />
                <Field>
                    <SearchBox placeholder="Search" />
                </Field>
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
                        {items.map((item) => (
                            <TableRow key={item.name.label}>
                                <TableCell color="blue">
                                    <Link to={`/customers/${item.id.label}`} style={{ color: 'blue' }}>
                                        {item.name.label}
                                    </Link>
                                </TableCell>
                                <TableCell>
                                    {item.phoneNo.label}
                                </TableCell>
                                <TableCell>{item.email.label}</TableCell>
                                <TableCell>
                                    {item.address.label}
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                }
            </Table>
        </div>
    );
};