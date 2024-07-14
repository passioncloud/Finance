/* eslint-disable @typescript-eslint/no-explicit-any */

import { Fieldset, Label } from "../catalyst/fieldset";
import { Input } from "../catalyst/input";
import { Select } from "../catalyst/select";
import DateField from "../DateField";
import { ChangeEvent, ChangeEventHandler, useEffect, useState } from "react";
import { EllipsisVerticalIcon, XCircleIcon } from '@heroicons/react/20/solid';
import { Dropdown, DropdownButton, DropdownItem, DropdownMenu } from "../catalyst/dropdown";
import { useParams } from "react-router-dom";

import { EditPurchaseRequisitionLines } from "./EditPurchaseRequisitionLines";

import { usePurchaseRequisitionDocumentQuery, useUpdatePurchaseRequisitionMutation } from "../../services/UsersService";
import EditPurchaseRequisitionCommandBar from "../EditPurchaseRequisitionCommandBar";
import { formatNumber } from "../cell/number-cell";
import { AttachmentLines } from "../AttachmentLines";
import { Listbox, ListboxLabel, ListboxOption } from "../catalyst/listbox";
import { SearchSelect, SearchSelectItem } from '@tremor/react'
import { TableCell, TableRow } from "../catalyst/table";
import Breadcrumbs from "../Breadcrumbs";


export default function EditPurchaseRequisition() {
    const params = useParams() as { No: string }
    const { data, isLoading, error } = usePurchaseRequisitionDocumentQuery(params.No)
    const purchaseRequisitionDocument = data
    const [isSaving, setIsSaving] = useState(false)



    return (
        <div className="p-2">
            <h1 className="mt-4 mb-4"><b>Edit Purchase Requisition - {params.No}</b></h1>
            
            {/* <Breadcrumbs /> */}
            <EditPurchaseRequisitionCommandBar />

            <form>


                <Fieldset disabled={isSaving}>
                    <div className="grid gap-4 md:grid-cols-3 lg:grid-cols-5">
                        {isLoading && <EditPurchaseRequisitionSkeleton />}
                        {purchaseRequisitionDocument &&
                            <EditPurchaseRequisitionForm purchaseRequisitionDocument={purchaseRequisitionDocument!} />
                        }
                    </div>
                </Fieldset>
                <div className="p-4" />
                <EditPurchaseRequisitionLines />

                <AttachmentLines />
            </form>
        </div>
    )

}


function EditPurchaseRequisitionForm({ purchaseRequisitionDocument }: { purchaseRequisitionDocument: PurchaseRequisitionDocument }) {
    const params = useParams() as { No: string }
    const { projects, currencies, locations, procurementMethods } = purchaseRequisitionDocument
    const [errorMessage, setErrorMessage] = useState('')
    const [updatePurchaseRequisition, result] = useUpdatePurchaseRequisitionMutation()
    const [form, setForm] = useState(purchaseRequisitionDocument.requisition)
    const readOnly = form.Status !== 'Open'

    useEffect(() => {
        setForm(purchaseRequisitionDocument.requisition)
    }, [purchaseRequisitionDocument])

    const onFormChangeAndSave = async (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        if (!form) return;
        const newForm = { ...form, [name]: value }
        setForm(newForm)
        updatePurchaseRequisition(newForm)

    }

    const searchSelectOnValueChange = (name: string, onFormChange: ChangeEventHandler<HTMLElement>) => {
        return (newValue: string) => onFormChange({
            // @ts-ignore
            target: { value: newValue, name }
        })

    }

    return (
        <>
            <div>
                <Label>No</Label>
                <Input value={form.No} disabled readOnly={readOnly} />
            </div>

            <div>
                <Label>Status</Label>
                <Input value={form.Status} disabled readOnly={readOnly} />
            </div>
            <div>
                <Label>Total Amount</Label>
                <Input value={formatNumber(form.Amount)} disabled readOnly={readOnly} />
            </div>

            <div>
                <Label>Process Type</Label>
                <Select name="Process_Type" value={form.Process_Type} onChange={onFormChangeAndSave}>
                    <option></option>
                    {procurementMethods.map(procumentMethod => (
                        <option
                            key={procumentMethod.Code}
                            value={procumentMethod.Code}
                            disabled={readOnly}>
                            {procumentMethod.Description}
                        </option>
                    ))}
                </Select>
            </div>
            <div>
                <Label>Currency</Label>
                <Select name="Currency_Code" value={form.Currency_Code} onChange={onFormChangeAndSave}
                >
                    <option disabled={readOnly}></option>
                    {currencies.map(currency => (
                        <option
                            key={currency.Code}
                            value={currency.Code}
                            disabled={readOnly}>
                            {currency.Description}
                        </option>
                    ))}
                </Select>
            </div>
            <div>
                <Label>Project</Label>
                <Select
                    name="ProjectCode"
                    onChange={onFormChangeAndSave}
                    value={form.ProjectCode}
                >
                    <option disabled={readOnly}></option>
                    {projects.map(project => (
                        <option
                            value={project.Code}
                            key={project.Code}
                            disabled={readOnly}>
                            {project.Name}
                        </option>
                    ))}
                </Select>

            </div>
            <div>
                <Label>Location</Label>
                <Select
                    name="Location_Code"
                    onChange={onFormChangeAndSave}
                    value={form.Location_Code}
                    disabled={readOnly}>
                    <option disabled={readOnly}></option>
                    {locations.map(location => (
                        <option
                            value={location.Code}
                            key={location.Code}
                            disabled={readOnly}>
                            {location.Name}
                        </option>
                    ))}
                </Select>
            </div>
            <div>
                <Label>Request Date</Label>
                <DateField name="RequestDate"
                    value={form.RequestDate}
                    onBlur={onFormChangeAndSave}
                    readOnly={readOnly}
                // disabled={isSaving}
                />
            </div>
            <div className="md:col-span-2">
                <Label>Description</Label>
                <Input defaultValue={form.Description} name="Description" onBlur={onFormChangeAndSave} readOnly={readOnly} />
            </div>
        </>
    )
}



function EditPurchaseRequisitionSkeleton() {

    return (
        <>
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
        </>
    )
}

export function SkeletonInputField() {
    return (
        <Input value="" name="" className="animate-pulse" readOnly style={{ backgroundColor: 'lightgrey' }} />
    )
}


export function FlatAlert({ message }: { message: string }) {
    if (message.length == 0) return null;
    return (
        <div className="rounded-md bg-red-50 p-4">
            <div className="flex">
                <div className="flex-shrink-0">
                    <XCircleIcon className="h-5 w-5 text-red-400" aria-hidden="true" />
                </div>
                <div className="ml-3">
                    <h3 className="text-sm font-medium text-red-800">{message}</h3>
                </div>
            </div>
        </div>
    )
}

