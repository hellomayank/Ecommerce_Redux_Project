import { ActionTypes } from "../constants/action-types"
export const setProducts = (products) => {
    return {
        type: ActionTypes.SET_PRODUCTS,
        payload: products,
    };
};
/* export const selectedProduct = (product) => {
    return {
        type: ActionTypes.ADD_TO_CART,
        payload: product,
    };
}; */



