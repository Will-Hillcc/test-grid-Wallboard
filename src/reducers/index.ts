import { combineReducers } from "redux";
import {  Tile_MessageState } from "./tileReducer";
import tileReducer from "./tileReducer";

export type RootState = {
    tile_message: Tile_MessageState
    
};

const allReducers = combineReducers({
    tile_message: tileReducer
    
});

export default allReducers;