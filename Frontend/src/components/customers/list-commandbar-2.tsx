import {
    CommandBar,
    ICommandBarItemProps
} from "@fluentui/react";
import { useNavigate } from "react-router-dom";



export default function CustomersCommandBar() {
    const navigate = useNavigate()

    function handleNew() {
        navigate('new')
    }

    const _items: ICommandBarItemProps[] = [
        {
            key: "new",
            text: "New",
            iconProps: { iconName: "Add" },
            onClick: handleNew
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




