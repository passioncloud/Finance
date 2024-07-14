import { useNavigate, useParams } from "react-router-dom"
import { useCreatePublicHolidayMutation, useDeletePublicHolidayMutation } from "./service"
import { Link } from "../catalyst/link"


export default function EditPublicHolidayCommandBar() {
    const params = useParams() as {id: string }
    // const [createPurchaseRequisition, createResult] = useCreatePurchaseRequisitionMutation()
    const [deletePublicHoliday] = useDeletePublicHolidayMutation()
    const navigate = useNavigate()

    async function handleDelete() {
        navigate('/public-holidays')
        deletePublicHoliday(params)
    }


    return (
        <div className="commandbar">
            <ul>
                <li>
                    <Link href="/public-holidays">Back</Link>
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