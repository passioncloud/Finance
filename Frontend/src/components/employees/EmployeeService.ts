import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { errorMessageFor } from "../../data";
import { enqueueSnackbar } from "notistack";
import configuration from "../../configuration";
import keycloakService from "../../keycloak-service";



const { baseUrl } = configuration
export const employeeServiceApi = createApi({
    reducerPath: 'Employee',
    baseQuery: fetchBaseQuery({
        baseUrl,
        prepareHeaders: (headers) => {
            const token = keycloakService.getToken()
            headers.set('authorization', `Bearer ${token}`)

            return headers;
        },
    }),

    tagTypes: ['Employees'],
    endpoints: (builder) => ({
        employees: builder.query<Employee[], void>({
            query: () => 'Employee',
            providesTags: ['Employees'],
            transformErrorResponse,
        }),
        employeeById: builder.query<Employee, { id: string }>({
            query: (args) => `Employee/${args.id}`,
            providesTags: ['Employees'],
            transformErrorResponse,
        }),
        createEmployee: builder.mutation<Employee, Employee>({
            query: (args) => ({
                url: `Employee`,
                method: 'POST',
                providesTags: ['Employees'],
                body: args
            }),
            transformErrorResponse,
            invalidatesTags: ['Employees'],

        }),

        updateEmployee: builder.mutation<Employee, Employee>({
            query: args => ({
                url: `Employee/${args.No}`,
                method: 'PATCH',
                body: args
            }),
            transformResponse: (response) => transformResponseWithSnackbar(response, 'Saved successfully'),
            transformErrorResponse,
            invalidatesTags: ['Employees']
        }),
        deleteEmployee: builder.mutation<void, { id: string }>({
            query: ({ id }) => ({
                url: `Employee/${id}`,
                method: 'delete',
            }),
            invalidatesTags: ['Employees'],
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
    useEmployeesQuery,
    useEmployeeByIdQuery,
    useUpdateEmployeeMutation,
    useCreateEmployeeMutation,
    useDeleteEmployeeMutation,

} = employeeServiceApi;
