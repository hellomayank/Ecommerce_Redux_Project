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