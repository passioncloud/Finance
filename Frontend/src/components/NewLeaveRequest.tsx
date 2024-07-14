/* eslint-disable @typescript-eslint/no-explicit-any */

import LeaveTypeCombobox from "./LeaveTypeCombobox";
import { Field, FieldGroup, Fieldset, Label, Legend } from "./catalyst/fieldset";
import { Text } from "./catalyst/text";
import { Input } from "./catalyst/input";
import { Select } from "./catalyst/select";
import { Button } from "./catalyst/button";
import DateField from "./DateField";
import { useEffect, useState } from "react";
import { differenceInBusinessDays, formatDate, isBefore } from "date-fns";
import { XCircleIcon } from '@heroicons/react/20/solid'
import dataService from '../data'


export default function NewLeaveRequest() {
    const [leaveTypes, setLeaveTypes] = useState<LeaveType[]>([])

    const [form, setForm] = useState({
        LeaveType: '',
        StartDate: new Date(),
        EndDate: new Date(),
        Days: 0
    })
    const [errorMessage, setErrorMessage] = useState('')
    const [isSaving, setIsSaving] = useState(false)


    useEffect(() => {
        dataService.getLeaveTypes().then(setLeaveTypes).catch((e: any) => {
             setErrorMessage(e.message)
        })
    }, [])


    const onFormChange = (e: any) => {
        const { name, value } = e.target;
        console.log(name, value)
        const newForm = { ...form, [name]: value }
        try {
            setErrorMessage([])
            const validator = new LeaveRequestValidator(newForm)
            setForm(validator.validate())
        }
        catch (e: any) {
            setErrorMessage(e.message)
        }
    }

    const save = async () => {
        try {
            setIsSaving(true)
            await dataService.createLeaveRequest(form)
        }

        catch (e: any) {
            setErrorMessage(e.message)
        }
        finally {
            setIsSaving(false)
        }
    }

    return (
        <div className="new-document">
            <form className="">
                <Fieldset disabled={isSaving}>
                    <Legend className="text-center mt-4">New Leave Request</Legend>
                    <Text className="text-center">Create a new leave request</Text>

                    <FlatAlert message={errorMessage} />

                    <FieldGroup>
                        <Field>
                            <Label>Leave Type</Label>
                            <Select name="LeaveType" value={form.LeaveType} onChange={onFormChange}>
                                <option></option>
                                {leaveTypes.map(leaveType => (
                                    <option
                                        key={leaveType.Code}
                                        value={leaveType.Code}>
                                        {leaveType.Description}
                                    </option>
                                ))}
                            </Select>
                        </Field>
                        <Field>
                            <Label>Start Date</Label>
                            <DateField
                                name="StartDate"
                                value={form.StartDate}
                                onBlur={onFormChange}
                                disabled={isSaving} />
                        </Field>
                        <Field>
                            <Label>End Date</Label>
                            <DateField name="EndDate"
                                value={form.EndDate}
                                onBlur={onFormChange}
                                disabled={isSaving}
                            />
                        </Field>
                        <Field>
                            <Label>Days</Label>
                            <Input value={form.Days} disabled />
                        </Field>
                    </FieldGroup>
                </Fieldset>

                <Button className='mt-4 w-full' onClick={save} role='submit' disabled={isSaving}>
                    {isSaving &&
                        <span className="flex">
                            <span
                                className="inline-block h-6 w-6 mr-2 animate-spin rounded-full border-4 border-solid border-current border-e-transparent align-[-0.125em] text-primary motion-reduce:animate-[spin_1.5s_linear_infinite]"
                                role="status">
                            </span>
                            Saving ...
                        </span>
                    }
                    {!isSaving &&
                        <span>Save</span>
                    }
                </Button>

            </form>
        </div >
    )
}




export function FlatAlert({ message }: { message: string }) {
    if (message.length == 0) return null;
    return (
        <div className="rounded-md bg-red-50 p-4">
            <div className="flex">
                <div className="flex-shrink-0">
                    <XCircleIcon className="h-5 w-5 text-red-400" aria-hidden="true" />
                </div>
                <div className="ml-3">
                    <h3 className="text-sm font-medium text-red-800">{message}</h3>
                </div>
            </div>
        </div>
    )
}





interface LeaveRequestForm {
    LeaveType: string,
    StartDate: Date,
    EndDate: Date,
    Days: number
}
class LeaveRequestValidator {
    form: LeaveRequestForm = {
        LeaveType: '',
        StartDate: new Date(),
        EndDate: new Date(),
        Days: 0
    }
    constructor(newForm: LeaveRequestForm) {
        this.form = newForm
    }


    validate(): LeaveRequestForm {
        if (this.form.LeaveType == '') {
            throw Error('Leave Type can not be blank')
        }
        const startDate = new Date(this.form.StartDate)
        const endDate = new Date(this.form.EndDate)
        startDate.setUTCHours(0, 0, 0, 0)
        endDate.setUTCHours(0, 0, 0, 0)

        if (startDate.getFullYear() > 2000 && endDate.getFullYear() > 2000) {
            if (isBefore(endDate, startDate)) {
                throw Error(`End Date ${formatDate(endDate, 'yyyy-MM-dd')} can not be earlier than Start Date ${formatDate(startDate, 'yyyy-MM-dd')}`)
            }

            const days = 1 + differenceInBusinessDays(endDate, startDate)
            this.form.Days = days
            this.form.StartDate = startDate
            this.form.EndDate = endDate
        }

        return this.form
    }

}