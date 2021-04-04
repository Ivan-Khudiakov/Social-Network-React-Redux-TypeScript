import {ActionsType, UsersPageType} from "./store";
import {v1} from "uuid";

const FOLLOW = "FOLLOW"
const UNFOLLOW = "UNFOLLOW"
const SET_USERS = "SET_USERS"


const initialState = {
    users:  [
        {id: v1(), fotoUrl: "https://r-iris.ru/images/photos/medium/article150.jpg", followed: true, fullName: "Dmitry", status: "I am a boss!", location: {city: "Minsk", country: "Belarus"}},
        {id: v1(), fotoUrl: "https://r-iris.ru/images/photos/medium/article150.jpg", followed: false, fullName: "Andrey", status: "I am a boss too!", location: {city: "Moscow", country: "Russia"}},
        {id: v1(), fotoUrl: "https://r-iris.ru/images/photos/medium/article150.jpg", followed: true, fullName: "Valera", status: "I am a boss too!", location: {city: "Kiev", country: "Ukraine"}},
        {id: v1(), fotoUrl: "https://r-iris.ru/images/photos/medium/article150.jpg", followed: false, fullName: "Yura", status: "I am a boss too!", location: {city: "Dallas", country: "USA"}},
    ]
}
export const usersReducer = (state: UsersPageType = initialState, action: ActionsType) => {
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
            return {...state, users: [action.users]}
        default:
            return state
    }
}

export const followAC = (id: string) => {
    return {
        type: FOLLOW,
        id: id
    } as const
}
export const unfollowAC = (id: string) => {
    return{
        type: UNFOLLOW,
        id: id
    } as const
}
export const setUsersAC = (users: UsersPageType) => {
    return{
        type: SET_USERS,
        users: users
    } as const
}