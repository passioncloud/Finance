import { useState, useEffect } from "react";

export default function TextField({ label, name, value, defaultValue, onBlur, readOnly, onChange, onFocus }: { label: string, name: string, value?: any, defaultValue?: any, onBlur?: (e: any) => void, onChange?: (e: any) => void, onFocus?: (e: any) => void, readOnly?: boolean }) {
    const [form, setForm] = useState({
        [name]: value
    })
    useEffect(() => {
        setForm({
            ...form,
            [name]: value
        })
    }, [value, name])

    const handleBlur = async (e: any) => {
        let v = defaultValue;        
        if(v == undefined) {
            v = value;
        }
        if (e.target.value == v) return;
        if (onBlur) onBlur(e)
    }

    const handleChange = (e: any) => {
        setForm({ ...form, [e.target.name]: e.target.value })
        if (onChange) {
            onChange(e)
        }
    }

    return (
        <div className="sm:col-span-3">

            <label htmlFor="Name">
                {label}
            </label>
            <div className="mt-1">
                <input
                    type="text"
                    name={name}
                    className="block w-full rounded-md border-0 py-1 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    value={form[name]}
                    onBlur={handleBlur}
                    onChange={handleChange}
                    readOnly={readOnly}
                    onFocus={onFocus}
                />
            </div>
        </div>
    )
}

