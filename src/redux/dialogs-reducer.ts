import {DialogMessagesType, DialogPageType} from "../components/Dialogs/DialogsContainer";

export const ADD_MESSAGE = "dialogs/ADD-MESSAGE"

type ActionsType =
    ReturnType<typeof addMessage>


export const initialState = {
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
                text: action.textForNewMessage
            }
            return {
                ...state,
                arrDialogsMessages: [...state.arrDialogsMessages, newMessage]
            }
        }
        default:
            return state
    }
}

export const addMessage = (textForNewMessage: string) => {return {type: ADD_MESSAGE, textForNewMessage} as const
}
