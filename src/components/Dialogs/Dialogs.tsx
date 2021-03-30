import React, {ChangeEvent} from "react";
import s from './Dialogs.module.css'
import DialogItem from "./DialogItem/DialogItem";
import DialogMessage from "./DialogMessage/DialogMessage";
import {DialogPageType,} from "../../redux/store";

type DialogsPropsType = {
    dialogsPage: DialogPageType
    addMessage: () => void
    changeMessage: (message: string) => void
}

const Dialogs = (props: DialogsPropsType) => {
    const addMessage = () => {
        props.addMessage()
    }
    const changeMessage = (e: ChangeEvent<HTMLTextAreaElement>) => {
        let message = e.currentTarget.value
        props.changeMessage(message)
    }

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                <DialogItem dialogsItems={props.dialogsPage.arrDialogsItems}/>
            </div>
            <div className={s.dialogsMessages}>
                <DialogMessage dialogsMessages={props.dialogsPage.arrDialogsMessages}/>
                <div>
                        <textarea placeholder={"Enter you message"}
                                  value={props.dialogsPage.textForNewMessage}
                                  onChange={changeMessage}></textarea>
                </div>
                <div>
                    <button onClick={addMessage}>Send</button>
                </div>
            </div>

        </div>
    )
}

export default Dialogs