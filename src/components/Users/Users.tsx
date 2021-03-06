import style from "./Users.module.css";
import userPhoto from "../../assets/images/ava.jpg";
import React from "react";
import {UserType} from "../../redux/users-reducer";
import { NavLink } from "react-router-dom";
import {Paginator} from "../../common/Paginator/Paginator";

type UsersPropsType = {
    onPageChanged: (pageNumber: number) => void
    follow: (id: number) => void
    unfollow: (id: number) => void
    totalUsersCount: number
    pageSize: number
    currentPage: number
    users: Array<UserType>
    followingProgress: Array<number>
    portionSize: number
}
export const Users = (props: UsersPropsType) => {
    return (
        <div className={style.users}>
            <Paginator
                currentPage={props.currentPage}
                onPageChanged={props.onPageChanged}
                pageSize={props.pageSize}
                totalItemsCount={props.totalUsersCount}
                portionSize={props.portionSize}/>
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
                                u.followed
                                    ? <button disabled={props.followingProgress.some(id => id === u.id)}
                                              onClick={() => {props.unfollow(u.id)}}>Unfollow</button>
                                    : <button disabled={props.followingProgress.some(id => id === u.id)}
                                              onClick={() => {props.follow(u.id)}}>Follow</button>
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