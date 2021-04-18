const SET_AUTH_USER_DATA = "SET_AUTH_USER_DATA"

type ActionsType = ReturnType<typeof setAuthUserData>

const initialState = {
    id: 0,
    email: "",
    login: ""
}

type InitialStateType = typeof initialState

export const authReducer = (state: InitialStateType = initialState, action: ActionsType): InitialStateType => {
    switch (action.type) {
        case SET_AUTH_USER_DATA:
            return {
                ...state,
                ...action.data
            }
        default:
            return state
    }
}

export const setAuthUserData = (data: InitialStateType) =>
    ( {type: SET_AUTH_USER_DATA, data})

