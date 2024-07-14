import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { errorMessageFor } from "../data";
import { enqueueSnackbar } from "notistack";
import configuration from "../configuration";


const {baseUrl}  = configuration
export const approvalRequestsServiceApi = createApi({
    reducerPath: 'approvalRequestsApi',
    baseQuery: fetchBaseQuery({
        baseUrl,
        prepareHeaders: (headers) => {
            const email = localStorage.getItem('email')
           if(email) headers.set('authorization', `Bearer ${email}`)

            return headers;
        },
    }),

    tagTypes: ['ApprovalRequests'],
    endpoints: (builder) => ({
        requestsToApprove: builder.query<ApprovalRequestsApi[], void>({
            query: () => 'approval-requests/requests-to-approve',
            providesTags: ['ApprovalRequests'],
            transformErrorResponse,
        }),
        approve: builder.mutation<void, { Entry_No: number }>({
            query: ({ Entry_No }) => ({
                url: `approval-requests/${Entry_No}/approve`,
                method: 'post'
            }),
            transformErrorResponse,
            transformResponse: response => transformResponseWithSnackbar(response, 'Successfully approved'),
            invalidatesTags: ['ApprovalRequests']
        }),
        reject: builder.mutation<void, { Entry_No: number, comment: string }>({
            query: (args) => ({
                url: `approval-requests/${args.Entry_No}/reject`,
                method: 'post',
                body: args
            }),
            transformErrorResponse,
            transformResponse: response => transformResponseWithSnackbar(response, 'Successfully rejected'),
            invalidatesTags: ['ApprovalRequests']
        }),
    })
});


function transformErrorResponse(response: any) {
    enqueueSnackbar(errorMessageFor(response), { variant: 'error' })
    return response
}

function transformResponseWithSnackbar(response: any, message: string) {
    enqueueSnackbar(message, { variant: 'success' })
    return response
}

export const {
    useRequestsToApproveQuery,
    useApproveMutation,
    useRejectMutation


} = approvalRequestsServiceApi;
