import { Field, useId, Input } from "@fluentui/react-components";
import { ChangeEventHandler } from "react";

export const MyInputField = ({ name, label, value, onChange }: { name: string, label: string, value: any, onChange: ChangeEventHandler<HTMLInputElement> }) => {
    const inputId = useId(name);
    return (
        <Field
            label={label}
            validationState="success"
        //   validationMessage="This is a success message."
        >
            <Input id={inputId} value={value} name={name} onChange={onChange} />
        </Field>
    )
}

