/* eslint-disable @typescript-eslint/no-explicit-any */

import { Fieldset, Label } from "../catalyst/fieldset";
import { Input } from "../catalyst/input";
import { ChangeEvent, ChangeEventHandler, useState } from "react";
import { useParams } from "react-router-dom";

import { formatNumber } from "../cell/number-cell";
import { AttachmentLines } from "../AttachmentLines";
import { useUpdateUserMutation, useUserByUsernameQuery } from "../../services/UsersService";
import { ErrorBox } from "../ErrorBox";
import EditUserCommandBar from "./EditUserCommandBar";
import { Button } from "../catalyst/button";
import UserPermissionSets from "../user-permission-sets/UserPermissionSets";


export default function EditUser() {
    const params = useParams() as { username: string }
    const { data, isLoading, error } = useUserByUsernameQuery(params)
    const user = data

    if (error) return <ErrorBox errorMessage={error} />
    if (isLoading) return <EditUserSkeleton />

    return (
        <div className="p-2">
            <h1 className="mt-4 mb-4"><b>Edit User - {params.username}</b></h1>

            {/* <Breadcrumbs /> */}
            <EditUserCommandBar />
            <EditUserForm user={user!} />

        </div>
    )

}


function EditUserForm({ user }: { user: User }) {
    const [isSaving, setIsSaving] = useState(false)
    const readOnly = false;
    const [form, setForm] = useState(user)
    const [updateUser, { isLoading }] = useUpdateUserMutation()
    const onFormChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        if (!form) return;
        const newForm = { ...form, [name]: value }
        setForm(newForm)

    }

    const handleSubmit = async () => {
        await updateUser(form)
    }

    return (

        <form>
            <Fieldset>
                <div className="grid gap-4 md:grid-cols-3 lg:grid-cols-5">
                    <div>
                        <Label>Username</Label>
                        <Input value={form.username} name="username" readOnly={readOnly} disabled onChange={onFormChange} />
                    </div>

                    <div>
                        <Label>Fullname</Label>
                        <Input value={form.fullname} readOnly={readOnly} name="fullname" onChange={onFormChange} />
                    </div>
                    <div>
                        <Label>Email</Label>
                        <Input value={form.email} readOnly={readOnly} name="email" onChange={onFormChange} />
                    </div>
                </div>
            </Fieldset>
            <Button className="mt-4" color="green" onClick={handleSubmit} disabled={isLoading}>Save</Button>
        </form>
    )
}



function EditUserSkeleton() {

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




