import { combineReducers, createStore } from "redux";
import { oanTuTiReducer } from "./reducer/oanTuTiReducer";

const rootReducer = combineReducers ({
    oanTuTiReducer
   
});

export const store = createStore(rootReducer,  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());