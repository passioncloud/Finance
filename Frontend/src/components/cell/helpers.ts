


// Get a string representation of a date to send to NAV
// The returned string is in ISO format and looks like this: "2021-09-08"
export function getDateString(date: Date) {
    const iso = date.toISOString()
    return iso.substring(0, iso.indexOf('T'))
}