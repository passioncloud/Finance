/* eslint-disable @typescript-eslint/no-explicit-any */
import { ErrorBox } from "../ErrorBox";
import { useItemByIdQuery, useUpdateItemMutation } from "./service";
import EditItemCommandBar from "./edit-commandbar";
import SkeletonDocument from "../SkeletonDocument";
import { MyInputField } from "../MyInputField";
import { ChangeEvent, ChangeEventHandler, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Button, Breadcrumb, BreadcrumbItem, BreadcrumbButton, BreadcrumbDivider, Title3, CardFooter } from "@fluentui/react-components";

import { Link } from 'react-router-dom';

export default function EditItem() {
    const params = useParams() as { Id: string }
    console.log(params)
    const { data, isLoading, error } = useItemByIdQuery(params)
    const item = data

    if (error) return <ErrorBox errorMessage={error} />


    return (
        <div className="p-2">
    <Breadcrumb aria-label="Breadcrumb default example">
                <BreadcrumbItem>
                    <Link to="/items">
                        <BreadcrumbButton>Items</BreadcrumbButton>
                    </Link>
                </BreadcrumbItem>
                <BreadcrumbDivider />
                <BreadcrumbItem>
                    <BreadcrumbButton href={`/items/${params.Id}`} current>
                        Edit Item
                    </BreadcrumbButton>
                </BreadcrumbItem>
            </Breadcrumb>
            <Title3>Edit Item - {item?.Name}</Title3>
            <EditItemCommandBar />
            {isLoading && <SkeletonDocument fields={['Id', 'Name', 'Price', 'Cost']} />}
            {!isLoading && <EditItemForm item={item!} />}
        </div>
    )

}


function EditItemForm({ item }: { item: Item }) {
    const navigate = useNavigate()
    const [form, setForm] = useState(item)
    const [updateItem, { isLoading }] = useUpdateItemMutation()
    const onFormChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        if (!form) return;
        const newForm = { ...form, [name]: value }
        setForm(newForm)

    }

    const handleSubmit = async () => {
        const r = await updateItem(form)
        if (!r.error)
            navigate(`/items`)
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
                        name="Price"
                        value={form.Price}
                        label="Price"
                        onChange={onFormChange}
                    />
                    <MyInputField
                        name="Cost"
                        value={form.Cost}
                        label="Cost"
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






