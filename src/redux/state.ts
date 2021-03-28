const ADD_POST = "ADD-POST"
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT"
const ADD_MESSAGE = "ADD-MESSAGE"
const UPDATE_NEW_MESSAGE_TEXT = "UPDATE-NEW-MESSAGE-TEXT"


export type PostType = {
    id: number
    message: string
    likes: number
}
export type DialogItemsType = {
    id: number
    path: string
    name: string
}
export type DialogMessagesType = {
    id: number
    text: string
}
export type ProfilePageType = {
    textForNewPost: string
    posts: Array<PostType>
}
export type DialogPageType = {
    textForNewMessage: string
    arrDialogsItems: Array<DialogItemsType>
    arrDialogsMessages: Array<DialogMessagesType>
}
export type RootStateType = {
    profilePage: ProfilePageType
    dialogsPage: DialogPageType
}
export type StoreType = {
    _state: RootStateType
    getState: () => RootStateType
    _rerenderEntireTree: () => void
    subscribe: (callback: () => void) => void
    dispatch: (action: ActionsType) => void
}

export type ActionsType =
    ReturnType<typeof AddPostAC> |
    ReturnType<typeof UpdateNewPostTextAC> |
    ReturnType<typeof AddMessageAC> |
    ReturnType<typeof UpdateNewMessageAC>

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
export const AddMessageAC = (messageText: string) => {
    return {
        type: ADD_MESSAGE,
        messageText: messageText
    } as const
}
export const UpdateNewMessageAC = (textForNewMessage: string) => {
    return {
        type: UPDATE_NEW_MESSAGE_TEXT,
        textForNewMessage: textForNewMessage
    } as const
}


let store: StoreType = {
    _state: {
        profilePage: {
            textForNewPost: '',
            posts: [
                {id: 1, message: "Hi!", likes: 15},
                {id: 2, message: "Hello World!", likes: 28},
                {id: 3, message: "How are you?", likes: 28},
                {id: 4, message: "Hello!", likes: 28},
            ]
        },
        dialogsPage: {
            textForNewMessage: '',
            arrDialogsItems: [
                {id: 1, path: '/dialogs/1', name: 'Katya'},
                {id: 2, path: '/dialogs/2', name: 'Tima'},
                {id: 3, path: '/dialogs/3', name: 'Galya'},
                {id: 4, path: '/dialogs/4', name: 'Yura'},
                {id: 5, path: '/dialogs/5', name: 'Vladimir'},
            ],
            arrDialogsMessages: [
                {id: 1, text: 'Hi!'},
                {id: 2, text: 'How are you?'},
                {id: 3, text: 'Hello!'},
                {id: 4, text: 'Hello!'},
                {id: 5, text: 'Hello!'},
            ],
        }
    },
    _rerenderEntireTree() {
        console.log("State changed")
    },
    getState() {
        return this._state
    },
    subscribe(callback) {
        this._rerenderEntireTree = callback
    },

    dispatch(action) {
        if(action.type === ADD_POST) {
            let newPost: PostType = {
                id: new Date().getTime(),
                message: action.postText,
                likes: 0
            }
            this._state.profilePage.posts.push(newPost)
            this._state.profilePage.textForNewPost = ''
            this._rerenderEntireTree()
        } else if (action.type === UPDATE_NEW_POST_TEXT) {
            this._state.profilePage.textForNewPost = action.textForNewPost
            this._rerenderEntireTree()
        } else if (action.type === ADD_MESSAGE) {
            let newMessage: DialogMessagesType = {
                id: new Date().getTime(),
                text: action.messageText
            }
            this._state.dialogsPage.arrDialogsMessages.push(newMessage)
            this._state.dialogsPage.textForNewMessage = ''
            this._rerenderEntireTree()
        } else if (action.type === UPDATE_NEW_MESSAGE_TEXT) {
            this._state.dialogsPage.textForNewMessage = action.textForNewMessage
            this._rerenderEntireTree()
        }

    }
}

export default store



