/* eslint-disable @typescript-eslint/no-explicit-any */
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "../catalyst/table"
import { Dropdown, DropdownButton, DropdownItem, DropdownMenu } from "../catalyst/dropdown"
import { EllipsisVerticalIcon } from "@heroicons/react/20/solid"
import { Link } from "../catalyst/link"
import _ from "lodash"
import { SkeletonTableBody } from "../SkeletonTable"
import { useDeletePermissionMutation, usePermissionsQuery, useUpdatePermissionMutation } from "./PermissionsService"
import { ErrorBox } from "../ErrorBox"
import PermissionsCommandBar from "./PermissionsCommandBar"
import { Dialog, DialogActions, DialogBody, DialogTitle } from "../catalyst/dialog"
import { ChangeEvent, useState } from "react"
import { Input } from "../catalyst/input"
import { Button } from "../catalyst/button"
import { Fieldset } from "../catalyst/fieldset"

function LoadingScreen() {
    return (<SkeletonTableBody columns={9} rows={5} />)
}

export default function Permissions() {
    return (
        <div>
            <h1 className="mt-4 mb-4"><b>Permissions</b></h1>
            <PermissionsCommandBar />

            <Table>
                <TableHead>
                    <TableRow>
                        <TableHeader>Name</TableHeader>
                        <TableHeader className="relative w-0">
                            <span className="sr-only">Actions</span>
                        </TableHeader>
                        <TableHeader>Description</TableHeader>
                    </TableRow>
                </TableHead>
                <PermissionsTableBody />

            </Table>
        </div>
    )
}

function PermissionsTableBody() {
    const { data, isLoading, error } = usePermissionsQuery()
    const permissions = data;

    if (error) {
        return <ErrorBox errorMessage={error} />
    }

    if (isLoading) {
        return (
            <LoadingScreen />
        )
    }

    return (
        <TableBody>
            {permissions!.map((permission) => (
                <PermissionsTableBodyRow permission={permission} key={permission.name} />
            ))}
        </TableBody>
    )
}



function PermissionsTableBodyRow({ permission }: { permission: Permission }) {
    const [isEditPermissionDialogOpen, setEditPermissionDialogOpen] = useState(false)
    const [isDeletePermissionDialogOpen, setDeletePermissionDialogOpen] = useState(false)

    function handleEdit() {
        setEditPermissionDialogOpen(true)
    }

    function handleDelete() {
        setDeletePermissionDialogOpen(true)
    }

    return (
        <TableRow key={permission.name}>
            <TableCell className="font-medium" onClick={handleEdit}>
                <span className="button" onClick={handleEdit} >{permission.name}</span>

            </TableCell>
            <TableCell>
                <div className="-mx-3 -my-1.5 sm:-mx-2.5">
                    <Dropdown>
                        <DropdownButton plain aria-label="More options">
                            <EllipsisVerticalIcon />
                        </DropdownButton>
                        <DropdownMenu anchor="bottom start">
                            <DropdownItem onClick={handleEdit}>
                                Edit
                            </DropdownItem>
                            <DropdownItem onClick={handleDelete}>
                                Delete
                            </DropdownItem>
                        </DropdownMenu>
                    </Dropdown>
                </div>
            </TableCell>
            <TableCell>{permission.description}</TableCell>
            <EditPermissionDialog permission={permission} isOpen={isEditPermissionDialogOpen} setIsOpen={setEditPermissionDialogOpen} />
            <DeletePermissionDialog permission={permission} isOpen={isDeletePermissionDialogOpen} setIsOpen={setDeletePermissionDialogOpen} />

        </TableRow>
    )
}


function EditPermissionDialog({ isOpen, setIsOpen, permission }: { permission: Permission, isOpen: boolean, setIsOpen: (v: boolean) => void }) {
    const [updatePermission, { isLoading }] = useUpdatePermissionMutation()
    const [form, setForm] = useState<Permission>(permission)

    const handleSubmit = async () => {
        await updatePermission(form)
        setIsOpen(false)
    }

    const handlePermissionChange = (e: ChangeEvent<HTMLInputElement>) => {
        setForm({ ...form, [e.target.name]: e.target.value })
    }



    return (
        <Dialog open={isOpen} onClose={setIsOpen}>
            <DialogTitle>New Permission</DialogTitle>
            <DialogBody>
                <form>
                    <Fieldset>
                        <div className="grid gap-4 md:grid-cols-1">
                            <div>
                                <label>Name</label>
                                <Input disabled value={form.name} name="name" onChange={handlePermissionChange} />
                            </div>
                            <div>
                                <label>Description</label>
                                <Input value={form.description} name="description" onChange={handlePermissionChange} />
                            </div>
                        </div>
                    </Fieldset>
                </form>
            </DialogBody>
            <DialogActions>
                <Button plain onClick={() => setIsOpen(false)}>Cancel</Button>
                <Button color="green" onClick={handleSubmit} disabled={isLoading}>Submit</Button>
            </DialogActions>
        </Dialog>
    )
}

function DeletePermissionDialog({ isOpen, setIsOpen, permission }: { permission: Permission, isOpen: boolean, setIsOpen: (v: boolean) => void }) {
    const [deletePermission, { isLoading }] = useDeletePermissionMutation()


    const handleSubmit = async () => {
        await deletePermission(permission)
        setIsOpen(false)
    }




    return (
        <Dialog open={isOpen} onClose={setIsOpen}>
            <DialogTitle>Delete Permission</DialogTitle>
            <DialogBody>
                <form>
                    <Fieldset>
                        <div className="grid gap-4 md:grid-cols-1">
                            <div>
                                <label>Name</label>
                                <Input disabled value={permission.name} name="name"  />
                            </div>
                            <div>
                                <label>Description</label>
                                <Input  disabled value={permission.description} name="description" />
                            </div>
                        </div>
                    </Fieldset>
                </form>

                 </DialogBody>
            <DialogActions>
                <Button plain onClick={() => setIsOpen(false)}>Cancel</Button>
                <Button color="red" onClick={handleSubmit} disabled={isLoading}>Delete</Button>
            </DialogActions>
        </Dialog>
    )
}