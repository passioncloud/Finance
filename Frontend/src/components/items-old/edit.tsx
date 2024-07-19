/* eslint-disable @typescript-eslint/no-explicit-any */

import { Fieldset, Label } from "../catalyst/fieldset";
import { Input } from "../catalyst/input";
import { ChangeEvent, useState } from "react";
import { useParams } from "react-router-dom";

import { ErrorBox } from "../ErrorBox";
import { Button } from "../catalyst/button";
import { useItemByIdQuery, useUpdateItemMutation } from "./service";
import EditItemCommandBar from "./edit-commandbar";
import SkeletonDocument from "../SkeletonDocument";


export default function EditItem() {
    const params = useParams() as { id: string }
    const { data, isLoading, error } = useItemByIdQuery(params)
    const item = data

    if (error) return <ErrorBox errorMessage={error} />


    return (
        <div className="p-2">
            <h1 className="mt-4 mb-4"><b>Edit Item - {item?.Id}</b></h1>

            {/* <Breadcrumbs /> */}
            <EditItemCommandBar />
            { isLoading && <SkeletonDocument   fields={['Id', 'Name', 'Phone No', 'Email', '']} /> }
            { !isLoading && <EditItemForm item={item!} /> }
        </div>
    )

}


function EditItemForm({ item }: { item: Item }) {
    const readOnly = false;
    const [form, setForm] = useState(item)
    const [updateItem, { isLoading }] = useUpdateItemMutation()
    const onFormChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        if (!form) return;
        const newForm = { ...form, [name]: value }
        setForm(newForm)

    }

    const handleSubmit = async () => {
        await updateItem(form)
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
                        <Label>Price</Label>
                        <Input value={form.Price} readOnly={readOnly} name="price" onChange={onFormChange} />
                    </div>
                    <div>
                        <Label>Cost</Label>
                        <Input value={form.Cost} readOnly={readOnly} name="cost" onChange={onFormChange} />
                    </div>
                    <div>
                        <Label>Vat Percentage</Label>
                        <Input value={form.vatPercentage} readOnly={readOnly} name="vatPercentage" onChange={onFormChange} />
                    </div>


                </div>
            </Fieldset>
            <Button className="mt-4" color="green" onClick={handleSubmit} disabled={isLoading}>Save</Button>
        </form>
    )
}






