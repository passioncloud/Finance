
import { ChangeEvent, ChangeEventHandler, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useCreateItemMutation } from "./service";
import { Button, Breadcrumb, BreadcrumbItem, BreadcrumbButton, BreadcrumbDivider, Title3, CardFooter } from "@fluentui/react-components";

import { Link } from 'react-router-dom';
import NewItemCommandBar from "./new-commandbar";
import { MyInputField } from "../MyInputField";

export default function NewItem() {
    return (
        <div>
            <Breadcrumb aria-label="Breadcrumb default example">
                <BreadcrumbItem>
                    <Link to="/items">
                        <BreadcrumbButton>Items</BreadcrumbButton>
                    </Link>
                </BreadcrumbItem>
                <BreadcrumbDivider />
                <BreadcrumbItem>
                    <BreadcrumbButton href={'/items/new'} current>
                        New Item
                    </BreadcrumbButton>
                </BreadcrumbItem>
            </Breadcrumb>
            <Title3>New Item</Title3>
            <NewItemCommandBar />
            <NewItemForm />
        </div>
    )
}

function NewItemForm() {
    const [form, setForm] = useState<Item>({
        Id: 0,
        Name: '',
        Price: 0,
        Cost: 0,
    })
    const navigate = useNavigate()
    const [createItem, { isLoading }] = useCreateItemMutation()
    const onFormChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        if (!form) return;
        const newForm = { ...form, [name]: value }
        setForm(newForm)

    }

    const handleSubmit = async () => {
        const r = await createItem(form)
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








