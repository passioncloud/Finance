/* eslint-disable @typescript-eslint/no-explicit-any */

import { Fieldset, Label } from "../catalyst/fieldset";
import { Input } from "../catalyst/input";
import { ChangeEvent, ChangeEventHandler, useState } from "react";
import { useParams } from "react-router-dom";

import { formatNumber } from "../cell/number-cell";
import { AttachmentLines } from "../AttachmentLines";
import { ErrorBox } from "../ErrorBox";
// import EditPublicHolidayCommandBar from "./EditPublicHolidayCommandBar";
import { Button } from "../catalyst/button";
import { usePublicHolidayByIdQuery, useUpdatePublicHolidayMutation } from "./service";
import { Select } from "../catalyst/select";
import EditPublicHolidayCommandBar from "./EditPublicHolidayCommandBar";


export default function EditPublicHoliday() {
    const params = useParams() as { id: string }
    const { data, isLoading, error } = usePublicHolidayByIdQuery(params)
    const publicHoliday = data

    if (error) return <ErrorBox errorMessage={error} />
    if (isLoading) return <EditPublicHolidaySkeleton />

    return (
        <div className="p-2">
            <h1 className="mt-4 mb-4"><b>Edit Leave Type - {publicHoliday?.No}</b></h1>

            {/* <Breadcrumbs /> */}
            <EditPublicHolidayCommandBar />
            <EditPublicHolidayForm publicHoliday={publicHoliday!} />

        </div>
    )

}


function EditPublicHolidayForm({ publicHoliday }: { publicHoliday: PublicHoliday }) {
    const [isSaving, setIsSaving] = useState(false)
    const readOnly = false;
    const [form, setForm] = useState(publicHoliday)
    const [updatePublicHoliday, { isLoading }] = useUpdatePublicHolidayMutation()
    const onFormChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        if (!form) return;
        const newForm = { ...form, [name]: value }
        setForm(newForm)

    }

    const handleSubmit = async () => {
        await updatePublicHoliday(form)
    }

    return (

        <form>
            <Fieldset>
                <div className="grid gap-4 md:grid-cols-3 lg:grid-cols-5">
                    <div>
                        <Label>No</Label>
                        <Input value={form.No} name="No" readOnly={true}  onChange={onFormChange} />
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




