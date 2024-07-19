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
        items: builder.query<Item[], void>({
            query: () => 'items',
            providesTags: ['Items'],
            transformErrorResponse,
        }),
        itemById: builder.query<Item, { id: string }>({
            query: (args) => `items/${args.id}`,
            providesTags: ['Items'],
            transformErrorResponse,
        }),
        createItem: builder.mutation<Item, Item>({
            query: (args) => ({
                url: `items`,
                method: 'POST',
                providesTags: ['Items'],
                body: args
            }),
            transformErrorResponse,
            invalidatesTags: ['Items'],

        }),

        updateItem: builder.mutation<Item, Item>({
            query: args => ({
                url: `items/${args.Id}`,
                method: 'PATCH',
                body: args
            }),
            transformResponse: (response) => transformResponseWithSnackbar(response, 'Saved successfully'),
            transformErrorResponse,
            invalidatesTags: ['Items']
        }),
        deleteItem: builder.mutation<void, { id: string }>({
            query: ({ id }) => ({
                url: `items/${id}`,
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
