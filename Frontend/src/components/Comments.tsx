/* eslint-disable @typescript-eslint/no-explicit-any */

import { useParams } from "react-router-dom";
import { Table, TableHead, TableRow, TableHeader, TableBody, TableCell } from "./catalyst/table";
import _ from "lodash";
import { SkeletonTableBody } from "./SkeletonTable";
import { usePurchaseRequisitionDocumentQuery } from "../services/UsersService";
import CommentsCommandBar from "./CommentsCommandBar";



function LoadingScreen() {
    return (<SkeletonTableBody columns={6} rows={3} />)
}

export function Comments() {
    const params = useParams() as { No: string }
    const { data, isLoading, error } = usePurchaseRequisitionDocumentQuery(params.No)

    if (error) {
        return <div>
            Error {error?.error}
        </div>
    }

    return (
        <section className="">
            <h1>Comments - {params.No}</h1>
            <CommentsCommandBar />
       
                    <Table>
                        <TableHead>
                            <TableRow>
                                <TableHeader>Date</TableHeader>
                                <TableHeader>Employee</TableHeader>
                                <TableHeader>Comment</TableHeader>
                            </TableRow>
                        </TableHead>
                        {isLoading && <LoadingScreen />}
                        {!isLoading && <CommentsTableBody />}
                    </Table>
        </section>
    )
}


function CommentsTableBody() {
    const params = useParams() as { No: string }
    const { data, isLoading, error } = usePurchaseRequisitionDocumentQuery(params.No)
    const comments = data?.comments;

    if (error) {
        return <div>
            Error {error?.error}
        </div>
    }

    if (isLoading) {
        return (
            <LoadingScreen />
        )
    }

    return (
        <TableBody>
            {comments!.map((comment) => (
                <CommentRow comment={comment} key={comment.Line_No} />
            ))}
        </TableBody>
    )
}


const dateFormatter = Intl.DateTimeFormat('en-uk', {  dateStyle: 'medium', })

function CommentRow({ comment }: { comment: CommentsApi }) {
  
    return (
        <TableRow key={comment.Line_No} className="readonly">
            <TableCell>{dateFormatter.format(new Date(comment.Date))}</TableCell>
            <TableCell>{comment.Employee_Name}</TableCell>
            <TableCell>{comment.Comment}</TableCell>
        </TableRow>
    )
}



