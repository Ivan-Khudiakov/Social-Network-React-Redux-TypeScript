import {ActionsType,PostType, ProfilePageType} from "./store";

export const ADD_POST = "ADD-POST"
export const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT"

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
        case ADD_POST:
            let newPost: PostType = {
                id: new Date().getTime(),
                message: action.postText,
                likes: 0
            }
            state.posts.push(newPost)
            state.textForNewPost = ''
            return state
        case UPDATE_NEW_POST_TEXT:
            state.textForNewPost = action.textForNewPost
            return state
        default:
            return state
    }
}

export const AddPostAC = (postText: string) => {
    return {
        type: ADD_POST,
        postText: postText
    } as const
}
export const UpdateNewPostTextAC = (textForNewPost: string) => {
    return{
        type: UPDATE_NEW_POST_TEXT,
        textForNewPost: textForNewPost
    } as const
}