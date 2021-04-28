import {addMessage, updateNewMessage} from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import {AppRootStateType} from "../../redux/redux-store";

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

type MapStatePropsType = {
    dialogsPage: DialogPageType
    isAuth: boolean
}

let mapStateToProps = (state: AppRootStateType): MapStatePropsType => {
    return {
        dialogsPage: state.dialogsPage,
        isAuth: state.auth.isAuth
    }
}


const DialogsContainer = connect(mapStateToProps, {addMessage, updateNewMessage}) (Dialogs)
export default DialogsContainer;