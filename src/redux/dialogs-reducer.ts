import {DialogMessagesType, DialogPageType} from "./store";


export const ADD_MESSAGE = "ADD-MESSAGE"
export const UPDATE_NEW_MESSAGE_TEXT = "UPDATE-NEW-MESSAGE-TEXT"

type ActionsType =
    ReturnType<typeof AddMessageAC> |
    ReturnType<typeof UpdateNewMessageAC>


export const initialState = {
    textForNewMessage: '',
    arrDialogsItems: [
        {id: 1, path: '/dialogs/1', name: 'Katya'},
        {id: 2, path: '/dialogs/2', name: 'Tim'},
        {id: 3, path: '/dialogs/3', name: 'Galina'},
        {id: 4, path: '/dialogs/4', name: 'Yuri'},
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

export const dialogsReducer = (state: DialogPageType = initialState, action: ActionsType) => {

    switch (action.type) {
        case ADD_MESSAGE: {
            let newMessage: DialogMessagesType = {
                id: new Date().getTime(),
                text: state.textForNewMessage
            }
            return {
                ...state,
                arrDialogsMessages: [...state.arrDialogsMessages, newMessage],
                textForNewMessage: ""
            }
        }
        case UPDATE_NEW_MESSAGE_TEXT: {
            return {
                ...state,
                textForNewMessage: action.textForNewMessage
            }
        }
        default:
            return state
    }
}

export const AddMessageAC = () => {
    return {
        type: ADD_MESSAGE
    } as const
}
export const UpdateNewMessageAC = (textForNewMessage: string) => {
    return {
        type: UPDATE_NEW_MESSAGE_TEXT,
        textForNewMessage: textForNewMessage
    } as const
}