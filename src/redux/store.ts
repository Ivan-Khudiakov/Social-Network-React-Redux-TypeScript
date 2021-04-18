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
type LocationUsersType = {
    city: string
    country: string
}
type UserType = {
    id: number
    photos: any
    followed: boolean
    name: string
    status: string
    location: LocationUsersType
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
type UsersPageType = {
    users: Array<UserType>
}
export type RootStateType = {
    profilePage: ProfilePageType
    dialogsPage: DialogPageType
    userPage: UsersPageType
}
// export type StoreType = {
//     _state: RootStateType
//     getState: () => RootStateType
//     _rerenderEntireTree: () => void
//     subscribe: (callback: () => void) => void
//     dispatch: (action: ActionsType) => void
// }






// let store: StoreType = {
//     _state: {
//         profilePage: {
//             textForNewPost: '',
//             posts: [
//                 {id: 1, message: "Hi!", likes: 15},
//                 {id: 2, message: "Hello World!", likes: 28},
//                 {id: 3, message: "How are you?", likes: 28},
//                 {id: 4, message: "Hello!", likes: 28},
//             ]
//         },
//         dialogsPage: {
//             textForNewMessage: '',
//             arrDialogsItems: [
//                 {id: 1, path: '/dialogs/1', name: 'Katya'},
//                 {id: 2, path: '/dialogs/2', name: 'Tim'},
//                 {id: 3, path: '/dialogs/3', name: 'Galina'},
//                 {id: 4, path: '/dialogs/4', name: 'Yuri'},
//                 {id: 5, path: '/dialogs/5', name: 'Vladimir'},
//             ],
//             arrDialogsMessages: [
//                 {id: 1, text: 'Hi!'},
//                 {id: 2, text: 'How are you?'},
//                 {id: 3, text: 'Hello!'},
//                 {id: 4, text: 'Hello!'},
//                 {id: 5, text: 'Hello!'},
//             ],
//         },
//         userPage: {
//             users:  [
//                 {id: 1, photos: "https://r-iris.ru/images/photos/medium/article150.jpg", followed: true, name: "Dmitry", status: "I am a boss!", location: {city: "Minsk", country: "Belarus"}},
//                 {id: 2, photos: "https://r-iris.ru/images/photos/medium/article150.jpg", followed: false, name: "Andrey", status: "I am a boss too!", location: {city: "Moscow", country: "Russia"}},
//                 {id: 3, photos: "https://r-iris.ru/images/photos/medium/article150.jpg", followed: true, name: "Valera", status: "I am a boss too!", location: {city: "Kiev", country: "Ukraine"}},
//                 {id: 4, photos: "https://r-iris.ru/images/photos/medium/article150.jpg", followed: false, name: "Yura", status: "I am a boss too!", location: {city: "Dallas", country: "USA"}},
//             ]
//         }
//     },
//     _rerenderEntireTree() {
//         console.log("State changed")
//     },
//     getState() {
//         return this._state
//     },
//     subscribe(callback) {
//         this._rerenderEntireTree = callback
//     },
//
//     dispatch(action) {
//         this._state.profilePage = profileReducer(this._state.profilePage, action)
//         this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action)
//         this._rerenderEntireTree()
//     }
// }
//
// export default store



