import { ChangeEvent, useState } from "react"
import { Dialog, DialogActions, DialogBody, DialogTitle } from "./catalyst/dialog"
import { Input } from "./catalyst/input"
import { Button } from "./catalyst/button"
import { useAddCommentMutation } from "../services/UsersService"
import { useParams } from "react-router-dom"

export default function CommentsCommandBar() {
    const [isCommentDialogOpen, setCommentDialogOpen] = useState(false)

    function handleAddComment() {
        setCommentDialogOpen(true)
    }

    return (
        <div className="commandbar">
            <ul>
                <li>
                    <button onClick={handleAddComment}>
                        Add comment
                    </button>
                    <CommentDialog isOpen={isCommentDialogOpen} setIsOpen={setCommentDialogOpen} />
                </li>
            </ul>
        </div>
    )
}


function CommentDialog({ isOpen, setIsOpen }: { isOpen: boolean, setIsOpen: (v: boolean) => void }) {
    // const [reject] = useRejectMutation()
    const [addComment] = useAddCommentMutation()
    const [comment, setComment] = useState('')
    const params= useParams() as { No: string }

    const handleSubmit = async () => {
        await addComment({ Document_No: params.No, Comment: comment })
        setComment('')
        setIsOpen(false)
    }

    const handleCommentChange = (e: ChangeEvent<HTMLInputElement>) => {
        setComment(e.target.value)
    }



    return (
        <Dialog open={isOpen} onClose={setIsOpen}>
            <DialogTitle>Comment</DialogTitle>
            <DialogBody>
                <Input value={comment} onChange={handleCommentChange} />
            </DialogBody>
            <DialogActions>
                <Button plain onClick={() => setIsOpen(false)}>Cancel</Button>
                <Button color="green" onClick={handleSubmit}>Submit</Button>
            </DialogActions>
        </Dialog>
    )
}