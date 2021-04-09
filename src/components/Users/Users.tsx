import React from 'react';
import style from "./Users.module.css"
import axios from "axios"
import userPhoto from "../../assets/images/ava.jpg"

export type LocationUsersType = {
    city: string
    country: string
}
export type UserType = {
    id: number
    photos: any
    followed: boolean
    name: string
    status: string
    location: LocationUsersType
}
export type UsersType = {
    users: Array<UserType>
}
type UserPagePropsType = {
    users: Array<UserType>
    follow: (id: number) => void
    unfollow: (id: number) => void
    setUsers: (users: Array<UserType>) => void

}

export const Users = (props: UserPagePropsType) => {
    if (props.users.length === 0) {
        axios.get("https://social-network.samuraijs.com/api/1.0/users").then(response => {
            props.setUsers(response.data.items)
        })
    }

    return (
        <div>
            {
                props.users.map(u =>
                    <div key={u.id}>
                    <span>
                        <div>
                            <img className={style.avatar} src={u.photos.small !== null ? u.photos.small : userPhoto }
                                 />
                        </div>
                        <div>
                            {
                                u.followed ?
                                <button onClick={() => {props.unfollow(u.id)}}>Unfollow</button> :
                                <button onClick={() => {props.follow(u.id)}}>Follow</button>
                            }
                        </div>
                    </span>
                        <span>
                        <span>
                            <div>{u.name}</div>
                            <div>{u.status}</div>
                        </span>
                        <span>
                            <div>{"u.location.city"}</div>
                            <div>{"u.location.country"}</div>
                        </span>
                    </span>
                    </div>)
            }
        </div>
    )
}