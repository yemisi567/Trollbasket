import { ADD_DATA } from "./constants";

const initialState = {
    products: []
};

export default function productReducer (state = initialState, action) {
    switch(action.type){
        case ADD_DATA : {
           return {
               ...state,
                products: action.payload
           }
        }
        default: {
            return state;
        }
    }
}

