import clsx from "clsx";
import React, { useState } from "react";
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import './css/react-datepicker.scss'




const DateField = ({ name, value, onBlur, readOnly, disabled }: { name: string, value: string| Date, onBlur?: (e: any) => void, readOnly?: boolean, disabled?: boolean }) => {
    // const [startDate, setStartDate] = useState(new Date(value));
    const startDate = new Date(value)
    const handleBlur = async (e: any) => {
        if (e.target.value == value) return;
        if (onBlur) onBlur(e)
    }
    const handleOnChange = (dt: Date) => {
        if (dt.getTime() === startDate.getTime()) return;
        handleBlur({ target: { name, value: dt }})
    }
    return (
        <div className="w-full">
            <DatePicker
                name={name}
                selected={startDate}
                onChange={handleOnChange}
            //    onBlur={handleBlur} // does not call with correct date, sets date in bad form eg 07/15/2024
                readOnly={readOnly}
                disabled={disabled}
                className={clsx([
                    // Date classes
                    [
                        '[&::-webkit-datetime-edit-fields-wrapper]:p-0',
                        '[&::-webkit-date-and-time-value]:min-h-[1.5em]',
                        '[&::-webkit-datetime-edit]:inline-flex',
                        '[&::-webkit-datetime-edit]:p-0',
                        '[&::-webkit-datetime-edit-year-field]:p-0',
                        '[&::-webkit-datetime-edit-month-field]:p-0',
                        '[&::-webkit-datetime-edit-day-field]:p-0',
                        '[&::-webkit-datetime-edit-hour-field]:p-0',
                        '[&::-webkit-datetime-edit-minute-field]:p-0',
                        '[&::-webkit-datetime-edit-second-field]:p-0',
                        '[&::-webkit-datetime-edit-millisecond-field]:p-0',
                        '[&::-webkit-datetime-edit-meridiem-field]:p-0',
                    ],

                    // Basic layout
                    'relative block w-full appearance-none rounded-lg px-[calc(theme(spacing[3.5])-1px)] py-[calc(theme(spacing[2.5])-1px)] sm:px-[calc(theme(spacing[3])-1px)] sm:py-[calc(theme(spacing[1.5])-1px)]',

                    // Typography
                    'text-base/6 text-zinc-950 placeholder:text-zinc-500 sm:text-sm/6 dark:text-white',

                    // Border
                    'border border-zinc-950/10 data-[hover]:border-zinc-950/20 dark:border-white/10 dark:data-[hover]:border-white/20',

                    // Background color
                    'bg-transparent dark:bg-white/5',

                    // Hide default focus styles
                    'focus:outline-none',

                    // Invalid state
                    'data-[invalid]:border-red-500 data-[invalid]:data-[hover]:border-red-500 data-[invalid]:dark:border-red-500 data-[invalid]:data-[hover]:dark:border-red-500',

                    // Disabled state
                    'data-[disabled]:border-zinc-950/20 dark:data-[hover]:data-[disabled]:border-white/15 data-[disabled]:dark:border-white/15 data-[disabled]:dark:bg-white/[2.5%]',

                    'w-full'
                ])
                }
            />
        </div>
    );
};
export default DateField;