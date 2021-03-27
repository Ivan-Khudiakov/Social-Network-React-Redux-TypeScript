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

export type ActionsType = ReturnType<typeof AddPostAC> | ReturnType<typeof UpdateNewPostTExtAC>

export const AddPostAC = (postText: string) => {
    return {
        type: "ADD-POST",
        postText: postText
    } as const
}
export const UpdateNewPostTExtAC = (newText: string) => {
    return{
        type: "UPDATE-NEW-POST-TEXT",
        newText: newText
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
            ]
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
        if(action.type === "ADD-POST") {
            let newPost: PostType = {
                id: new Date().getTime(),
                message: action.postText,
                likes: 0
            }
            this._state.profilePage.posts.push(newPost)
            this._state.profilePage.textForNewPost = ''
            this._rerenderEntireTree()
        } else if (action.type === "UPDATE-NEW-POST-TEXT") {
            this._state.profilePage.textForNewPost = action.newText
            this._rerenderEntireTree()
        }

    }
}

export default store



