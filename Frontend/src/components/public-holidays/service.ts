import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { errorMessageFor } from "../../data";
import { enqueueSnackbar } from "notistack";
import configuration from "../../configuration";
import keycloakService from "../../keycloak-service";



const { baseUrl } = configuration
export const publicHolidayServiceApi = createApi({
    reducerPath: 'PublicHoliday',
    baseQuery: fetchBaseQuery({
        baseUrl,
        prepareHeaders: (headers) => {
            const token = keycloakService.getToken()
            headers.set('authorization', `Bearer ${token}`)

            return headers;
        },
    }),

    tagTypes: ['PublicHolidays'],
    endpoints: (builder) => ({
        publicHolidays: builder.query<PublicHoliday[], void>({
            query: () => 'PublicHoliday',
            providesTags: ['PublicHolidays'],
            transformErrorResponse,
        }),
        publicHolidayById: builder.query<PublicHoliday, { id: string }>({
            query: (args) => `PublicHoliday/${args.id}`,
            providesTags: ['PublicHolidays'],
            transformErrorResponse,
        }),
        createPublicHoliday: builder.mutation<PublicHoliday, PublicHoliday>({
            query: (args) => ({
                url: `PublicHoliday`,
                method: 'POST',
                providesTags: ['PublicHolidays'],
                body: args
            }),
            transformErrorResponse,
            invalidatesTags: ['PublicHolidays'],

        }),

        updatePublicHoliday: builder.mutation<PublicHoliday, PublicHoliday>({
            query: args => ({
                url: `PublicHoliday/${args.Id}`,
                method: 'PATCH',
                body: args
            }),
            transformResponse: (response) => transformResponseWithSnackbar(response, 'Saved successfully'),
            transformErrorResponse,
            invalidatesTags: ['PublicHolidays']
        }),
        deletePublicHoliday: builder.mutation<void, { id: string }>({
            query: ({ id }) => ({
                url: `PublicHoliday/${id}`,
                method: 'delete',
            }),
            invalidatesTags: ['PublicHolidays'],
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
    usePublicHolidaysQuery,
    usePublicHolidayByIdQuery,
    useUpdatePublicHolidayMutation,
    useCreatePublicHolidayMutation,
    useDeletePublicHolidayMutation,

} = publicHolidayServiceApi;
