import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { errorMessageFor } from "../data";
import { enqueueSnackbar } from "notistack";
import configuration from "../configuration";



const {baseUrl}  = configuration
export const dashboardServiceApi = createApi({
    reducerPath: 'dashboardApi',
    baseQuery: fetchBaseQuery({
        baseUrl,
        prepareHeaders: (headers) => {
            const email = localStorage.getItem('email')
           if(email) headers.set('authorization', `Bearer ${email}`)

            return headers;
        },
    }),

    tagTypes: ['Dashboard'],
    endpoints: (builder) => ({
        dashboard: builder.query<DashboardApi, void>({
            query: () => '/dashboard',
            providesTags: ['Dashboard'],
            transformErrorResponse,
        }),
        
    })
});


function transformErrorResponse(response: any) {
    enqueueSnackbar(errorMessageFor(response), { variant: 'error' })
    return errorMessageFor(response)
}

function transformResponseWithSnackbar(response: any, message: string) {
    enqueueSnackbar(message, { variant: 'success' })
    return response
}

export const {
    useDashboardQuery


} = dashboardServiceApi;
