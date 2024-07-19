/* eslint-disable @typescript-eslint/no-explicit-any */
import { ErrorBox } from "../ErrorBox";
import { useCustomerByIdQuery, useUpdateCustomerMutation } from "./service";
import EditCustomerCommandBar from "./edit-commandbar";
import SkeletonDocument from "../SkeletonDocument";
import { MyInputField } from "../MyInputField";
import { ChangeEvent, ChangeEventHandler, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Button, Breadcrumb, BreadcrumbItem, BreadcrumbButton, BreadcrumbDivider, Title3, CardFooter } from "@fluentui/react-components";

import { Link } from 'react-router-dom';

export default function EditCustomer() {
    const params = useParams() as { Id: string }
    const { data, isLoading, error } = useCustomerByIdQuery(params)
    const customer = data

    if (error) return <ErrorBox errorMessage={error} />


    return (
        <div className="p-2">
    <Breadcrumb aria-label="Breadcrumb default example">
                <BreadcrumbItem>
                    <Link to="/customers">
                        <BreadcrumbButton>Customers</BreadcrumbButton>
                    </Link>
                </BreadcrumbItem>
                <BreadcrumbDivider />
                <BreadcrumbItem>
                    <BreadcrumbButton href={`/customers/${params.Id}`} current>
                        Edit Customer
                    </BreadcrumbButton>
                </BreadcrumbItem>
            </Breadcrumb>
            <Title3>Edit Customer - {customer?.Name}</Title3>
            <EditCustomerCommandBar />
            {isLoading && <SkeletonDocument fields={['Id', 'Name', 'Phone No', 'Email', 'Address']} />}
            {!isLoading && <EditCustomerForm customer={customer!} />}
        </div>
    )

}


function EditCustomerForm({ customer }: { customer: Customer }) {
    const navigate = useNavigate()
    const [form, setForm] = useState(customer)
    const [updateCustomer, { isLoading }] = useUpdateCustomerMutation()
    const onFormChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        if (!form) return;
        const newForm = { ...form, [name]: value }
        setForm(newForm)

    }

    const handleSubmit = async () => {
        const r = await updateCustomer(form)
        if (!r.error)
            navigate(`/customers`)
    }

    return (
        <div>
            <form>
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4 mb-4">
                 
                    <MyInputField
                        name="Name"
                        value={form.Name}
                        label="Name"
                        onChange={onFormChange}
                    />
                    <MyInputField
                        name="PhoneNo"
                        value={form.PhoneNo}
                        label="Phone No"
                        onChange={onFormChange}
                    />
                    <MyInputField
                        name="Email"
                        value={form.Email}
                        label="Email"
                        onChange={onFormChange}
                    />
                    <MyInputField
                        name="Address"
                        value={form.Address}
                        label="Address"
                        onChange={onFormChange}
                    />
                    <MyInputField
                        name="TIN"
                        value={form.TIN}
                        label="TIN"
                        onChange={onFormChange}
                    />
                    </div>
            </form>
            <CardFooter>
                <Button
                    appearance="primary"
                    className="mt-4"
                    onClick={handleSubmit}
                    disabled={isLoading}
                >Save</Button>
            </CardFooter>
        </div>
    )
}






