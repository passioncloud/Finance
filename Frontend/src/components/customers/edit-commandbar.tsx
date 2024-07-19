import {
    CommandBar,
    ICommandBarItemProps
} from "@fluentui/react";
import { useNavigate, useParams } from "react-router-dom";

import { useDeleteCustomerMutation } from "./service"


export default function EditCustomerCommandBar() {
    const params = useParams() as {Id: string }
    const [deleteCustomer] = useDeleteCustomerMutation()
    const navigate = useNavigate()

    async function handleDelete() {
        navigate('/customers')
        deleteCustomer(params)
    }

    function handleBack() {
        navigate('/customers')
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







