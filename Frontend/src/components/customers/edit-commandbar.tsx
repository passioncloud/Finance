import { useNavigate, useParams } from "react-router-dom"
import { useDeleteCustomerMutation } from "./service"
import { Link } from "../catalyst/link"


export default function EditCustomerCommandBar() {
    const params = useParams() as {id: string }
    const [deleteCustomer] = useDeleteCustomerMutation()
    const navigate = useNavigate()

    async function handleDelete() {
        navigate('/customers')
        deleteCustomer(params)
    }


    return (
        <div className="commandbar">
            <ul>
                <li>
                    <Link href="/customers">Back</Link>
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