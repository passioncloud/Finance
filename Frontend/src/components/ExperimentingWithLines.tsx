/* eslint-disable @typescript-eslint/no-explicit-any */

import { Fieldset, Legend } from "./catalyst/fieldset";
import { useEffect, useState } from "react";
import { errorMessageFor } from '../data';
import { useLoaderData, useNavigate } from "react-router-dom";
import axios from "axios";
import { Select } from "./catalyst/select";
import { Table, TableHead, TableRow, TableHeader, td, TableBody } from "./catalyst/table";
import { EllipsisVerticalIcon } from "@heroicons/react/20/solid";
import { Dropdown, DropdownButton, DropdownMenu, DropdownItem } from "./catalyst/dropdown";
import WorkSheetForm from "./ui/WorkSheet/WorkSheetForm";


const columnDefinitions = [
    {
        name: 'documentNo',
        label: 'Document No',
        type: 'string'
    },
    {
        name: 'postingDate',
        label: 'Posting Date',
        type: 'date'
    },
    {
        name: 'customerNo',
        label: 'Customer No',
        type: 'option'
    },
    {
        name: 'description',
        label: 'Description',
        type: 'string'
    },
    {
        name: 'accountType',
        label: 'Account Type',
        type: 'string'
    },
    {
        name: 'accountNo',
        label: 'Account No',
        type: 'string'
    },
    {
        name: 'currency',
        label: 'Currency',
        type: 'string'
    },
    {
        name: 'amount',
        label: 'Amount',
        type: 'number'
    },
]

const lines = [
    {
        _id: 123,
        accountNo: 'ac1',
        accountType: 't',
        amount: 300,
        balancingBankAccountNo: 'g',
        currency: 'ugx',
        customerName: 'tt',
        customerNo: 'c',
        description: 'ddf',
        documentNo: 'd0',
        paymentMethod: 'cash',
        postingDate: '2023-01-20'
    },
    {
        _id: 123,
        accountNo: 'ac1',
        accountType: 't',
        amount: 300,
        balancingBankAccountNo: 'g',
        currency: 'ugx',
        customerName: 'tt',
        customerNo: 'c',
        description: 'ddf',
        documentNo: 'd0',
        paymentMethod: 'cash',
        postingDate: '2023-01-20'
    },
];
const rows = lines.map(line => (
    Object.entries(line).map(([k, v]) => {
        return {
            name: k,
            value: v
        }
    })
));

export default function EditPurchaseRequisitionLines() {
    const purchaseRequisitionDocument = useLoaderData() as PurchaseRequisitionDocument
    const { requisitionLines } = purchaseRequisitionDocument

    const onBlur = ()=>null;
    const workSheetData: WorkSheetData = { columnDefinitions, rows }
    return (
        <WorkSheetForm
            workSheetData={workSheetData}
            onBlur={onBlur}
        />
    )
}





export  function EditPurchaseRequisitionLines2() {
    const purchaseRequisitionDocument = useLoaderData() as PurchaseRequisitionDocument
    const { requisitionLines } = purchaseRequisitionDocument


    const [form, setForm] = useState<PurchaseRequisitionsApi>(purchaseRequisitionDocument.requisition)
    const [errorMessage, setErrorMessage] = useState('')
    const [isSaving, setIsSaving] = useState(false)

    const navigate = useNavigate()



    const onFormChange = (e: any) => {
        const { name, value } = e.target;
        console.log(name, value)
        if (!form) return;
        const newForm = { ...form, [name]: value }
        try {
            setErrorMessage('')
            // const validator = new LeaveRequestValidator(newForm)
            setForm(newForm)
        }
        catch (e: any) {
            setErrorMessage(e.message)
        }
    }

    const save = async () => {
        try {
            setIsSaving(true)
            if (!form) return;
            await axios({
                method: 'PATCH',
                url: `http://localhost:4002/purchase-requisitions/${form.No}`,
                data: form
            })
            navigate(window.location.pathname, { replace: true })

        }

        catch (e: any) {
            const msg = errorMessageFor(e)
            setErrorMessage(msg)
        }
        finally {
            setIsSaving(false)
        }
    }


    return (
        <form className="">
            <Fieldset disabled={isSaving}>
                <Legend className="mt-4">Lines</Legend>

                <div className="-mx-4  sm:-mx-0">
                    <Table>
                        <TableHead>
                            <TableRow>
                                <TableHeader>No</TableHeader>
                                {/* <TableHeader className="relative w-0">
                                    <span className="sr-only">Actions</span>
                                </TableHeader> */}
                                <TableHeader>Quantity</TableHeader>
                                <TableHeader>Direct Unit Cost</TableHeader>
                                <TableHeader>Description</TableHeader>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {requisitionLines.map((line) => (
                                <RequisitionLineRow
                                    key={line.Line_No}
                                    requisitionLine={line} />
                            ))}
                        </TableBody>
                    </Table>
                </div>
                {/* <div className="pt-2">
                <ActionButton onClick={handleNew}>New</ActionButton>
            </div> */}

            </Fieldset>
        </form>
    )
}




function RequisitionLineRow({ requisitionLine }: { requisitionLine: PurchaseRequisitionLinesApi }) {
    const purchaseRequisitionDocument = useLoaderData() as PurchaseRequisitionDocument
    const { glAccounts } = purchaseRequisitionDocument

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

    const handle_OnBlur = async (e: any) => {
        const field: keyof PurchaseRequisitionLinesApi = e.target.name
        if (e.target.value == requisitionLine[field]) return;

        // await saveCashReceiptJournalLine({
        //     Id: form.Id,
        //     [e.target.name]: e.target.value
        // })
    }

    return (
        <tr key={requisitionLine.Line_No} className="editable">
            <td>
                <div>
                    <Select name="No" value={requisitionLine.No} onChange={handleChange}>
                        <option></option>
                        {glAccounts.map(glAccount => (
                            <option
                                key={glAccount.No}
                                value={glAccount.No}>
                                {glAccount.Name}
                            </option>
                        ))}
                    </Select>
                </div>
            </td>
            {/* <td>
                <div className="-mx-3 -my-1.5 sm:-mx-2.5">
                    <Dropdown>
                        <DropdownButton plain aria-label="More options">
                            <EllipsisVerticalIcon />
                        </DropdownButton>
                        <DropdownMenu anchor="bottom start">
                            <DropdownItem>
                                Delete
                            </DropdownItem>
                        </DropdownMenu>
                    </Dropdown>
                </div>
            </td>
                    */}
            <td>
                <div>
                    <input
                        type="number"
                        name="Quantity"
                        value={form.Quantity}
                        onBlur={handle_OnBlur}
                        onChange={handleChange}
                    />
                </div>
            </td>
            {/*
            <td>
                <div>
                    <input
                        type="number"
                        name="Direct_Unit_Cost"
                        value={form.Direct_Unit_Cost}
                        onBlur={handle_OnBlur}
                        onChange={handleChange}
                    />
                </div>
            </td>
            <td className="text-sm text-gray-500 p-0">
                <div>
                    <input
                        type="text"
                        name="Description"
                        value={form.Description}
                        onBlur={handle_OnBlur}
                        onChange={handleChange}
                    />
                </div>
            </td> */}
        </tr>
    )
}