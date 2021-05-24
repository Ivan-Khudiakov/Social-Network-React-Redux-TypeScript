import React, {ChangeEvent, useState} from "react";

type PropsType = {
    status: string
    updateStatus: (status: string ) => void
}

export const ProfileStatusWithHooks = (props: PropsType) => {
    let [editMode, setEditMode] = useState (false)
    let [status, setStatus] = useState(props.status)

    const activateEditMode = () => {
        setEditMode(true)
    }

    const deactivateEditMode = () => {
        setEditMode(false)
        //данный запрос необходи для сохранения нового статуса после деактивации
        props.updateStatus(status)
    }

    const onStatusChange = (e: ChangeEvent<HTMLInputElement>) => {
        setStatus(e.currentTarget.value)
    }
        return (
            <div>
                {!editMode &&
                <div>
                    <span onDoubleClick={activateEditMode}>{props.status || "No status"}</span>
                </div>
                }
                {editMode &&
                <div>
                    <input
                        onChange={onStatusChange}
                        autoFocus={true}
                        onBlur={deactivateEditMode}
                        value={status}/>

                </div>
                }
            </div>
        )
}
