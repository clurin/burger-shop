import { api } from "../../app/api";
import ENDPOINTS from "../../app/auth/endopoints";
import { Ingredient } from "./models/Ingredient";

// const categoryOrder = ['bun', 'sauce', 'main']
// products.sort((a, b) => categoryOrder.indexOf(a.category) - categoryOrder.indexOf(b.category))


export const ingredientsApi = api.enhanceEndpoints({ addTagTypes: ['ingredients', 'orders'] }).injectEndpoints({
    endpoints: (build) => ({
        getIngredients: build.query<Ingredient[], null>({
            query: () => ENDPOINTS.AUTH.INGREDIENTS,
            providesTags: ['ingredients']
        })
    })
})

export const {
    useGetIngredientsQuery,
} = ingredientsApi