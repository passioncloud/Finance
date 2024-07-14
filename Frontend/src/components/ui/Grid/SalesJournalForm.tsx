
// above, we have to use client when using the combobox, 
// else, we'll get an error saying: Unhandled Runtime Error. Error: Unknown element <[object Object]> in collection.

// import { useFormState } from "react-dom";
// import { ICustomer } from "@/backend/models/Customer";
import WorkSheetForm from "../WorkSheet/WorkSheetForm";
// import { updateSalesJournalLine } from "@/backend/data/sales-journal-lines";
// import { revalidatePath } from "next/cache";
// import MyDatePicker from "@/app/ui/WorkSheet/MyDatePicker";
// import MyComboBox from "@/app/ui/WorkSheet/MyComboBox";

export default function SalesJournalForm({ workSheetData }: { workSheetData: WorkSheetData }) {
    // const [errors, formAction] = useFormState(createSalesOrder, { errors: { customerNo: '' } })

    // const workSheetData: WorkSheetData = {
    //     columnDefinitions: [
    //         {
    //             name: 'InvoiceNo',
    //             label: 'Invoice No',
    //             type: 'string'
    //         },
    //         {
    //             name: 'BillDate',
    //             label: 'Bill Date',
    //             type: 'date'
    //         },
    //         {
    //             name: 'Amount',
    //             label: 'Amount',
    //             type: 'number'
    //         }
    //     ],
    //     rows: [
    //         [
    //             {
    //                 name: 'InvoiceNo',
    //                 value: 'INV0001'
    //             },
    //             {
    //                 name: 'BillDate',
    //                 value: '2022-01-20'
    //             },
    //             {
    //                 name: 'Amount',
    //                 value: 20000
    //             }
    //         ],
    //         [
    //             {
    //                 name: 'InvoiceNo',
    //                 value: 'INV0002'
    //             },
    //             {
    //                 name: 'BillDate',
    //                 value: '2023-04-20'
    //             },
    //             {
    //                 name: 'Amount',
    //                 value: 8000
    //             }
    //         ]
    //     ]
    // }

    async function onBlur(change: Record<string, string>, row: WorkSheetRow) : Promise<void> {
        console.log({ change, row })
        // await updateSalesJournalLine(change, row)
    }

    return (
        <div>
            {/* <MyComboBox  workSheetData={workSheetData} /> */}
            <WorkSheetForm 
                workSheetData={workSheetData} 
                onBlur={onBlur}    
                />
        </div>
    )
}

