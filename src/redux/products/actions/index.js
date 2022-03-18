import { products } from "../../../data/productData";
import { ADD_DATA } from "../constants";

export const addData = () => {
    console.log('reducer')
    return {
            type: ADD_DATA,
            payload: products
    }
};

