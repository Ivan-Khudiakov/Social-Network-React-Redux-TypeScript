import { Dispatch } from "redux";
import {profileAPI} from "../api/api";
import {PostType} from "../components/Profile/MyPosts/MyPostContainer";

const ADD_POST = "ADD-POST"
const SET_USER_PROFILE = "SET_USER_PROFILE"
const SET_USER_STATUS = "SET_USER_STATUS"
const DELETE_POST = "DELETE_POST"

type ActionsType =
    ReturnType<typeof addPost> |
    ReturnType<typeof setUserProfile> |
    ReturnType<typeof setUserStatus> |
    ReturnType<typeof deletePost>

type ContactsType = {
    facebook: string | null,
    website: string | null,
    vk: string | null,
    twitter: string | null,
    instagram: string | null,
    youtube: string | null,
    github: string | null,
    mainLink: string | null
}
type PhotosType = {
    small: string | undefined,
    large: string | undefined
}
export type ProfileType = {
    aboutMe: string,
    contacts: ContactsType,
    lookingForAJob: boolean,
    lookingForAJobDescription: string,
    fullName: string,
    userId: number,
    photos: PhotosType
}

const initialState = {
    posts: [
        {id: 1, message: "Hi!", likes: 15},
        {id: 2, message: "Hello World!", likes: 28},
        {id: 3, message: "How are you?", likes: 28},
        {id: 4, message: "Hello!", likes: 28},
    ] as Array<PostType>,
    profile: null as null | ProfileType,
    status: ''
}

type InitialStateType = typeof initialState

export const profileReducer = (state: InitialStateType = initialState, action: ActionsType):InitialStateType => {
    switch (action.type) {
        case ADD_POST: {
            let newPost: PostType = {
                id: new Date().getTime(),
                message: action.textForNewPost,
                likes: 0
            }
            return {
                ...state,
                posts: [...state.posts, newPost],
            }
        }
        case DELETE_POST: {
            return {...state, posts: state.posts.filter(p => p.id !== action.id)}
        }
        case SET_USER_STATUS: {
            return {...state, status: action.status}
        }
        case SET_USER_PROFILE: {
            return {...state, profile: action.profile}
        }
        default:
            return state
    }
}

export const addPost = (textForNewPost: string) => {return {type: ADD_POST, textForNewPost} as const}
export const deletePost = (id: number) => {return {type: DELETE_POST, id} as const}
export const setUserStatus = (status: string) => {return {type: SET_USER_STATUS, status} as const}
export const setUserProfile = (profile: null | ProfileType) => {return {type: SET_USER_PROFILE, profile} as const}


export const getProfile = (userId: string) => (dispatch: Dispatch) => {
    profileAPI.getProfile(userId).then(response => {
        dispatch(setUserProfile(response.data))
    })
}

export const getStatus = (userId: string) => (dispatch: Dispatch) => {
    profileAPI.getStatus(userId).then(response => {
        dispatch(setUserStatus(response.data))
    })
}

export const updateStatus = (status: string) => (dispatch: Dispatch) => {
    profileAPI.updateStatus(status).then(response => {
        if (response.data.resultCode === 0) {
            dispatch(setUserStatus(status))
        }
    })
}