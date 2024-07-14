import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { errorMessageFor } from "../data";
import { enqueueSnackbar } from "notistack";
import configuration from "../configuration";
import keycloakService from "../keycloak-service";



const { baseUrl } = configuration
export const usersServiceApi = createApi({
    reducerPath: 'users',
    baseQuery: fetchBaseQuery({
        baseUrl,
        prepareHeaders: (headers) => {
            const token = keycloakService.getToken()
            headers.set('authorization', `Bearer ${token}`)

            return headers;
        },
    }),

    tagTypes: ['Users'],
    endpoints: (builder) => ({
        users: builder.query<User[], void>({
            query: () => 'users',
            providesTags: ['Users'],
            transformErrorResponse,
        }),
        userByUsername: builder.query<User, { username: string }>({
            query: (args) => `users/${args.username}`,
            providesTags: ['Users'],
            transformErrorResponse,
        }),
        createUser: builder.mutation<User, void>({
            query: () => ({
                url: `users`,
                method: 'POST',
            }),
            transformErrorResponse,
            invalidatesTags: ['Users'],

        }),

        updateUser: builder.mutation<User, User>({
            query: args => ({
                url: `users/${args.username}`,
                method: 'PATCH',
                body: args
            }),
            transformResponse: (response) => transformResponseWithSnackbar(response, 'Saved successfully'),
            transformErrorResponse,
            invalidatesTags: ['Users']
        }),
        deleteUser: builder.mutation<void, { No: string }>({
            query: ({ No }) => ({
                url: `users/${No}`,
                method: 'delete',
            }),
            invalidatesTags: ['Users'],
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
    useUsersQuery,
    useUserByUsernameQuery,
    useUpdateUserMutation,
    useCreateUserMutation,
    useDeleteUserMutation,

} = usersServiceApi;
