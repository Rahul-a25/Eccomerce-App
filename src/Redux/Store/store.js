import { legacy_createStore ,applyMiddleware} from "redux";
import logger from "redux-logger";
import MyReducer from "../Reducer/myreducer";
const MyReduxStore=legacy_createStore(MyReducer,applyMiddleware(logger))
export default MyReduxStore