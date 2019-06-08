import {combineReducers} from "redux"
import home from "./home"
import detail from "./detail"
import app from "./app"
import entities from "./entities"
import login from "./login"

//合并状态
const rootReducer = combineReducers({
  home,
  detail,
  app,
  entities,
  login,
})
export default rootReducer