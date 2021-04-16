import {combineReducers, createStore } from "redux";
import {profileReducer} from "./profileReducer";
import {dialogsReducer} from "./dialogsReducer";
import {usersReducer} from "./usersReducer";

const  reducers = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    usersPage: usersReducer
})

export type AppRootStateType = ReturnType<typeof reducers>

export const store = createStore(reducers)

// @ts-ignore
window.store = store


