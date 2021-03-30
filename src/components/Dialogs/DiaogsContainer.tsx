import React, {ChangeEvent} from "react";
import {ActionsType, DialogPageType,} from "../../redux/store";
import {AddMessageAC, UpdateNewMessageAC} from "../../redux/dialogsReducer";
import Dialogs from "./Dialogs";

export type DialogsPropsType = {
    dialogsPage: DialogPageType
    dispatch: (action: ActionsType) => void
}

const DialogsContainer = (props: DialogsPropsType) => {
    const addMessage = () => {
        props.dispatch(AddMessageAC(props.dialogsPage.textForNewMessage))
    }
    const changeMessage = (message: string) => {
        props.dispatch(UpdateNewMessageAC(message))
    }

    return (
        <Dialogs addMessage={addMessage} changeMessage={changeMessage} dialogsPage={props.dialogsPage}/>
    )
}

export default DialogsContainer;