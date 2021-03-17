import React from "react";
import s from "../Dialogs.module.css";
import {NavLink} from "react-router-dom";

type DialogItemType = {
    id: number
    path: string
    name: string
}
type DialogItemPropsType = {
    DialogsItems: Array<DialogItemType>
}

const DialogItem = (props:DialogItemPropsType) => {
    return (
        <div className={s.dialog}>
            {
                props.DialogsItems.map(d =>
                    <NavLink key={d.id} exact to={d.path} activeClassName={s.active}>{d.name}</NavLink>
                )
            }
        </div>
    )
}
export default DialogItem