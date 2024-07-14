/* eslint-disable @typescript-eslint/no-explicit-any */

import { Fieldset } from "./catalyst/fieldset";
import { ChangeEvent, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Table, TableHead, TableRow, TableHeader, TableBody } from "./catalyst/table";
import { EllipsisVerticalIcon } from "@heroicons/react/20/solid";
import { Dropdown, DropdownButton, DropdownMenu, DropdownItem } from "./catalyst/dropdown";
import { NumberCell } from "./cell/number-cell";
import _ from "lodash";
import { SkeletonTableBody } from "./SkeletonTable";
import { useDeleteAttachmentMutation, useDeletePurchaseRequisitionLineMutation, useDownloadAttachmentMutation, usePurchaseRequisitionDocumentQuery, useUpdatePurchaseRequisitionLineMutation } from "../services/UsersService";
import { Input } from "./catalyst/input";




function LoadingScreen() {
    return (<SkeletonTableBody columns={6} rows={3} />)
}

function AttachmentLinesTableBody() {
    const params = useParams() as { No: string }
    const { data, isLoading, error } = usePurchaseRequisitionDocumentQuery(params.No)
    const attachments = data?.attachments;

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
            {attachments!.map((attachment) => (
                <AttachmentRow attachment={attachment} key={attachment.ID} />
            ))}
        </TableBody>
    )
}

export function AttachmentLines() {
    const params = useParams() as { No: string }
    const { data, isLoading, error } = usePurchaseRequisitionDocumentQuery(params.No)

    if (error) {
        return <div>
            Error {error?.error}
        </div>
    }

    return (
        <section className="">
            <h1 className="mt-4"><b>Attachments</b></h1>
            <Fieldset>
                <div>
                    <Table>
                        <TableHead>
                            <TableRow>
                                <TableHeader>Name</TableHeader>
                                <TableHeader className="relative w-0">
                                    <span className="sr-only">Actions</span>
                                </TableHeader>
                                <TableHeader>Size</TableHeader>
                            </TableRow>
                        </TableHead>
                        {isLoading && <LoadingScreen />}
                        {!isLoading && <AttachmentLinesTableBody />}

                    </Table>
                </div>

            </Fieldset>
        </section>
    )
}




function AttachmentRow({ attachment }: { attachment: AttachmentsApi }) {
    const [deleteAttachment] = useDeleteAttachmentMutation()
    const [downloadAttachment] = useDownloadAttachmentMutation()


    const handleDelete = async () => {
        await deleteAttachment(attachment)
    }

    const handleDownload = async () => {
        await downloadAttachment(attachment)
    }

    return (
        <tr key={attachment.ID} className="editable">
            <td>
                <div>
                    <span>{attachment.FullFileName}</span>
                </div>
            </td>
            <td>

                <Dropdown>
                    <DropdownButton plain aria-label="More options">
                        <EllipsisVerticalIcon />
                    </DropdownButton>
                    <DropdownMenu anchor="bottom start">
                    <DropdownItem onClick={handleDownload}>
                            Download
                        </DropdownItem>
                        <DropdownItem onClick={handleDelete}>
                            Delete
                        </DropdownItem>
                    </DropdownMenu>
                </Dropdown>

            </td>

            <td>
                <div>
                    <span>{attachment.File_Extension}</span>
                </div>
            </td>

       
        </tr>
    )
}


