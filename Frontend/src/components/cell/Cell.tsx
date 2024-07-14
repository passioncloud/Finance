import React, { useEffect, useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import formatDistance from 'date-fns/formatDistance';
import { getCellId, getDateString } from './helpers';
import { NumberCell } from './cell/number-cell';


export function Cell({ line, property, handleBlur, readOnly }) {
    let className = ''
    if (property?.hideOnSmall) {
        const width = window.innerWidth || document.documentElement.clientWidth ||
            document.body.clientWidth;
        if (width < 640) return null;
    }
    // Describes how to handle various cell data types 
    function renderCell() {
        // Special case for timeago
        // Whether its readOnly or not, we render it as is
        if (property.type === 'timeago') {
            return (
                <TimeAgoCell
                    property={property}
                    line={line}
                />
            )
        }
        if (readOnly) {
            return (
                <TextCell
                    property={property}
                    line={line}
                    handleBlur={handleBlur}
                    readOnly={true}
                    className={className}
                />
            )
        }

        switch (property.type) {
            case 'option': {
                return (
                    <OptionCell
                        property={property}
                        line={line}
                        handleBlur={handleBlur}
                        readOnly={readOnly}
                        className={className}
                    />
                )
            }
            case 'number': {
                return (
                    <NumberCell
                        property={property}
                        line={line}
                        handleBlur={handleBlur}
                        readOnly={readOnly}
                    />
                )
            }
            case 'boolean': {
                return (
                    <BooleanCell
                        property={property}
                        line={line}
                        handleBlur={handleBlur}
                        readOnly={readOnly}
                    />
                )
            }
            case 'timeago': {
                return (
                    <TimeAgoCell
                        property={property}
                        line={line}
                    />
                )
            }
            case 'list': {
                return (
                    <ListCell
                        property={property}
                        line={line}
                        handleBlur={handleBlur}
                        readOnly={readOnly}
                    />
                )
            }
            case 'text': {
                return (
                    <TextCell
                        property={property}
                        line={line}
                        handleBlur={handleBlur}
                        readOnly={readOnly}
                    />
                )
            }
            case 'date': {
                return (
                    <DateCell
                        property={property}
                        line={line}
                        handleBlur={handleBlur}
                        readOnly={readOnly}
                    />
                )
            }
            default: {
                return (
                    <TextCell
                        property={property}
                        line={line}
                        handleBlur={handleBlur}
                        readOnly={readOnly}
                    />
                )
            }
        }
    }

    // this is primary for the skeleton table 
    // when the table is being displayed for the first time and there is no data yet
    function renderBlankReadOnlyCell() {
        return (
            <td>
                <div>
                    <TextCell
                        property={property}
                        line={line}
                        handleBlur={() => { }}
                        readOnly={true}
                    />
                </div>
            </td>
        )
    }

    if (line[property.name] === undefined) {
        return renderBlankReadOnlyCell()
    }


    return (
        <td>
            <div>
                {renderCell()}
            </div>
        </td>
    )
}




function DateCell({ line, handleBlur, property, readOnly }) {
    const date = new Date(line[property.name]);
    const [dateValue, setDateValue] = useState(date);

    useEffect(() => {
        setDateValue(new Date(line[property.name]))
    }, [line])


    function handleDateChange(date) {
        if (date) {
            let event = {
                target: {
                    name: property.name,
                    value: getDateString(date)
                }
            };
            handleBlur(event);
        } else {
            console.error('Invalid Date:', date);
        }
    }

    return (
        <DatePicker
            selected={dateValue}
            onChange={handleDateChange}
            readOnly={readOnly || !property.editable}
            // Use iso-date format to keep
            // in line with NAV's date format
            // as its shown for readOnly lines
            dateFormat="yyyy-MM-dd"
        />
    );
}


function TextCell({ line, handleBlur, property, readOnly, className }) {
    const [value, setValue] = useState(line[property.name])
    useEffect(() => {
        setValue(line[property.name])
    }, [line])
    const handleChange = e => {
        setValue(e.target.value)
    }

    return (
        <input
            name={property.name}
            type="text"
            className={`ts_line_cell_input ${className}`}
            value={value}
            onChange={handleChange}
            onBlur={handleBlur}
            // disabled={!property.editable}
            readOnly={readOnly || !property.editable}
        />
    );
}

// A list cell. Uses a datalist to display options
function ListCell({ handleBlur, property, line, readOnly }) {
    // The list items are defined on the property
    const list = property.list
    const value = line[property.name]
    const [currentValue, setCurrentValue] = useState(value)

    useEffect(() => {
        setCurrentValue(line[property.name])
    }, [line])

    function handleChange(event) {
        setCurrentValue(event.target.value)
    }

    const cellId = getCellId(line, property)

    return (
        <React.Fragment>
            <input
                name={property.name}
                list={cellId}
                value={currentValue}
                onBlur={handleBlur}
                onChange={handleChange}
                readOnly={readOnly}
            />
            <datalist
                id={cellId}
            >
                {renderOptions()}
            </datalist>
        </React.Fragment>
    );

    function renderOptions() {
        return list.map(function (d) {
            return (
                <option
                    value={d.value}
                    key={d.value}
                >
                    {d.label}
                </option>
            );
        })
    }
}



function OptionCell({ line, handleBlur, property, readOnly, className }) {
    const options = property.options
    const [selectValue, setSelectValue] = useState(line[property.name]);

    useEffect(() => {
        setSelectValue(line[property.name])
    }, [line])

    if (readOnly || !property.editable) {
        return (
            <TextCell
                line={line}
                handleBlur={handleBlur}
                property={property}
                readOnly={readOnly}
                className={className}
            />
        )
    }

    function handleChange(event) {
        setSelectValue(event.target.value)
        handleBlur(event)
    }

    function renderOptions() {
        return options.map(function (o) {
            return (
                <option
                    value={o}
                    key={o}
                >
                    {o}
                </option>
            );
        })
    }

    return (
        <select
            name={property.name}
            id={property.name}
            value={selectValue}
            onChange={handleChange}
            readOnly={readOnly}
            className={className}
        >
            {renderOptions()}

        </select>
    );
}

function BooleanCell({ line, handleBlur, property, readOnly }) {
    const [value, setValue] = useState(line[property.name])
    useEffect(() => {
        setValue(line[property.name])
    }, [line])

    const handleChange = e => {
        setValue(e.target.value)
        handleBlur(e)
    }
    return (
        <input
            name={property.name}
            onChange={handleChange}
            type="checkbox"
            checked={value}
            // disabled={!property.editable}
            readOnly={readOnly}
        />
    );
}

function TimeAgoCell({ line, property }) {
    function getDistance() {
        const lineDate = new Date(line[property.name])
        const baseDate = Date.now()
        const distance = formatDistance(
            lineDate,
            baseDate,
            { includeSeconds: true, addSuffix: true }
        )
        return distance
    }

    const [value, setValue] = useState(getDistance())
    useEffect(() => {
        setValue(getDistance())
    }, [line])

    let classNames = ''
    if (property?.hideOnSmall) {
        classNames += ' hide-on-small '
    }
    return (
        <input
            name={property.name}
            type="text"
            className={`ts_line_cell_input ${classNames}`}
            value={value}
            readOnly={true}
        />
    );
}


function DateCellOld({ line, handleBlur, property, readOnly }) {
    const [value, setValue] = useState(line[property.name])
    useEffect(() => {
        setValue(line[property.name])
        const date = new Date(line[property.name])
        setValue(date.toDateString())
    }, [line])
    const handleChange = e => {
        setValue(e.target.value)
    }

    return (
        <input
            name={property.name}
            type="text"
            className="ts_line_cell_input"
            value={value}
            onChange={handleChange}
            onBlur={handleBlur}
            readOnly={readOnly || !property.editable}
        />
    );
}

