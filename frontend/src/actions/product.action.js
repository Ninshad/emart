import axios from "../helpers/axios";
import { deleteProductConstants, getProductsConstants, productConstants } from "./constants"

export const addProduct = (form) => {
    return async (dispatch) => {
        dispatch({ type: productConstants.PRODUCT_REQUEST });
        const res = await axios.post('/product/create', form);
        console.log(res);
    }
}

export const getProducts = () => {
    return async (dispatch) => {
        dispatch({ type: getProductsConstants.GET_PRODUCT_REQUEST });
        const res = await axios.get('/product/getproducts');

        console.log(res);
        if (res.status === 200) {
            const { products } = res.data
            dispatch({
                type: getProductsConstants.GET_PRODUCT_SUCCESS,
                payload: { products }
            });

        }
    }
}

export const deleteProduct = (ids) => {
    console.log(ids);
    return async (dispatch) => {
        // dispatch({type:deleteProductConstants.DELETE_PRODUCT_REQUEST});
        const res = await axios.post('/product/deleteproduct', {
            payload: {
                ids
            }
        });
        console.log(res);


    }
}

export const updateProduct = (newData) => {
    console.log(newData);
    return async (dispatch) => {
        // dispatch({type:deleteProductConstants.DELETE_PRODUCT_REQUEST});
        const res = await axios.post('/product/updateproduct', newData);
        console.log(res);


    }
}