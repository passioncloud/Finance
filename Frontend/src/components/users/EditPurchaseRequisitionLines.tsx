/* eslint-disable @typescript-eslint/no-explicit-any */

import { Fieldset } from "../catalyst/fieldset";
import { ChangeEvent, ChangeEventHandler, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Table, TableHead, TableRow, TableHeader, TableBody } from "../catalyst/table";
import { EllipsisVerticalIcon } from "@heroicons/react/20/solid";
import { Dropdown, DropdownButton, DropdownMenu, DropdownItem } from "../catalyst/dropdown";
import { NumberCell } from "../cell/number-cell";
import _ from "lodash";
import { SkeletonTableBody } from "../SkeletonTable";
import { useCreatePurchaseRequisitionLineMutation, useDeletePurchaseRequisitionLineMutation, usePurchaseRequisitionDocumentQuery, useUpdatePurchaseRequisitionLineMutation } from "../../services/UsersService";



function LoadingScreen() {
    return (<SkeletonTableBody columns={6} rows={3} />)
}

function EditPurchaseRequisitionLinesTableBody() {
    const params = useParams() as { No: string }
    const { data, isLoading, error } = usePurchaseRequisitionDocumentQuery(params.No)
    const requisitionLines = data?.requisitionLines;

    if (error) {
        return <div>
            Error {error?.error}
        </div>
    }

    if (isLoading) {
        return (
            <LoadingScreen />
        )
    }

    return (
        <TableBody>
            {requisitionLines!.map((requisitionLine) => (
                <RequisitionLineRow requisitionLine={requisitionLine} key={requisitionLine.Line_No} />
            ))}
            <NewRequisitionLineRow />
        </TableBody>
    )
}

export function EditPurchaseRequisitionLines() {
    const params = useParams() as { No: string }
    const { data, isLoading, error } = usePurchaseRequisitionDocumentQuery(params.No)

    if (error) {
        return <div>
            Error {error?.error}
        </div>
    }

    return (
        <section className="">
            {/* <FlatAlert message={errorMessage} /> */}
            <h1 className="mt-4"><b>Lines</b></h1>
            <Fieldset>
                <div>
                    <Table style={{tableLayout: 'fixed'}}>
                        <colgroup>
                            <col span={1} />
                            <col span={1} />
                            <col span={1} />
                            <col span={1} />
                            <col span={2} />
                        </colgroup>
                        <TableHead>
                            <TableRow>
                                <TableHeader>No</TableHeader>
                                <TableHeader className="relative w-0">
                                    <span className="sr-only">Actions</span>
                                </TableHeader>
                                <TableHeader>Quantity</TableHeader>
                                <TableHeader>Direct Unit Cost</TableHeader>
                                <TableHeader colSpan={2}>Description</TableHeader>
                            </TableRow>
                        </TableHead>
                        {isLoading && <LoadingScreen />}
                        {!isLoading && <EditPurchaseRequisitionLinesTableBody />}
                    </Table>
                </div>

            </Fieldset>
        </section>
    )
}




function RequisitionLineRow({ requisitionLine }: { requisitionLine: PurchaseRequisitionLinesApi }) {
    const params = useParams() as { No: string }
    const { data, isLoading, error } = usePurchaseRequisitionDocumentQuery(params.No)
    const [updatePurchaseRequisitionLine] = useUpdatePurchaseRequisitionLineMutation()
    const [deletePurchaseRequisitionLine] = useDeletePurchaseRequisitionLineMutation()
    const readOnly = data?.requisition?.Status !== 'Open'
    const { glAccounts } = data!

    const [form, setForm] = useState(requisitionLine)

    useEffect(() => {
        setForm(requisitionLine)
    }, [requisitionLine])

    const handleChange = (e: any) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        })
    }

    const handle_OnBlur = async (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        // @ts-ignore
        const field: keyof PurchaseRequisitionLinesApi = e.target.name
        if (e.target.value == requisitionLine[field]) return;
        const newForm = { ...requisitionLine, [field]: e.target.value }
        e.target.value = ''
        const r = await updatePurchaseRequisitionLine(newForm)

    }

    const handleDelete = async () => {
        await deletePurchaseRequisitionLine(requisitionLine)
    }

    return (
        <tr key={requisitionLine.Line_No} className="editable">
            <td>
                <div>
                    <select name="No" value={requisitionLine.No} onChange={handle_OnBlur}>
                        <option></option>
                        {glAccounts.map(glAccount => (
                            <option
                                key={glAccount.No}
                                value={glAccount.No}
                                disabled={readOnly}>
                                {glAccount.Name}
                            </option>
                        ))}
                    </select>
                </div>
            </td>
            <td>

                <Dropdown>
                    <DropdownButton plain aria-label="More options">
                        <EllipsisVerticalIcon />
                    </DropdownButton>
                    <DropdownMenu anchor="bottom start">
                        <DropdownItem onClick={handleDelete}>
                            Delete
                        </DropdownItem>
                    </DropdownMenu>
                </Dropdown>

            </td>

            <td>
                <NumberCell
                    name="Quantity"
                    value={form.Quantity}
                    handleBlur={handle_OnBlur}
                    readOnly={readOnly}
                />
            </td>

            <td>
                <NumberCell
                    name="Direct_Unit_Cost"
                    value={form.Direct_Unit_Cost}
                    handleBlur={handle_OnBlur}
                    readOnly={readOnly}
                />
            </td>
            <td colSpan={2}>
                <input
                    type="text"
                    name="Description"
                    value={form.Description}
                    onBlur={handle_OnBlur}
                    onChange={handleChange}
                    readOnly={readOnly}
                />
            </td>
        </tr>
    )
}


function NewRequisitionLineRow() {
    const params = useParams() as { No: string }
    const { data, isLoading, error } = usePurchaseRequisitionDocumentQuery(params.No)
    const [createPurchaseRequisitionLine] = useCreatePurchaseRequisitionLineMutation()
    const [updatePurchaseRequisitionLine] = useUpdatePurchaseRequisitionLineMutation()

    const glAccounts = data?.glAccounts ?? []

    const [form, setForm] = useState<Partial<PurchaseRequisitionLinesApi>>({ No: '', Line_No: 0 })



    const handleChange = (e: any) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        })
    }

    const handle_OnBlur = async (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        // @ts-ignore
        const field: keyof PurchaseRequisitionLinesApi = e.target.name
        if (e.target.value === form[field]) return;
        const newForm = { ...form, [field]: e.target.value, Document_No: params.No! }
        e.target.value = ''
        await updatePurchaseRequisitionLine(newForm)
    }

    if (data?.requisition?.Status !== 'Open') return null;

    const searchSelectOnValueChange = (name: string, onFormChange: ChangeEventHandler<HTMLElement>) => {
        return (newValue: string) => onFormChange({
            // @ts-ignore
            target: { value: newValue, name }
        })
    }


    return (
        <tr className="editable">
            <td>
                <div>
                    <select name="No" value={form.No} onChange={handle_OnBlur}>
                        <option></option>
                        {glAccounts.map(glAccount => (
                            <option
                                key={glAccount.No}
                                value={glAccount.No}
                            >
                                {glAccount.Name}
                            </option>
                        ))}
                    </select>
                </div>
            </td>
            <td>

                <Dropdown>
                    <DropdownButton plain aria-label="More options">
                        <EllipsisVerticalIcon />
                    </DropdownButton>
                    <DropdownMenu anchor="bottom start">

                    </DropdownMenu>
                </Dropdown>

            </td>

            <td>

            </td>

            <td>

            </td>
            <td colSpan={2}>

            </td>
        </tr>
    )
}
