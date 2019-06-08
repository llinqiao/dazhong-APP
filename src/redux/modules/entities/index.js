import {combineReducers} from "redux"
import comments from "./comments"
import orders from "./orders"
import shops from "./shops"
import products from "./products"

//合并状态领域
const rootReducer = combineReducers({
  comments,
  orders,
  shops,
  products,
})
export default rootReducer