
import { SET_PRODUCT_LIST } from "./constant";
let data =[]
export const productData = (state=data, action) => {
    switch (action.type) {
        case SET_PRODUCT_LIST:
            // console.warn("set action", action);
            return [...action.data];
        default:
            return data;
    }
};