import {combineReducers, createStore } from "redux";
import {profileReducer} from "./profile-reducer";
import {dialogsReducer} from "./dialogs-reducer";
import {usersReducer} from "./users-reducer";
import {authReducer} from "./auth-reducer";

const  reducers = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    usersPage: usersReducer,
    auth: authReducer
})

export type AppRootStateType = ReturnType<typeof reducers>

export const store = createStore(reducers)

// @ts-ignore
window.store = store


