import React from 'react';
import style from "./Users.module.css"
import axios from "axios"
import userPhoto from "../../assets/images/ava.jpg"
import {UserPagePropsType} from "./UsersContainer";

export class Users extends React.Component<UserPagePropsType> {
    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.setUsers(response.data.items)
                this.props.setTotalUsersCount(response.data.totalCount)
        })
    }

    onPageChanged = (pageNumber: number) => {
        this.props.setCurrentPage(pageNumber)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.setUsers(response.data.items)
            })
    }
    render () {
        let pagesCount = Math.ceil (this.props.totalUsersCount / this.props.pageSize)
        let pages = []
        for (let i=1; i <= pagesCount; i++) {
            pages.push(i)
        }
        return (
            <div className={style.users}>
                <div>
                    {pages.map(p => <span key={p} className={this.props.currentPage === p ? style.selectedPage : ""}
                                          onClick={(e) => {this.onPageChanged(p)}}>{p + " "}</span>)}
                </div>
                {
                    this.props.users.map(u =>
                        <div key={u.id}>
                    <span>
                        <div>
                            <img className={style.avatar} src={u.photos.small !== null ? u.photos.small : userPhoto } alt={"Avatar"}/>
                        </div>
                        <div>
                            {
                                u.followed ?
                                    <button onClick={() => {this.props.unfollow(u.id)}}>Unfollow</button> :
                                    <button onClick={() => {this.props.follow(u.id)}}>Follow</button>
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
}
