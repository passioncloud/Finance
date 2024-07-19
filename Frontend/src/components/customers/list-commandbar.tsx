import {
    CommandBar,
    ICommandBarItemProps,
    SearchBox
} from "@fluentui/react";
import { Field } from "@headlessui/react";
import { ChangeEvent, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { useDebouncedCallback } from 'use-debounce'



export default function CustomersCommandBar() {
    const navigate = useNavigate()
    const [searchParams, setSearchParams] = useSearchParams()
    const [search, setSearch] = useState(searchParams.get('search') ?? '')


    function handleNew() {
        navigate('new')
    }

    const searchChangeDebouncedHandler = useDebouncedCallback((term: string = '') => {
        const params = new URLSearchParams(searchParams)
        params.set('search', term)
        setSearchParams(params)
    }, 500)

    function handleSearchChange(e?: ChangeEvent<HTMLInputElement>) {
        if (!e) return;
        const v = e?.target?.value || ''
        setSearch(v)
        searchChangeDebouncedHandler(v)
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
        <div className="flex items-center">
            <Field>
                <SearchBox placeholder="Search"
                    value={search}
                    onChange={handleSearchChange}
                    onClear={handleSearchChange}
                />
            </Field>
            <CommandBar
                items={_items}
            />
        </div>
    );
};




