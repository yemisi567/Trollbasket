import {combineReducers } from 'redux';
import productReducer from './products';


export default function rootReducer () {
   return combineReducers({
       products: productReducer,
       test: []
   })
}