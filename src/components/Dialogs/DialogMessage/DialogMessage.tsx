import React from "react";
import s from '../Dialogs.module.css'
import {DialogMessagesType} from "../../../redux/state";

type DialogMessageType = {
    dialogsMessages: Array<DialogMessagesType>
}
const DialogMessage = (props: DialogMessageType) => {
    return (
        <div>
            {props.dialogsMessages.map(m => <div key={m.id} className={s.message}>{m.text}</div>)}
        </div>
    )
}

export default DialogMessage