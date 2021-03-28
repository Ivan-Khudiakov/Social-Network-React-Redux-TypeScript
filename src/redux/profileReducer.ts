import {ActionsType,PostType, ProfilePageType} from "./state";

export const ADD_POST = "ADD-POST"
export const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT"

export const profileReducer = (state: ProfilePageType, action: ActionsType) => {
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