import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const api = createApi({
    tagTypes: ['ingredients'],
    reducerPath: 'api',
    baseQuery: fetchBaseQuery({
        baseUrl: 'http://localhost:3010/'
    }),
    endpoints: (build) => ({
    })
})

export const { } = api