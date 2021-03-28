import {ActionsType, DialogMessagesType, DialogPageType} from "./state";

export const ADD_MESSAGE = "ADD-MESSAGE"
export const UPDATE_NEW_MESSAGE_TEXT = "UPDATE-NEW-MESSAGE-TEXT"

export const dialogsReducer = (state: DialogPageType, action: ActionsType) => {
    switch (action.type) {
        case ADD_MESSAGE:
            let newMessage: DialogMessagesType = {
                id: new Date().getTime(),
                text: action.messageText
            }
            state.arrDialogsMessages.push(newMessage)
            state.textForNewMessage = ''
            return state
        case UPDATE_NEW_MESSAGE_TEXT:
            state.textForNewMessage = action.textForNewMessage
            return state
        default:
            return state
    }
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