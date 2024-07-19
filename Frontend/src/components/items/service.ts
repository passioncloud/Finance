import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { errorMessageFor } from "../../data";
import { enqueueSnackbar } from "notistack";
import configuration from "../../configuration";
import keycloakService from "../../keycloak-service";



const { baseUrl } = configuration
export const itemServiceApi = createApi({
    reducerPath: 'Item',
    baseQuery: fetchBaseQuery({
        baseUrl,
        prepareHeaders: (headers) => {
            const token = keycloakService.getToken()
            headers.set('authorization', `Bearer ${token}`)

            return headers;
        },
    }),

    tagTypes: ['Items'],
    endpoints: (builder) => ({
        items: builder.query<Item[], string>({
            query: (search) => `Item?search=${search}`,
            providesTags: ['Items'],
            transformErrorResponse,
        }),
        itemById: builder.query<Item, { Id: string }>({
            query: (args) => `Item/${args.Id}`,
            providesTags: ['Items'],
            transformErrorResponse,
        }),
        createItem: builder.mutation<Item, Item>({
            query: (args) => ({
                url: `Item`,
                method: 'POST',
                providesTags: ['Items'],
                body: args
            }),
            transformErrorResponse,
            invalidatesTags: ['Items'],

        }),

        updateItem: builder.mutation<Item, Item>({
            query: args => ({
                url: `Item/${args.Id}`,
                method: 'PATCH',
                body: args
            }),
            transformResponse: (response) => transformResponseWithSnackbar(response, 'Saved successfully'),
            transformErrorResponse,
            invalidatesTags: ['Items']
        }),
        deleteItem: builder.mutation<void, { Id: string }>({
            query: ({ Id }) => ({
                url: `Item/${Id}`,
                method: 'delete',
            }),
            invalidatesTags: ['Items'],
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
    useItemsQuery,
    useItemByIdQuery,
    useUpdateItemMutation,
    useCreateItemMutation,
    useDeleteItemMutation,

} = itemServiceApi;
