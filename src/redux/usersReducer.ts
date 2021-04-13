import {ActionsType} from "./store";

const FOLLOW = "FOLLOW"
const UNFOLLOW = "UNFOLLOW"
const SET_USERS = "SET_USERS"
const SET_CURRENT_PAGE = "SET_CURRENT_PAGE"
const SET_TOTAL_USERS_COUNT = "SET_TOTAL_USERS_COUNT"
const SET_IS_FETCHING = "SET_IS_FETCHING"

export type UserType = {
    id: number
    photos: any
    followed: boolean
    name: string
    status: string
}

const initialState = {
    users: [] as Array<UserType>,
    pageSize: 50,
    totalUsersCount:0,
    currentPage: 1,
    isFetching: false
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
        case SET_CURRENT_PAGE:
            return {...state, currentPage: action.currentPage}
        case SET_TOTAL_USERS_COUNT:
            return {...state, totalUsersCount: action.totalCount}
        case SET_IS_FETCHING:
            return {...state, isFetching: action.isFetching}
        default:
            return state
    }
}

export const followAC = (id: number) => ({type: FOLLOW, id} as const)
export const unfollowAC = (id: number) =>  ({type: UNFOLLOW, id} as const)
export const setUsersAC = (users: UserType[]) =>  ({type: SET_USERS, users} as const)
export const setCurrentPageAC = (currentPage: number) => ({type: SET_CURRENT_PAGE, currentPage} as const)
export const setTotalUsersCountAC = (totalUsersCount: number) => ({type: SET_TOTAL_USERS_COUNT, totalCount: totalUsersCount} as const)
export const setIsFetchingAC = (isFetching: boolean) => ({type: SET_IS_FETCHING, isFetching} as const)
