import { api } from "../../app/api"
import ENDPOINTS from "../../app/auth/endopoints"
import { LogInRequest, LogInResponse } from "../../app/auth/types"

//* <ответ с сервера, отправляемые данные с фронтенда>
export const usersApi = api.enhanceEndpoints({ addTagTypes: ['users'] }).injectEndpoints({
    endpoints: (build) => ({
        logIn: build.mutation<LogInResponse, LogInRequest>({
            query: (body) => ({
                url: ENDPOINTS.AUTH.LOGIN,
                method: 'POST',
                body
            }),
            invalidatesTags: ['users']
        }),
        registrationUser: build.mutation<string, LogInRequest>({
            query: (body) => ({
                url: ENDPOINTS.AUTH.REGISTRATION,
                method: 'POST',
                body,
            }),
            invalidatesTags: ['users']
        }),
        resetPassword: build.mutation<string, LogInRequest>({
            query: (body) => ({
                url: ENDPOINTS.AUTH.RESETPASSWORD,
                method: 'POST',
                body,
            }),
            invalidatesTags: ['users']
        }),
    })
})

export const {
    useLogInMutation,
    useRegistrationUserMutation,
    useResetPasswordMutation,
} = usersApi