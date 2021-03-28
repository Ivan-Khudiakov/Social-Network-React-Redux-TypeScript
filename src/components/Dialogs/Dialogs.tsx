import React, {ChangeEvent} from "react";
import s from './Dialogs.module.css'
import DialogItem from "./DialogItem/DialogItem";
import DialogMessage from "./DialogMessage/DialogMessage";
import {ActionsType, DialogPageType,} from "../../redux/state";
import {AddMessageAC, UpdateNewMessageAC} from "../../redux/dialogsReducer";

export type DialogsPropsType = {
    dialogsPage: DialogPageType
    dispatch: (action: ActionsType) => void
}

const Dialogs = (props: DialogsPropsType) => {
    const addMessage = () => {
        props.dispatch(AddMessageAC(props.dialogsPage.textForNewMessage))
    }
    const changeMessage = (e: ChangeEvent<HTMLTextAreaElement>) => {
        let message = e.currentTarget.value
        props.dispatch(UpdateNewMessageAC(message))
    }

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                <DialogItem dialogsItems={props.dialogsPage.arrDialogsItems}/>
            </div>
            <div className={s.dialogsMessages}>
                <DialogMessage dialogsMessages={props.dialogsPage.arrDialogsMessages}/>
                <div>
                    <textarea placeholder={"Enter you message"} value={props.dialogsPage.textForNewMessage} onChange={changeMessage}></textarea>
                </div>
                <div>
                    <button onClick={addMessage}>Send</button>
                </div>
            </div>

        </div>
    )
}

export default Dialogs;
