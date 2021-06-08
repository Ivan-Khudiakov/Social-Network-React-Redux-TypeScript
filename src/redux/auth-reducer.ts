import {Dispatch} from "redux";
import {authAPI} from "../api/api";
import {stopSubmit} from "redux-form";

const SET_AUTH_USER_DATA = "auth/SET_AUTH_USER_DATA"

type ActionsType = ReturnType<typeof setAuthUserData>

const initialState = {
    id:  "0" as string | undefined,
    email: '' as string | null,
    login: '' as string | null,
    isAuth: false
}

type InitialStateType = typeof initialState

export const authReducer = (state: InitialStateType = initialState, action: ActionsType): InitialStateType => {
    switch (action.type) {
        case SET_AUTH_USER_DATA:
            return {
                ...state,
                id: action.id,
                email: action.email,
                login: action.login,
                isAuth: action.isAuth
            }
        default:
            return state
    }
}

export const setAuthUserData = (id: string | undefined, login: string | null, email: string | null, isAuth: boolean) =>
    ( {type: SET_AUTH_USER_DATA, id, login, email, isAuth})

export const getAuthUserData = () => async (dispatch: Dispatch) => {
    let response = await authAPI.me()
    if (response.data.resultCode === 0) {
        let {id, login, email} = response.data.data
        dispatch(setAuthUserData(id, login, email, true))
    }
}

export const login = (email: string, password: string, rememberMe: boolean) => async (dispatch: Dispatch) => {
    let response = await authAPI.login(email, password, rememberMe)
    if (response.data.resultCode === 0) {
        getAuthUserData()
    } else {
        let message = response.data.messages.length > 0
            ? response.data.messages[0]
            : "Some error!"
        dispatch(stopSubmit("login", {_error: message}))
    }
}

export const logout = () => async (dispatch: Dispatch) => {
    let response = await authAPI.logout()
    if (response.data.resultCode === 0) {
        dispatch(setAuthUserData(undefined, null, null, false))
    }
}

