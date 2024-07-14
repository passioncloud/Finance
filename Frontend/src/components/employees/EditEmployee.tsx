/* eslint-disable @typescript-eslint/no-explicit-any */

import { Fieldset, Label } from "../catalyst/fieldset";
import { Input } from "../catalyst/input";
import { ChangeEvent, ChangeEventHandler, useState } from "react";
import { useParams } from "react-router-dom";

import { formatNumber } from "../cell/number-cell";
import { AttachmentLines } from "../AttachmentLines";
import { ErrorBox } from "../ErrorBox";
// import EditEmployeeCommandBar from "./EditEmployeeCommandBar";
import { Button } from "../catalyst/button";
import { useEmployeeByIdQuery, useUpdateEmployeeMutation } from "./EmployeeService";
import { Select } from "../catalyst/select";
import EditEmployeeCommandBar from "./EditEmployeeCommandBar";


export default function EditEmployee() {
    const params = useParams() as { id: string }
    const { data, isLoading, error } = useEmployeeByIdQuery(params)
    const employee = data

    if (error) return <ErrorBox errorMessage={error} />
    if (isLoading) return <EditEmployeeSkeleton />

    return (
        <div className="p-2">
            <h1 className="mt-4 mb-4"><b>Edit Employee - {employee?.No}</b></h1>

            {/* <Breadcrumbs /> */}
            <EditEmployeeCommandBar />
            <EditEmployeeForm employee={employee!} />

        </div>
    )

}


function EditEmployeeForm({ employee }: { employee: Employee }) {

    const readOnly = false;
    const [form, setForm] = useState(employee)
    const [updateEmployee, { isLoading }] = useUpdateEmployeeMutation()
    const onFormChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        if (!form) return;
        const newForm = { ...form, [name]: value }
        setForm(newForm)

    }

    const handleSubmit = async () => {
        await updateEmployee(form)
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
                        <Label>First Name</Label>
                        <Input value={form.FirstName} readOnly={readOnly} name="FirstName" onChange={onFormChange} />
                    </div>
                    <div>
                        <Label>Last Name</Label>
                        <Input value={form.LastName} readOnly={readOnly} name="LastName" onChange={onFormChange} />
                    </div>
                    <div>
                        <Label>Email</Label>
                        <Input value={form.Email} readOnly={readOnly} name="Email" onChange={onFormChange} />
                    </div>
                    
                    <div>
                        <Label>Status</Label>
                        <Select name="status" onChange={onFormChange} value={form.Status}>
                            <option value="Active" disabled={readOnly}>Active</option>
                            <option value="Terminated" disabled={readOnly}>Terminated</option>
                        </Select>
                    </div>
                </div>
            </Fieldset>
            <Button className="mt-4" color="green" onClick={handleSubmit} disabled={isLoading}>Save</Button>
        </form>
    )
}



function EditEmployeeSkeleton() {

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




