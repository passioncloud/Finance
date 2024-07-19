import {
    CommandBar,
    ICommandBarItemProps
} from "@fluentui/react";
import { useNavigate, useParams } from "react-router-dom";

import { useDeleteItemMutation } from "./service"


export default function EditItemCommandBar() {
    const params = useParams() as {Id: string }
    const [deleteItem] = useDeleteItemMutation()
    const navigate = useNavigate()

    async function handleDelete() {
        navigate('/items')
        deleteItem(params)
    }

    function handleBack() {
        navigate('/items')
    }

    const _items: ICommandBarItemProps[] = [
        {
            key: "Back",
            text: "Back",
            iconProps: { iconName: "Back" },
            onClick: handleBack
        },
        {
            key: "Delete",
            text: "Delete",
            iconProps: { iconName: "Delete" },
            onClick: handleDelete
        },
    ];

    return (
        <div>
            <CommandBar
                items={_items}
            />
        </div>
    );
};







