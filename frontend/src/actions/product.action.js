import axios from "../helpers/axios";
import { productConstants } from "./constants"

export const addProduct = (form) => {
    console.log(form);
    return async (dispatch) => {
        dispatch({ type: productConstants.PRODUCT_REQUEST});
        const res = await axios.post('/product/create',form);
        console.log(res);
    }
}