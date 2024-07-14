import { useState } from "react"
import TextField from "./TextField";

export default function LeaveTypeCombobox({ name, label, defaultValue, onBlur, leaveTypes }: { name: string, label: string, defaultValue?: string; onBlur: (e: any) => void, leaveTypes: { Code: string, Description: string }[] }) {
    const [value, setValue] = useState(defaultValue || '');
    const [dropdownVisible, setDropdownVisible] = useState(false)

    const handleChange = (e: any) => {
        setValue(e.target.value)
        setDropdownVisible(true)
    }

    const handleBlur = () => {
        console.log('bluring', value)
        onBlur({
            target: {
                [name]: value
            }
        })
    }

    const customerOptions = leaveTypes.filter(c => {
        const selectedNoLowerCase = value.toLowerCase()
        return c.Code?.toLowerCase()?.includes(selectedNoLowerCase) ||
            c.Description?.toLowerCase()?.includes(selectedNoLowerCase)
    })

    return (

        <div className="combobox-container">
            <TextField
                label={label}
                value={value}
                name={name}
                onBlur={() => null}
                onChange={handleChange}
                onFocus={() => setDropdownVisible(true)}
            />
            {dropdownVisible &&
                <div className="combobox-options">
                    <table>
                        <thead>
                            <tr>
                                <th>Code</th>
                                <th>Description</th>
                                <th>age</th>
                            </tr>
                        </thead>
                        <tbody>
                            {customerOptions.map(c => {
                                const handleRowClick = async () => {
                                    setValue(c.Code)
                                    setDropdownVisible(false)
                                    onBlur({
                                        target: {
                                            name,
                                            value: c.Code
                                        }
                                    })
                                }
                                return (
                                    <tr key={c.Code}
                                        className='readonly'
                                        onSelect={handleRowClick}
                                        onClick={handleRowClick}>
                                        <td>{c.Code}</td>
                                        <td>{c.Description}</td>
                                    </tr>
                                )
                            })
                            }
                        </tbody>
                    </table>
                </div>
            }

        </div>
    )
}