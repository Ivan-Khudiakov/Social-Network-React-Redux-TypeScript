import React from "react";
import s from './Dialogs.module.css'
import DialogItem from "./DialogItem/DialogItem";
import DialogMessage from "./DialogMessage/DialogMessage";
import {DialogPageType} from "./DialogsContainer";
import {Field, reduxForm} from "redux-form";
import {TextArea} from "../../common/FormsControls/FormsControls";
import {maxLengthCreator, required} from "../../utils/validators/validators";

type DialogsPropsType = {
    dialogsPage: DialogPageType
    isAuth: boolean
    addMessage: (textForNewMessage: string) => void
}

const maxLength = maxLengthCreator(10)

const AddMessageForm = (props: any) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <Field component={TextArea}
                   name={'textForNewMessage'}
                   validate={[required, maxLength]}
                   placeholder={"Enter you message"}/>
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