
import { Fieldset, Label } from "../catalyst/fieldset";
import { Input } from "../catalyst/input";
import { ChangeEvent, useState } from "react";
import { useNavigate } from "react-router-dom";
// import { Button } from "../catalyst/button";
import { Button } from '@fluentui/react-components';

import { useCreateInvoiceMutation } from "./service";
import * as React from "react";
import {
    Combobox,
    makeStyles,
    Option,
    useId,
} from "@fluentui/react-components";
import type { ComboboxProps } from "@fluentui/react-components";
import { useCustomersQuery } from "../customers/service";
import { ErrorBox } from "../ErrorBox";

const useStyles = makeStyles({
    root: {
        // Stack the label above the field with a gap
        display: "grid",
        gridTemplateRows: "repeat(1fr)",
        justifyItems: "start",
        gap: "2px",
        maxWidth: "400px",

    },
});


export const CustomerCombobox = (props: Partial<ComboboxProps>) => {
    const comboId = useId("combo-default");
    const styles = useStyles();
    const { data, isLoading, error } = useCustomersQuery()
    if (error) {
        return <ErrorBox errorMessage={error} />
    }
    if (isLoading) {
        return null;
    }
    const customers: Customer[] = data!;

  
    return (
        <div className={styles.root}>
            <label id={comboId}>Customer</label>
            <Combobox
                aria-labelledby={comboId}
                placeholder="Select an animal"
                {...props}
            >
                {customers.map((customer) => (
                    <Option key={customer.Id}>
                        {customer.Name}
                    </Option>
                ))}
            </Combobox>
        </div>
    );
};

export default function NewInvoice() {
    return (
        <div className="p-2">
            <h1 className="mt-4 mb-4"><b>New Invoice</b></h1>
            <NewInvoiceForm />
        </div>
    )
}


function NewInvoiceForm() {
    const readOnly = false;
    const [form, setForm] = useState<Invoice>({
        id: '',
        customerId: '',
        customerName: '',
        externalDocumentNo: '',
        currency: '',
        description: '',
        invoiceDate: new Date().toISOString(),
    })
    const navigate = useNavigate()
    const [createInvoice, { isLoading }] = useCreateInvoiceMutation()
    const onFormChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        if (!form) return;
        const newForm = { ...form, [name]: value }
        setForm(newForm)

    }

    const handleSubmit = async () => {
        const r = await createInvoice(form)
        if (!r.error)
            navigate(`/invoices/${r.data?.id}`)
    }

    return (
        <form>
            <Fieldset>
                <div className="grid gap-4 md:grid-cols-3 lg:grid-cols-5">
                    <CustomerCombobox />
                    <div>
                        <Label>Customer Id</Label>
                        <Input value={form.customerId} name="customerId" readOnly={readOnly} onChange={onFormChange} />
                    </div>
                    <div>
                        <Label>Customer Name</Label>
                        <Input value={form.customerName} readOnly={readOnly} name="customerName" onChange={onFormChange} />
                    </div>
                    <div>
                        <Label>Invoice Date</Label>
                        <Input value={form.invoiceDate} readOnly={readOnly} name="invoiceDate" type='date' onChange={onFormChange} />
                    </div>
                    <div>
                        <Label>Description</Label>
                        <Input value={form.description} readOnly={readOnly} name="description" onChange={onFormChange} />
                    </div>
                    <div>
                        <Label>External Document No</Label>
                        <Input value={form.externalDocumentNo} readOnly={readOnly} name="externalDocumentNo" onChange={onFormChange} />
                    </div>
                </div>
            </Fieldset>
            {/* <Button className="mt-4" color="green" onClick={handleSubmit} disabled={isLoading}>Save</Button> */}
            {/* <Button */}
            <Button appearance="primary" onClick={handleSubmit} disabled={isLoading}>Get started</Button>
        </form>
    )
}








