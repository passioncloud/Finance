import { useNavigate, useParams } from "react-router-dom"
import { useCreateEmployeeMutation, useDeleteEmployeeMutation } from "./EmployeeService"
import { Link } from "../catalyst/link"


export default function EditEmployeeCommandBar() {
    const params = useParams() as {id: string }
    // const [createPurchaseRequisition, createResult] = useCreatePurchaseRequisitionMutation()
    const [deleteEmployee] = useDeleteEmployeeMutation()
    const navigate = useNavigate()

    async function handleDelete() {
        navigate('/employees')
        deleteEmployee(params)
    }


    return (
        <div className="commandbar">
            <ul>
                <li>
                    <Link href="/employees">Back</Link>
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