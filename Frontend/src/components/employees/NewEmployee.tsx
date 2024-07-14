/* eslint-disable @typescript-eslint/no-explicit-any */

import { Fieldset, Label } from "../catalyst/fieldset";
import { Input } from "../catalyst/input";
import { ChangeEvent, ChangeEventHandler, useState } from "react";
import { Navigate, useNavigate, useParams } from "react-router-dom";

import { formatNumber } from "../cell/number-cell";
import { AttachmentLines } from "../AttachmentLines";
import { ErrorBox } from "../ErrorBox";
// import EditEmployeeCommandBar from "./EditEmployeeCommandBar";
import { Button } from "../catalyst/button";
import { useCreateEmployeeMutation, useEmployeeByIdQuery, useUpdateEmployeeMutation } from "./EmployeeService";
import { Select } from "../catalyst/select";


export default function NewEmployee() {
 
    return (
        <div className="p-2">
            <h1 className="mt-4 mb-4"><b>New Employee</b></h1>
            <NewEmployeeForm  />
        </div>
    )

}


function NewEmployeeForm() {
    const readOnly = false;
    const [form, setForm] = useState<Employee>({
        No: '',
        Email: '',
        FirstName: '',
        LastName: '',
        Status: 'Active'
    })
    const navigate = useNavigate()
    const [createEmployee, { isLoading }] = useCreateEmployeeMutation()
    const onFormChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        if (!form) return;
        const newForm = { ...form, [name]: value }
        setForm(newForm)

    }

    const handleSubmit = async () => {
        const r = await createEmployee(form)
        if (!r.error)
            navigate(`/employees/${r.data?.No}`)
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


                </div>
            </Fieldset>
            <Button className="mt-4" color="green" onClick={handleSubmit} disabled={isLoading}>Save</Button>
        </form>
    )
}



