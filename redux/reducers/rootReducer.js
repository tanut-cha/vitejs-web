import { combineReducers } from "redux";
import { loaddingScreenReducer } from "./loadingScreenReducer";
import { currentUser } from "./userReducer";



export const rootReducer = combineReducers({
  loading_screen: loaddingScreenReducer,
  user:currentUser
});
