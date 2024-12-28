import { createSelector, createSlice } from "@reduxjs/toolkit";
import { RootState } from "../../app/index";
import { RequestOrders } from "./ordersApi";



const initialState: RequestOrders = {
    ingredients: [],
    queue: 0
}

const orderSlice = createSlice({
    name: 'orderSlice',
    initialState: initialState,
    reducers: {
        setOrders: (state, action) => {
            if (Array.isArray(action.payload) && Array.isArray(action.payload[0])) {
                state.ingredients = action.payload
            } else {
                console.error("Неверный формат данных: ожидается массив массивов")
            }
        }

    }
})



export default orderSlice.reducer
const orderStore = (state: RootState) => state.orderSlice;
export const orderSelector = createSelector([orderStore], item => item.ingredients);
export const { setOrders } = orderSlice.actions