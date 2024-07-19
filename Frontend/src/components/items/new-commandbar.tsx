import {
    CommandBar,
    ICommandBarItemProps
} from "@fluentui/react";
import { useNavigate } from "react-router-dom";



export default function NewItemCommandBar() {
    const navigate = useNavigate()

    function handleBack() {
        navigate('/items')
    }

    const _items: ICommandBarItemProps[] = [
        {
            key: "back",
            text: "Back",
            iconProps: { iconName: "Back" },
            onClick: handleBack
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




