import { useNavigate } from "react-router-dom"
import { useCreatePurchaseRequisitionMutation } from "../services/UsersService"


export default function RequestsToApproveCommandBar() {
    const [createPurchaseRequisition, createResult] = useCreatePurchaseRequisitionMutation()
    const navigate = useNavigate()

    async function handleNew() {
        const purchaseRequsitionResult = await createPurchaseRequisition()
        const purchaseRequisition = purchaseRequsitionResult.data
        if (purchaseRequisition) {
            console.log('doc')
            console.log(purchaseRequisition)
            navigate(`${purchaseRequisition.No}`)
        }
        // purchaseRequsitionDocumentResult.
    }


    return (
        <div className="commandbar">
            <ul>
                <li>
                    <button onClick={handleNew}>
                        Approve
                    </button>

                    <button onClick={handleNew}>
                        Reject
                    </button>
                </li>
            </ul>
        </div>
    )
}