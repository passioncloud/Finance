import { useNavigate, useParams } from "react-router-dom"

import { useUserByUsernameQuery } from "../../services/UsersService"
import { Link } from "../catalyst/link"


export default function EditUserCommandBar() {

    const params = useParams() as { username: string }
    const { data } = useUserByUsernameQuery(params)
    const user = data
    const navigate = useNavigate()

    async function handleDelete() {
        // const result = await deletePurchaseRequisition(params)
        // if (!result.error) {
        navigate(`/users`)
        // }
    }




    return (
        <div className="commandbar">
            <ul>

                <li>
                    <Link href="user-permission-sets">
                        User Permission Sets
                    </Link>
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