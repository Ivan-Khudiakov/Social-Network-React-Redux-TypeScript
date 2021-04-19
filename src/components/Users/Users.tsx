import style from "./Users.module.css";
import userPhoto from "../../assets/images/ava.jpg";
import React from "react";
import {UserType} from "../../redux/users-reducer";
import { NavLink } from "react-router-dom";
import axios from "axios";

type UsersPropsType = {
    onPageChanged: (pageNumber: number) => void
    follow: (id: number) => void
    unfollow: (id: number) => void
    totalUsersCount: number
    pageSize: number
    currentPage: number
    users: Array<UserType>
    followingProgress: Array<number>
    toggleIsFollowingProgress: (isFollowingProgress: boolean, id: number) => void
}
export const Users = (props: UsersPropsType) => {
    let pagesCount = Math.ceil (props.totalUsersCount / props.pageSize)
    let pages = []
    for (let i=1; i <= pagesCount; i++) {
        pages.push(i)
    }
    return (
        <div className={style.users}>
            <div>
                {pages.map(p => <span key={p} className={props.currentPage === p ? style.selectedPage : ""}
                                      onClick={() => {props.onPageChanged(p)}}>{p + " "}</span>)}
            </div>
            {
                props.users.map(u =>
                    <div key={u.id}>
                    <span>
                        <div>
                            <NavLink to={"/profile/"+u.id}>
                                <img className={style.avatar} src={u.photos.small !== null ? u.photos.small : userPhoto } alt={"Avatar"}/>
                            </NavLink>

                        </div>
                        <div>
                            {
                                u.followed ?
                                    <button disabled={props.followingProgress.some(id => id === u.id)} onClick={() => {
                                        props.toggleIsFollowingProgress(true, u.id)
                                        debugger
                                        axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`, {
                                            withCredentials: true,
                                            headers: {
                                                "API-KEY": "32f3e865-c36d-45f2-8bd3-3a4a5b923e2a"
                                            }
                                        })
                                            .then(response => {
                                                if (response.data.resultCode === 0) {
                                                    props.unfollow(u.id)
                                                }
                                                props.toggleIsFollowingProgress(false, u.id)
                                                debugger
                                            })
                                    }}>Unfollow</button> :
                                    <button disabled={props.followingProgress.some(id => id === u.id)} onClick={() => {
                                        props.toggleIsFollowingProgress(true, u.id)
                                        axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`, {}, {
                                            withCredentials: true,
                                            headers: {
                                                "API-KEY": "32f3e865-c36d-45f2-8bd3-3a4a5b923e2a"
                                            }
                                        })
                                            .then(response => {
                                                if (response.data.resultCode === 0) {
                                                    props.follow(u.id)
                                                }
                                                props.toggleIsFollowingProgress(false, u.id)
                                            })
                                    }}>Follow</button>
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