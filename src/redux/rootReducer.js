import searchReducer from "./reducers/searchReducer";
import {combineReducers} from "redux";

const rootReducer = combineReducers({
    searchReducer
});

export default rootReducer;