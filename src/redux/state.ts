let rerenderEntireTree = (props:RootStateType) => {
    console.log("State changed")
}

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

let state: RootStateType = {
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
}

export const addPost = (postText: string) => {
    const newPost: PostType = {
        id: new Date().getTime(),
        message: postText,
        likes: 0
    }
    state.profilePage.posts.push(newPost)
    state.profilePage.textForNewPost = ''
    rerenderEntireTree(state)
}
export const changeNewText = (newText: string) => {
    state.profilePage.textForNewPost = newText
    rerenderEntireTree(state)
}
export const subscribe = (observer: any) => {
    rerenderEntireTree = observer
}

export default state



