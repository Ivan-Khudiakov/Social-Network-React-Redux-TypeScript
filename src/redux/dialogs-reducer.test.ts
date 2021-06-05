import {addMessage, dialogsReducer} from "./dialogs-reducer";

const state = {
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

it('new message should be added', () => {
    // 1. тестовые данные
    let action = addMessage('Hi')
    // 2. Action
    let newState = dialogsReducer(state, action)
    // 3. проверка результата
    expect(newState.arrDialogsMessages.length).toBe(6)
})