import React, { ChangeEvent, ChangeEventHandler, useEffect, useState } from 'react';
import _ from 'lodash'
const numberFormat = Intl.NumberFormat('en', { maximumFractionDigits: 2 })

interface NumberCellProps {
    value: number,
    handleBlur: ChangeEventHandler<HTMLInputElement>,
    readOnly?: boolean,
    disabled?: boolean,
    name: string;
}


export function formatNumber(n?: number|string) {
    let num: number = 0;
    if(typeof n == 'string') {
        num = parseLocaleNumber(n)
    }
    if(n === undefined) {
        return ''
    } 
    if(typeof n == 'number') num = n;
    return numberFormat.format(num)
}
// number cell
export function NumberCell(props: NumberCellProps) {


    useEffect(() => {
        if (props.value) {
            setCellValue(formatNumber(props.value))
        }

    }, [props.value])


    const [cellValue, setCellValue] = useState(formatNumber(props.value))

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setCellValue(e.target.value)
    }

    function proxyHandleBlur(e: ChangeEvent<HTMLInputElement>) {
        const eventClone = _.cloneDeep(e)
        eventClone.target.value = parseLocaleNumber(e.target.value).toString()
        return props.handleBlur(eventClone)
    }

    return (
        <input
            name={props.name}
            value={cellValue}
            onChange={handleChange}
            onBlur={proxyHandleBlur}
            type="text"
            readOnly={props.readOnly}
            disabled={props.disabled}
        />
    );
}

function replaceNonNumeric(numStr: string | number) {
    numStr = String(numStr)
    // if (numStr.endsWith('.')) {
    //     numStr += '0'
    // }
    return String(numStr).replace(/[^-^.^0-9]/g, '') // accepts -24.13
}
function commarize(numStr: string | number) {
    numStr = replaceNonNumeric(numStr)
    if (numStr.endsWith('.')) {
        // Add an extra decimal place
        numStr = Number(numStr).toFixed(1).toLocaleString()
    }
    else {
        numStr = Number(numStr).toLocaleString()
    }
    // // replace 0 with a blank
    // if(numStr === '0') numStr = ''
    return numStr
}



/**
 * Parse a localized number to a float.
 * @param {string} stringNumber - the localized number
 * @param {string} locale - [optional] the locale that the number is represented in. Omit this parameter to use the current locale.
 */
function parseLocaleNumber(stringNumber: string, locale: string = 'en') {
    var thousandSeparator = Intl.NumberFormat(locale).format(11111).replace(/\p{Number}/gu, '');
    var decimalSeparator = Intl.NumberFormat(locale).format(1.1).replace(/\p{Number}/gu, '');

    return parseFloat(stringNumber
        .replace(new RegExp('\\' + thousandSeparator, 'g'), '')
        .replace(new RegExp('\\' + decimalSeparator), '.')
    );
}