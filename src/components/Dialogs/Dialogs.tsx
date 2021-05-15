import React from "react";
import s from './Dialogs.module.css'
import DialogItem from "./DialogItem/DialogItem";
import DialogMessage from "./DialogMessage/DialogMessage";
import {DialogPageType} from "./DialogsContainer";
import {Field, reduxForm} from "redux-form";

type DialogsPropsType = {
    dialogsPage: DialogPageType
    isAuth: boolean
    addMessage: (textForNewMessage: string) => void
}

const AddMessageForm = () => {
    return (
        <form  >
            <Field component={'textarea'} name={'textForNewMessage'} placeholder={"Enter you message"}/>
            <div>
                <button>Send</button>
            </div>
        </form>
    )
}

const AddMessageFormRedux = reduxForm({form: 'dialogAddMessageForm'})(AddMessageForm)

const Dialogs = (props: DialogsPropsType) => {
    const addNewMessage = (values: any) => {
        props.addMessage(values.textForNewMessage)
    }

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                <DialogItem dialogsItems={props.dialogsPage.arrDialogsItems}/>
            </div>
            <div className={s.dialogsMessages}>
                <DialogMessage dialogsMessages={props.dialogsPage.arrDialogsMessages}/>
            </div>
            <AddMessageFormRedux onSubmit={addNewMessage}/>

        </div>
    )
}

export default Dialogs