import { useNavigate } from "react-router-dom"
import { useCreateEmployeeMutation } from "./EmployeeService"
// import { useCreatePurchaseRequisitionMutation } from "../../services/UsersService"


export default function EmployeesCommandBar() {
    // const [createPurchaseRequisition, createResult] = useCreatePurchaseRequisitionMutation()
    const [createEmployee] = useCreateEmployeeMutation()
    const navigate = useNavigate()

    async function handleNew() {
        navigate('new')
        // const purchaseRequsitionResult = await createPurchaseRequisition()
        // const purchaseRequisition = purchaseRequsitionResult.data
        // if (purchaseRequisition) {
        //     console.log('doc')
        //     console.log(purchaseRequisition)
        //     navigate(`${purchaseRequisition.No}`)
        // }
        // purchaseRequsitionDocumentResult.
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