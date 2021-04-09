import {ActionsType} from "./store";
import {UsersType, UserType} from "../components/Users/Users";

const FOLLOW = "FOLLOW"
const UNFOLLOW = "UNFOLLOW"
const SET_USERS = "SET_USERS"

const initialState: UsersType = {
    users: []
}
export const usersReducer = (state= initialState, action: ActionsType):UsersType  => {
    switch (action.type) {
        case FOLLOW:
            return {
                ...state, users: state.users.map (u => {
                if (u.id === action.id) {
                    return {...u, followed: true}
                }
                return u
            })}
        case UNFOLLOW:
            return {
                ...state, users: state.users.map (u => {
                    if (u.id === action.id) {
                        return {...u, followed: false}
                    }
                    return u
                })}
        case SET_USERS:
            return {...state, users: action.users}
        default:
            return state
    }
}

export const followAC = (id: number) => {
    return {
        type: FOLLOW,
        id: id
    } as const
}
export const unfollowAC = (id: number) => {
    return{
        type: UNFOLLOW,
        id: id
    } as const
}
export const setUsersAC = (users: UserType[]) => {
    return{
        type: SET_USERS,
        users: users
    } as const
}