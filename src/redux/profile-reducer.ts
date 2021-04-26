import { Dispatch } from "redux";
import {PostType} from "./store";
import {profileAPI} from "../api/api";

const ADD_POST = "ADD-POST"
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT"
const SET_USER_PROFILE = "SET_USER_PROFILE"
type ActionsType =
    ReturnType<typeof AddPostAC> |
    ReturnType<typeof UpdateNewPostTextAC> |
    ReturnType<typeof setUserProfile>


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

// export type ProfilePageType = {
//     textForNewPost: string
//     posts: Array<PostType>
//     profile: ProfileType
// }

const initialState = {
    textForNewPost: '',
    posts: [
        {id: 1, message: "Hi!", likes: 15},
        {id: 2, message: "Hello World!", likes: 28},
        {id: 3, message: "How are you?", likes: 28},
        {id: 4, message: "Hello!", likes: 28},
    ] as Array<PostType>,
    profile: null as null | ProfileType
}
type InitialStateType = typeof initialState

export const profileReducer = (state: InitialStateType = initialState, action: ActionsType):InitialStateType => {
    switch (action.type) {
        case ADD_POST: {
            let newPost: PostType = {
                id: new Date().getTime(),
                message: state.textForNewPost,
                likes: 0
            }
            return {
                ...state,
                posts: [...state.posts, newPost],
                textForNewPost: ""
            }
        }
        case UPDATE_NEW_POST_TEXT: {
            return {...state, textForNewPost: action.textForNewPost}
        }
        case SET_USER_PROFILE: {
            return {...state, profile: action.profile}
        }
        default:
            return state
    }
}

export const AddPostAC = () => {return {type: ADD_POST} as const}
export const UpdateNewPostTextAC = (textForNewPost: string) => {return{type: UPDATE_NEW_POST_TEXT, textForNewPost: textForNewPost} as const}
export const setUserProfile = (profile: null | ProfileType) => {return {type: SET_USER_PROFILE, profile} as const}

export const getProfile = (userId: string) => {
    return (dispatch: Dispatch) => {
        profileAPI.getProfile(userId).then(response => {
            dispatch(setUserProfile(response.data))
        })
    }
}