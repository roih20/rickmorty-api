import { combineReducers } from "redux";
import characterReducers from "./characterReducer";

const reducers = combineReducers({
    character: characterReducers
});

export default reducers;

export type State = ReturnType<typeof reducers>