import { api } from "../../app/api";
import ENDPOINTS from "../../app/auth/endopoints";
import { Ingredient } from "../Ingredients/models/Ingredient";

export interface RequestOrders {
    ingredients: Ingredient[][],
    queue: number
}

interface AddOrderRequest {
    message: string,
    success: boolean
}

export const ordersApi = api.enhanceEndpoints({ addTagTypes: ['ingredients', 'orders'] }).injectEndpoints({
    endpoints: (build) => ({
        addOrder: build.mutation<AddOrderRequest, Ingredient[]>({
            query: (body) => ({
                url: ENDPOINTS.AUTH.ADDORDER,
                method: 'POST',
                body
            }),
            invalidatesTags: ['orders']
        }),
        getOrders: build.query<RequestOrders[], null>({
            query: () => ENDPOINTS.AUTH.ORDERS,
            providesTags: ['orders']
        })
    })
})

export const {
    useAddOrderMutation,
    useGetOrdersQuery
} = ordersApi