interface WorkSheetColumnDefinition {
    label: string,
    name: string,
    type: string,
    readOnly?: boolean,
    options?: WorkSheetColumnDefinitionOption[]
}

interface WorkSheetColumnDefinitionOption { 
    value: string,
    description: string 
}


interface WorkSheetColumnData {
    name: string,
    value: any
}

type WorkSheetRow = WorkSheetColumnData[]


interface WorkSheetData {
    columnDefinitions: WorkSheetColumnDefinition[],
    rows: WorkSheetRow[],
}