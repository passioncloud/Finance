import { useNavigate } from "react-router-dom"
import { ChangeEvent, useState } from "react"
import { Dialog, DialogActions, DialogBody, DialogTitle } from "../catalyst/dialog"
import { Input } from "../catalyst/input"
import { Button } from "../catalyst/button"
import { useCreatePermissionMutation } from "./PermissionsService"
import { Fieldset, Label } from "../catalyst/fieldset"

export default function PermissionsCommandBar() {
    const [isPermissionDialogOpen, setPermissionDialogOpen] = useState(false)


    async function handleNew() {
        setPermissionDialogOpen(true)
    }


    return (
        <div className="commandbar">
            <ul>
                <li>
                    <button onClick={handleNew}>
                        New
                    </button>
                </li>
            </ul>
            <PermissionDialog isOpen={isPermissionDialogOpen} setIsOpen={setPermissionDialogOpen} />
        </div>
    )
}



function PermissionDialog({ isOpen, setIsOpen }: { isOpen: boolean, setIsOpen: (v: boolean) => void }) {
    const [createPermission, { isLoading }] = useCreatePermissionMutation()
    const [form, setForm] = useState<Permission>({ name: '', description: '' })

    const handleSubmit = async () => {
        await createPermission(form)
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
                                <Input value={form.name} name="name" onChange={handlePermissionChange} />
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