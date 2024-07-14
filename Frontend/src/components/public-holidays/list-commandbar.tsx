import { useNavigate } from "react-router-dom"
import { useCreatePublicHolidayMutation } from "./service"
// import { useCreatePurchaseRequisitionMutation } from "../../services/UsersService"


export default function PublicHolidaysCommandBar() {
    // const [createPurchaseRequisition, createResult] = useCreatePurchaseRequisitionMutation()
    const [createPublicHoliday] = useCreatePublicHolidayMutation()
    const navigate = useNavigate()

    async function handleNew() {
        navigate('new')
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
        </div>
    )
}