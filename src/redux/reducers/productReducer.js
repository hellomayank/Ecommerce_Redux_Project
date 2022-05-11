import { ActionTypes } from "../constants/action-types"
import { initialState } from "../../API/data";

export const productReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case ActionTypes.SET_PRODUCTS:
            return { ...state, products: payload };


        default:
            return state;
    }
};
/* export const cartProducts = (state = [], { type, payload }) => {
    switch (type) {
        case ActionTypes.ADD_TO_CART:
            localStorage.setItem("CartItems", JSON.stringify([...state, payload]))
            return [...state, payload];
        default:
            return state;
    }
}; */
