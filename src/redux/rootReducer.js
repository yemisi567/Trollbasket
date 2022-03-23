import { combineReducers } from "redux";

import products from "./products/slice";
import cart from "./cart/slice";

export default combineReducers({
  products,
  cart,
});
