import {Dispatch} from "redux";
import {authAPI} from "../api/api";

const SET_AUTH_USER_DATA = "SET_AUTH_USER_DATA"

type ActionsType = ReturnType<typeof setAuthUserData>

const initialState = {
    id:  0,
    email: '',
    login: '',
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
                isAuth: true
            }
        default:
            return state
    }
}

export const setAuthUserData = (id: number, login: string, email: string) =>
    ( {type: SET_AUTH_USER_DATA, id, login, email})

export const getAuthUserData = () => (dispatch: Dispatch) => {
    authAPI.me().then(response => {
        if (response.data.resultCode === 0) {
            let {id, login, email} = response.data.data
            dispatch(setAuthUserData(id, login, email))
        }
    })
}

