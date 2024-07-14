
import { Fieldset } from "../catalyst/fieldset";
import { ChangeEvent, ChangeEventHandler, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useCreateCustomerMutation } from "./service";
import { makeStyles, useId, Input, Label, Button, Field, Breadcrumb, BreadcrumbItem, BreadcrumbButton, BreadcrumbDivider, Title1, Title2, Title3, Card, CardFooter, CardPreview } from "@fluentui/react-components";

import { Link } from 'react-router-dom';
import NewCustomerCommandBar from "./new-commandbar";

const MyInputField = ({ name, label, value, onChange }: { name: string, label: string, value: any, onChange: ChangeEventHandler<HTMLInputElement> }) => {
    const inputId = useId(name);
    return (
        <Field
            label={label}
            validationState="success"
        //   validationMessage="This is a success message."
        >
            <Input id={inputId} value={value} name={name} onChange={onChange} />
        </Field>
    )
}


export default function NewCustomer() {
    return (
        <div>
            <Breadcrumb aria-label="Breadcrumb default example">
                <BreadcrumbItem>
                    <Link to="/customers">
                        <BreadcrumbButton>Customers</BreadcrumbButton>
                    </Link>
                </BreadcrumbItem>
                <BreadcrumbDivider />
                <BreadcrumbItem>
                    <BreadcrumbButton href={'/customers/new'} current>
                        New Customer
                    </BreadcrumbButton>
                </BreadcrumbItem>
            </Breadcrumb>
            <Title3>New Customer</Title3>
            <NewCustomerCommandBar />
            <NewCustomerForm />
        </div>
    )
}




const useFormStyles = makeStyles({
    main: {
        gap: "36px",
        display: "flex",
        flexDirection: "column",
        flexWrap: "wrap",
    },

    card: {
        marginTop: '16px',
        width: "100%",
        maxWidth: "100%",
        height: "fit-content",
    },

    section: {
        width: "fit-content",
    },

});

function NewCustomerForm() {
    const formStyles = useFormStyles()
    const [form, setForm] = useState<Customer>({
        Id: '',
        Name: '',
        Address: '',
        PhoneNo: '',
        Email: ''
    })
    const navigate = useNavigate()
    const [createCustomer, { isLoading }] = useCreateCustomerMutation()
    const onFormChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        if (!form) return;
        const newForm = { ...form, [name]: value }
        setForm(newForm)

    }

    const handleSubmit = async () => {
        const r = await createCustomer(form)
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








