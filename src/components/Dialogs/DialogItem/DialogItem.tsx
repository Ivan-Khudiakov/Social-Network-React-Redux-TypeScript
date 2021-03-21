import React from "react";
import s from "../Dialogs.module.css";
import {NavLink} from "react-router-dom";
import {DialogItemsType} from "../../../redux/state"

type DialogsItemsType = {
    dialogsItems: Array<DialogItemsType>
}

const DialogItem = (props: DialogsItemsType) => {
    return (
        <div>
            {
                props.dialogsItems.map (d =>
                    <div key={d.id} className={s.dialog}>
                    <NavLink exact to={d.path} activeClassName={s.active}>{d.name}</NavLink>
                    </div>
                )
            }
        </div>
    )
}
export default DialogItem