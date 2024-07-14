/* eslint-disable @typescript-eslint/no-explicit-any */

import { Fieldset, Label } from "../catalyst/fieldset";
import { Input } from "../catalyst/input";
import { ChangeEvent, ChangeEventHandler, useState } from "react";
import { Navigate, useNavigate, useParams } from "react-router-dom";

import { formatNumber } from "../cell/number-cell";
import { AttachmentLines } from "../AttachmentLines";
import { ErrorBox } from "../ErrorBox";
// import EditPublicHolidayCommandBar from "./EditPublicHolidayCommandBar";
import { Button } from "../catalyst/button";
import { useCreatePublicHolidayMutation, usePublicHolidayByIdQuery, useUpdatePublicHolidayMutation } from "./service";
import { Select } from "../catalyst/select";


export default function NewPublicHoliday() {


    return (
        <div className="p-2">
            <h1 className="mt-4 mb-4"><b>New PublicHoliday</b></h1>
            <NewPublicHolidayForm  />
        </div>
    )

}


function NewPublicHolidayForm() {
    const readOnly = false;
    const [form, setForm] = useState<PublicHoliday>({
        No: '',
        Description: '',
        Form: '',
        DetailedDescription: '',
    })
    const navigate = useNavigate()
    const [createPublicHoliday, { isLoading }] = useCreatePublicHolidayMutation()
    const onFormChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        if (!form) return;
        const newForm = { ...form, [name]: value }
        setForm(newForm)

    }

    const handleSubmit = async () => {
        const r = await createPublicHoliday(form)
        if (!r.error)
            navigate(`/public-holidays/${r.data?.No}`)
    }

    return (

        <form>
            <Fieldset>
                <div className="grid gap-4 md:grid-cols-3 lg:grid-cols-5">
                    <div>
                        <Label>No</Label>
                        <Input value={form.No} name="No" readOnly={readOnly} onChange={onFormChange} />
                    </div>

                    <div>
                        <Label>Description</Label>
                        <Input value={form.Description} readOnly={readOnly} name="Description" onChange={onFormChange} />
                    </div>
                    <div>
                        <Label>Form</Label>
                        <Input value={form.Form} readOnly={readOnly} name="Form" onChange={onFormChange} />
                    </div>
                    <div>
                        <Label>Detailed Description</Label>
                        <Input value={form.DetailedDescription} readOnly={readOnly} name="DetailedDescription" onChange={onFormChange} />
                    </div>


                </div>
            </Fieldset>
            <Button className="mt-4" color="green" onClick={handleSubmit} disabled={isLoading}>Save</Button>
        </form>
    )
}



function EditPublicHolidaySkeleton() {

    return (
        <form>
            <Fieldset disabled>
                <div className="grid gap-4 md:grid-cols-3 lg:grid-cols-5">

                    <div>
                        <Label>No</Label>
                        <SkeletonInputField />
                    </div>

                    <div>
                        <Label>Status</Label>
                        <SkeletonInputField />
                    </div>
                    <div>
                        <Label>Amount</Label>
                        <SkeletonInputField />
                    </div>

                    <div>
                        <Label>Process Type</Label>
                        <SkeletonInputField />
                    </div>
                    <div>
                        <Label>Currency</Label>
                        <SkeletonInputField />
                    </div>
                    <div>
                        <Label>Project</Label>
                        <SkeletonInputField />
                    </div>
                    <div>
                        <Label>Location</Label>
                        <SkeletonInputField />
                    </div>
                    <div>
                        <Label>Request Date</Label>
                        <SkeletonInputField />
                    </div>
                    <div>
                        <Label>Description</Label>
                        <SkeletonInputField />
                    </div>
                </div>
            </Fieldset>
        </form>
    )
}

export function SkeletonInputField() {
    return (
        <Input value="" name="" className="animate-pulse" readOnly style={{ backgroundColor: 'lightgrey' }} />
    )
}




