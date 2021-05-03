import {addMessage, updateNewMessage} from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import {AppRootStateType} from "../../redux/redux-store";
import React from "react";
import {withAuthRedirect} from "../../hoc/WithAuthRedirect";

export type DialogItemsType = {
    id: number
    path: string
    name: string
}
export type DialogMessagesType = {
    id: number
    text: string
}
export type DialogPageType = {
    textForNewMessage: string
    arrDialogsItems: Array<DialogItemsType>
    arrDialogsMessages: Array<DialogMessagesType>
}

export type MapStatePropsType = {
    dialogsPage: DialogPageType
    isAuth: boolean
}
let AuthRedirectComponent = withAuthRedirect(Dialogs)
let mapStateToProps = (state: AppRootStateType): MapStatePropsType => {
    return {
        dialogsPage: state.dialogsPage,
        isAuth: state.auth.isAuth
    }
}


const DialogsContainer = connect(mapStateToProps, {addMessage, updateNewMessage}) (AuthRedirectComponent)
export default DialogsContainer;