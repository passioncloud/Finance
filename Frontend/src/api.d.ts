

interface User {
    username: string,
    email: string,
    hashedPassword: string,
    fullname: string
}

type EmployeeStatus = 'Active'|'Terminated'
interface Employee {
    No: string,
    FirstName: string,
    LastName: string,
    Status: EmployeeStatus,
    Email: string,
}


interface Customer {
    Id: number,
    Name: string,
    PhoneNo: string,
    Address: string,
    Email: string ,
    TIN: string,
    CreatedAt?: string,
    UpdatedAt?: string 
}


interface Item {
    Id: number,
    Name: string,
    Cost: number,
    Price: number,
    CreatedAt?: string,
    UpdatedAt?: string 
}

interface Invoice {
    id: string,
    customerId: string,
    customerName: string,
    invoiceDate: string,
    description: string,
    externalDocumentNo: string,
    currency: string,
    createdAt?: string,
    updatedAt?: string 
}


interface LeaveEntitlement {
    No: number,
    LeaveTypeNo: string,
    LeaveTypeNo: string,
    EmployeeNo: string,
    EmployeeNo: string,
    EmployeeName: string,
    Blocked: boolean,
    EntitledDays: number,
    EntitledHours: number,
    CreatedAt: number,
    UpdatedAt: number,
}


interface NewLeaveEntitlement {
    id: string,
    leaveTypeId: string,
    leaveTypeNo: string,
    employeeId: string,
    employeeNo: string,
    employeeName: string,
    entitledDays: number,
    entitledHours: number,
}

interface Permission {
    name: string,
    description: string
}

interface PublicHoliday {
    
        "Id": number,
        "Year": number,
        "Day": string,
        "Description": string
      
}



type ApprovalEntryStatus = 'Created' | 'Open' | 'Approved' | 'Rejected'
type ApprovalRequestStatus = 'Created' | 'Pending Approval' | 'Approved' | 'Rejected'


interface PurchaseRequisitionDocument {
    requisition: PurchaseRequisitionsApi,
    requisitionLines: PurchaseRequisitionLinesApi[],
    locations: LocationsApi[],
    currencies: CurrenciesApi[],
    projects: ProjectsApi[],
    glAccounts: GLAccountsApi[],
    procurementMethods: ProcurementMethodsApi[],
    attachments: AttachmentsApi[],
    approvalEntries: ApprovalEntriesApi[],
    comments: CommentsApi[]
}

interface PurchaseRequisitionsApi extends NavOdataPageRecord {
    "No": string,
    "Document_Type": "Purchase Requisition",
    "Request_By_No": string,
    "Request_By_Name": string,
    "Requester_ID": string,
    "Currency_Code": string,
    "Shortcut_Dimension_1_Code": string,
    "Shortcut_Dimension_2_Code": string,
    "Status": string,
    "Location_Code": string,
    "Description": string,
    "ProjectCode": string,
    "Process_Type": string,
    "RequestDate": string,
    Requested_By_Email: string;
    Amount: number;
}

interface PurchaseRequisitionLinesApi extends NavOdataPageRecord {
    "Document_No": string,
    "Line_No": number,
    "Document_Type": string,
    "No": string,
    "Type": string,
    "Location_Code": string,
    "Description": string,
    "Quantity": number,
    Direct_Unit_Cost: number;
    "Line_Amount": number
}


interface AttachmentsApi extends NavOdataPageRecord {
    "ID": number,
    "No": string,
    "Attached_Date": string,
    "File_Name": string,
    "File_Type": string,
    "File_Extension": string,
    "User": string,
    FullFileName: string;
}

interface LocationsApi extends NavOdataPageRecord {
    Code: string;
    Name: string;
}

interface CurrenciesApi extends NavOdataPageRecord {
    Code: string;
    Description: string;
}

interface ProjectsApi extends NavOdataPageRecord {
    Code: string;
    Name: string;
}

interface GLAccountsApi extends NavOdataPageRecord {
    No: string;
    Name: string;
}

interface ProcurementMethodsApi extends NavOdataPageRecord {
    Code: string;
    Description: string;
    Process_Type: string;
}

interface EmployeesApi extends NavOdataPageRecord {
    "No": string,
    "FullName": string,
    "Company_E_Mail": string
}

interface UpdateRequisitionParams {
    "No": string,
    "Currency_Code": string,
    "Location_Code": string,
    "Description": string,
    "ProjectCode": string,
    "Process_Type": string
}



interface NavOdataPageRecord {
    "@odata.etag": string,
}


/// approval requests
interface ApprovalEntriesApi extends NavOdataPageRecord {
    "Entry_No": number,
    "Table_ID": number,
    "Document_Type": string, // eg 7 
    "Document_No": string,
    "Sequence_No": number,
    "Approval_Code": string,
    "Status": string // eg "Open",
    "Date_Time_Sent_for_Approval": string, // eg "2024-05-22T04:36:59.21Z",
    "Last_Date_Time_Modified": string // eg "2024-05-22T04:36:59.21Z",
    "Comment": boolean,
    "Amount": number,
    "Amount_LCY": number,
    "Currency_Code": string,
    "Sender_Employee_No": string,
    "Sender_Employee_Name": string,
    "Approver_Employee_No": string,
    "Approver_Employee_Name": string,
    Rejection_Comment: string,
}

type ApprovalRequestsApi = ApprovalEntriesApi;

interface DashboardApi extends NavOdataPageRecord {
    "No": string,
    "FullName": string,
    "OpenRequisitions": number,
    "RequestsToApprove": number,
    "TotalRequestedAmount": number,
    "TotalApprovedAmount": number
}

interface CommentsApi extends NavOdataPageRecord {
    "No": string,
    "Line_No": number,
    "Date": string,
    "Code": string,
    "Comment": string,
    "Document_Line_No": number,
    "Employee_No": string,
    "Employee_Name": string
}


