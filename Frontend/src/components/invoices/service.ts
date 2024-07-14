import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { errorMessageFor } from "../../data";
import { enqueueSnackbar } from "notistack";
import configuration from "../../configuration";
import keycloakService from "../../keycloak-service";



const { baseUrl } = configuration
export const invoiceServiceApi = createApi({
    reducerPath: 'Invoice',
    baseQuery: fetchBaseQuery({
        baseUrl,
        prepareHeaders: (headers) => {
            const token = keycloakService.getToken()
            headers.set('authorization', `Bearer ${token}`)

            return headers;
        },
    }),

    tagTypes: ['Invoices'],
    endpoints: (builder) => ({
        invoices: builder.query<Invoice[], void>({
            query: () => 'invoices',
            providesTags: ['Invoices'],
            transformErrorResponse,
        }),
        invoiceById: builder.query<Invoice, { id: string }>({
            query: (args) => `invoices/${args.id}`,
            providesTags: ['Invoices'],
            transformErrorResponse,
        }),
        createInvoice: builder.mutation<Invoice, Invoice>({
            query: (args) => ({
                url: `invoices`,
                method: 'POST',
                providesTags: ['Invoices'],
                body: args
            }),
            transformErrorResponse,
            invalidatesTags: ['Invoices'],

        }),

        updateInvoice: builder.mutation<Invoice, Invoice>({
            query: args => ({
                url: `invoices/${args.id}`,
                method: 'PATCH',
                body: args
            }),
            transformResponse: (response) => transformResponseWithSnackbar(response, 'Saved successfully'),
            transformErrorResponse,
            invalidatesTags: ['Invoices']
        }),
        deleteInvoice: builder.mutation<void, { id: string }>({
            query: ({ id }) => ({
                url: `invoices/${id}`,
                method: 'delete',
            }),
            invalidatesTags: ['Invoices'],
            transformErrorResponse,
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
    useInvoicesQuery,
    useInvoiceByIdQuery,
    useUpdateInvoiceMutation,
    useCreateInvoiceMutation,
    useDeleteInvoiceMutation,

} = invoiceServiceApi;
