import { useNavigate, useParams } from "react-router-dom"
import { useDeleteItemMutation } from "./service"
import { Link } from "../catalyst/link"


export default function EditItemCommandBar() {
    const params = useParams() as {id: string }
    const [deleteItem] = useDeleteItemMutation()
    const navigate = useNavigate()

    async function handleDelete() {
        navigate('/items')
        deleteItem(params)
    }


    return (
        <div className="commandbar">
            <ul>
                <li>
                    <Link href="/items">Back</Link>
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