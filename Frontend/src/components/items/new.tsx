
import { Fieldset, Label } from "../catalyst/fieldset";
import { Input } from "../catalyst/input";
import { ChangeEvent, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "../catalyst/button";
import { useCreateItemMutation } from "./service";


export default function NewItem() {
    return (
        <div className="p-2">
            <h1 className="mt-4 mb-4"><b>New Item</b></h1>
            <NewItemForm  />
        </div>
    )
}


function NewItemForm() {
    const readOnly = false;
    const [form, setForm] = useState<Item>({
        id: '',
        name: '',
        price: 0,
        cost: 0,
        vatPercentage: 0
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
            navigate(`/items/${r.data?.id}`)
    }

    return (
        <form>
            <Fieldset>
                <div className="grid gap-4 md:grid-cols-3 lg:grid-cols-5">
                    <div>
                        <Label>Id</Label>
                        <Input value={form.id} name="id" readOnly={readOnly} onChange={onFormChange} />
                    </div>
                    <div>
                        <Label>Name</Label>
                        <Input value={form.name} readOnly={readOnly} name="name" onChange={onFormChange} />
                    </div>
                    <div>
                        <Label>Price</Label>
                        <Input value={form.price} readOnly={readOnly} name="price" onChange={onFormChange} />
                    </div>
                    <div>
                        <Label>Cost</Label>
                        <Input value={form.cost} readOnly={readOnly} name="cost" type="email" onChange={onFormChange} />
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








