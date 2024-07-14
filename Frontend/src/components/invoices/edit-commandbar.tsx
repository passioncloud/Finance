import { useNavigate, useParams } from "react-router-dom"
import { useDeleteInvoiceMutation } from "./service"
import { Link } from "../catalyst/link"


export default function EditInvoiceCommandBar() {
    const params = useParams() as {id: string }
    const [deleteInvoice] = useDeleteInvoiceMutation()
    const navigate = useNavigate()

    async function handleDelete() {
        navigate('/invoices')
        deleteInvoice(params)
    }


    return (
        <div className="commandbar">
            <ul>
                <li>
                    <Link href="/invoices">Back</Link>
                </li>
                <li>
                    <button onClick={handleDelete}>
                        Delete
                    </button>
                </li>
            </ul>
        </div>
    )
}