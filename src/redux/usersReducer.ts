import {ActionsType} from "./store";

const FOLLOW = "FOLLOW"
const UNFOLLOW = "UNFOLLOW"
const SET_USERS = "SET_USERS"

export type UserType = {
    id: number
    photos: any
    followed: boolean
    name: string
    status: string
}

const initialState = {
    users: [] as Array<UserType>
}

type InitialStateType = typeof initialState

export const usersReducer = (state: InitialStateType = initialState, action: ActionsType): InitialStateType => {
    switch (action.type) {
        case FOLLOW:
            return {
                ...state, users: state.users.map(u => {
                    if (u.id === action.id) {
                        return {...u, followed: true}
                    }
                    return u
                })
            }
        case UNFOLLOW:
            return {
                ...state, users: state.users.map(u => {
                    if (u.id === action.id) {
                        return {...u, followed: false}
                    }
                    return u
                })
            }
        case SET_USERS:
            return {...state, users: action.users}
        default:
            return state
    }
}

export const followAC = (id: number) => ({type: FOLLOW, id: id} as const)
export const unfollowAC = (id: number) =>  ({type: UNFOLLOW, id: id} as const)
export const setUsersAC = (users: UserType[]) =>  ({type: SET_USERS, users: users} as const)
