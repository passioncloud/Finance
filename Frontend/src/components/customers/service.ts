import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { errorMessageFor } from "../../data";
import { enqueueSnackbar } from "notistack";
import configuration from "../../configuration";
import keycloakService from "../../keycloak-service";



const { baseUrl } = configuration
export const customerServiceApi = createApi({
    reducerPath: 'Customer',
    baseQuery: fetchBaseQuery({
        baseUrl,
        prepareHeaders: (headers) => {
            const token = keycloakService.getToken()
            headers.set('authorization', `Bearer ${token}`)

            return headers;
        },
    }),

    tagTypes: ['Customers'],
    endpoints: (builder) => ({
        customers: builder.query<Customer[], void>({
            query: () => 'Customer',
            providesTags: ['Customers'],
            transformErrorResponse,
        }),
        customerById: builder.query<Customer, { id: string }>({
            query: (args) => `Customer/${args.id}`,
            providesTags: ['Customers'],
            transformErrorResponse,
        }),
        createCustomer: builder.mutation<Customer, Customer>({
            query: (args) => ({
                url: `Customer`,
                method: 'POST',
                providesTags: ['Customers'],
                body: args
            }),
            transformErrorResponse,
            invalidatesTags: ['Customers'],

        }),

        updateCustomer: builder.mutation<Customer, Customer>({
            query: args => ({
                url: `Customer/${args.Id}`,
                method: 'PATCH',
                body: args
            }),
            transformResponse: (response) => transformResponseWithSnackbar(response, 'Saved successfully'),
            transformErrorResponse,
            invalidatesTags: ['Customers']
        }),
        deleteCustomer: builder.mutation<void, { id: string }>({
            query: ({ id }) => ({
                url: `Customer/${id}`,
                method: 'delete',
            }),
            invalidatesTags: ['Customers'],
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
    useCustomersQuery,
    useCustomerByIdQuery,
    useUpdateCustomerMutation,
    useCreateCustomerMutation,
    useDeleteCustomerMutation,

} = customerServiceApi;
