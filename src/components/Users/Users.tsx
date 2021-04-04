import React from 'react';
import style from "./Users.module.css"
import {UserType} from "../../redux/store";


type UserPagePropsType = {
    users: Array<UserType>
    follow: (id: string) => void
    unfollow: (id: string) => void
    setUsers: (users: Array<UserType>) => void

}
export const Users = (props: UserPagePropsType) => {
    if(props.users.length === 0) {
        props.setUsers(props.users)
    }

    return (
        <div>{
            props.users.map(u =>
                <div key={u.id}>
                    <span>
                        <div>
                            <img className={style.avatar} src={u.fotoUrl} alt="Avatar"/>
                        </div>
                        <div>
                            {u.followed
                                ? <button onClick={() => {props.unfollow(u.id)}}>Unfollow</button>
                                : <button onClick={() => {props.follow(u.id)}}>Follow</button>
                            }
                        </div>
                    </span>
                    <span>
                        <span>
                            <div>{u.fullName}</div>
                            <div>{u.status}</div>
                        </span>
                        <span>
                            <div>{u.location.city}</div>
                            <div>{u.location.country}</div>
                        </span>
                    </span>
                </div>)
        }
        </div>
    )
}