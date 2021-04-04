import {ActionsType,PostType, ProfilePageType} from "./store";

const ADD_POST = "ADD-POST"
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT"

const initialState = {
    textForNewPost: '',
    posts: [
        {id: 1, message: "Hi!", likes: 15},
        {id: 2, message: "Hello World!", likes: 28},
        {id: 3, message: "How are you?", likes: 28},
        {id: 4, message: "Hello!", likes: 28},
    ]
}
export const profileReducer = (state: ProfilePageType = initialState, action: ActionsType) => {
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
        default:
            return state
    }
}

export const AddPostAC = () => {
    return {
        type: ADD_POST
    } as const
}
export const UpdateNewPostTextAC = (textForNewPost: string) => {
    return{
        type: UPDATE_NEW_POST_TEXT,
        textForNewPost: textForNewPost
    } as const
}