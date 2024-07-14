import { ArrowRightIcon, AtSymbolIcon, KeyIcon } from "@heroicons/react/24/outline";
import { Button } from "./catalyst/button"

import { ChangeEvent, FormEvent, useState } from "react";
import { enqueueSnackbar } from "notistack";



export default function LoginPage() {
    const [isSubmitting, setIsSubmitting] = useState(false)
    const [form, setForm] = useState({
        email: '',
        password: ''
    })

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        })
    }

    async function handleSubmit(e: FormEvent) {
        e.preventDefault()
        setIsSubmitting(true)
        console.log('values', form)
        try {
            localStorage.setItem('email', form.email)
            enqueueSnackbar('Successfully logged in', { variant: 'success' })
            window.location.href = '/'
            // console.log({ userCredential })
        }
        catch (e: any) {
            let errorMessage = 'Invalid credentials';
            enqueueSnackbar(errorMessage, { variant: 'error' })
            // console.log('error is', e.message)
        }
        finally {
            setIsSubmitting(false)
        }
    }

    return (
        <div>
            <main className="flex items-center justify-center md:h-screen">
                <div className="relative mx-auto flex w-full max-w-[400px] flex-col space-y-2.5 p-4 md:-mt-32">

                    <form className="space-y-3">
                        <div className="flex-1 rounded-lg bg-gray-50 px-6 pb-4 pt-8">
                            <div className="w-full h-20 mb-4">
                                <img src="/logo.png" className="h-20" />
                            </div>
                            <h1 className={` mb-3 text-2xl`}>
                                Please log in to continue.
                            </h1>
                            <div className="w-full">
                                <div>
                                    <label
                                        className="mb-3 mt-5 block text-xs font-medium text-gray-900"
                                        htmlFor="email"
                                    >
                                        Email
                                    </label>
                                    <div className="relative">
                                        <input
                                            className="peer block w-full rounded-md border border-gray-200 py-[9px] pl-10 text-sm outline-2 placeholder:text-gray-500"
                                            id="email"
                                            type="email"
                                            placeholder="Enter your email address"
                                            required
                                            name="email"
                                            onChange={handleChange}
                                        />
                                        <AtSymbolIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900" />
                                    </div>
                                </div>
                                <div className="mt-4">
                                    <label
                                        className="mb-3 mt-5 block text-xs font-medium text-gray-900"
                                        htmlFor="password"
                                    >
                                        Password
                                    </label>
                                    <div className="relative">
                                        <input
                                            className="peer block w-full rounded-md border border-gray-200 py-[9px] pl-10 text-sm outline-2 placeholder:text-gray-500"
                                            id="password"
                                            type="password"
                                            placeholder="Enter password"
                                            required
                                            minLength={6}
                                            name="password"
                                            onChange={handleChange}
                                        />
                                        <KeyIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900" />
                                    </div>
                                </div>
                            </div>

                            <Button
                                className="mt-4 w-full bg-gray-200"
                                color="emerald"
                                type="submit"
                                onClick={handleSubmit}
                                disabled={isSubmitting}
                            >
                                {isSubmitting && 'Logging in'}
                                {!isSubmitting && 'Log in'}
                                <ArrowRightIcon className="ml-auto h-5 w-5 text-gray-50" />
                            </Button>
                            <div className="flex h-8 items-end space-x-1" aria-live='polite' aria-atomic='true'>
                                {/* {errorMessage && (
                            <>
                                <ExclamationCircleIcon className='h-5 w-5 text-red-500' />
                                <p className='text-sm text-red-500'>{errorMessage}</p>
                            </>
                        )} */}
                            </div>
                        </div>
                    </form>
                </div>
            </main>
        </div>
    )
}

function LoginButton() {
    return (
        <Button className="mt-4 w-full bg-gray-200" aria-disabled='false' color="emerald">
            Log in <ArrowRightIcon className="ml-auto h-5 w-5 text-gray-50" />
        </Button>
    );
}