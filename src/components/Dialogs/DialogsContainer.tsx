import {addMessage, updateNewMessage} from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import {AppRootStateType} from "../../redux/redux-store";
import {ComponentType} from "react";
import {withAuthRedirect} from "../../hoc/WithAuthRedirect";
import { compose } from "redux";

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

}

let mapStateToProps = (state: AppRootStateType): MapStatePropsType => ({
    dialogsPage: state.dialogsPage
})

export default compose<ComponentType>(
    connect(mapStateToProps, {addMessage, updateNewMessage}),
    withAuthRedirect
)(Dialogs)
