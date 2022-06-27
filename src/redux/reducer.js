
import { SET_PRODUCT_LIST } from "./constant";
let data =[]
export const productData = (state=data, action) => {
    switch (action.type) {
        case SET_PRODUCT_LIST:
            return [...action.data];
        default:
            return state;
    }
};