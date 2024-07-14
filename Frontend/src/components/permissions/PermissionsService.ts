import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { errorMessageFor } from "../../data";
import { enqueueSnackbar } from "notistack";
import configuration from "../../configuration";
import keycloakService from "../../keycloak-service";



const { baseUrl } = configuration
export const permissionsServiceApi = createApi({
    reducerPath: 'permissions',
    baseQuery: fetchBaseQuery({
        baseUrl,
        prepareHeaders: (headers) => {
            const token = keycloakService.getToken()
            headers.set('authorization', `Bearer ${token}`)

            return headers;
        },
    }),

    tagTypes: ['Permissions'],
    endpoints: (builder) => ({
        permissions: builder.query<Permission[], void>({
            query: () => 'permissions',
            providesTags: ['Permissions'],
            transformErrorResponse,
        }),
        permissionByName: builder.query<Permission, { name: string }>({
            query: (args) => `permissions/${args.name}`,
            providesTags: ['Permissions'],
            transformErrorResponse,
        }),
        createPermission: builder.mutation<Permission, Permission>({
            query: (args) => ({
                url: `permissions`,
                method: 'POST',
                body: args
            }),
            transformErrorResponse,
            transformResponse: (response) => transformResponseWithSnackbar(response, 'Permission created successfully'),
            invalidatesTags: ['Permissions'],
        }),

        updatePermission: builder.mutation<Permission, Permission>({
            query: args => ({
                url: `permissions/${args.name}`,
                method: 'PATCH',
                body: args
            }),
            transformResponse: (response) => transformResponseWithSnackbar(response, 'Saved successfully'),
            transformErrorResponse,
            invalidatesTags: ['Permissions']
        }),
        deletePermission: builder.mutation<void, Permission>({
            query: (args) => ({
                url: `permissions/${args.name}`,
                method: 'delete',
            }),
            invalidatesTags: ['Permissions'],
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
    usePermissionsQuery,
    usePermissionByNameQuery,
    useUpdatePermissionMutation,
    useCreatePermissionMutation,
    useDeletePermissionMutation,

} = permissionsServiceApi;
