/* eslint-disable @typescript-eslint/no-explicit-any */

import { Fieldset, Label } from "../catalyst/fieldset";
import { Input } from "../catalyst/input";
import { ChangeEvent, useState } from "react";
import { useParams } from "react-router-dom";

import { ErrorBox } from "../ErrorBox";
import { Button } from "../catalyst/button";
import { useCustomerByIdQuery, useUpdateCustomerMutation } from "./service";
import EditCustomerCommandBar from "./edit-commandbar";
import SkeletonDocument from "../SkeletonDocument";


export default function EditCustomer() {
    const params = useParams() as { id: string }
    const { data, isLoading, error } = useCustomerByIdQuery(params)
    const customer = data

    if (error) return <ErrorBox errorMessage={error} />


    return (
        <div className="p-2">
            <h1 className="mt-4 mb-4"><b>Edit Customer - {customer?.Id}</b></h1>

            {/* <Breadcrumbs /> */}
            <EditCustomerCommandBar />
            { isLoading && <SkeletonDocument   fields={['Id', 'Name', 'Phone No', 'Email', 'Address']} /> }
            { !isLoading && <EditCustomerForm customer={customer!} /> }
        </div>
    )

}


function EditCustomerForm({ customer }: { customer: Customer }) {
    const readOnly = false;
    const [form, setForm] = useState(customer)
    const [updateCustomer, { isLoading }] = useUpdateCustomerMutation()
    const onFormChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        if (!form) return;
        const newForm = { ...form, [name]: value }
        setForm(newForm)

    }

    const handleSubmit = async () => {
        await updateCustomer(form)
    }

    return (

        <form>
            <Fieldset>
                <div className="grid gap-4 md:grid-cols-3 lg:grid-cols-5">
                    <div>
                        <Label>Id</Label>
                        <Input value={form.Id} name="id" readOnly={true} onChange={onFormChange} />
                    </div>

                    <div>
                        <Label>Name</Label>
                        <Input value={form.Name} readOnly={readOnly} name="name" onChange={onFormChange} />
                    </div>

                    <div>
                        <Label>Phone No</Label>
                        <Input value={form.PhoneNo} readOnly={readOnly} name="phoneNo" onChange={onFormChange} />
                    </div>
                    <div>
                        <Label>Email</Label>
                        <Input value={form.Email} readOnly={readOnly} name="email" onChange={onFormChange} />
                    </div>
                    <div>
                        <Label>Address</Label>
                        <Input value={form.Address} readOnly={readOnly} name="address" onChange={onFormChange} />
                    </div>


                </div>
            </Fieldset>
            <Button className="mt-4" color="green" onClick={handleSubmit} disabled={isLoading}>Save</Button>
        </form>
    )
}






