import {connect} from "react-redux";
import {
    follow, getUsers, setCurrentPage,
    toggleIsFollowingProgress, unfollow, UserType
} from "../../redux/users-reducer";
import {AppRootStateType} from "../../redux/redux-store";
import React from "react";
import {Users} from "./Users";
import {Preloader} from "../../common/Preloader/Preloader";
import {
    getCurrentPage,
    getFollowingProgress,
    getIsFetching,
    getPageSize,
    getTotalUsersCount,
    getUsersSuperSelector
} from "../../redux/users-selectors";

export class UsersContainer extends React.Component<UserPagePropsType> {
    componentDidMount() {
        this.props.getUsers(this.props.currentPage, this.props.pageSize)
    }

    onPageChanged = (pageNumber: number) => {
        this.props.getUsers(pageNumber, this.props.pageSize)
    }

    render() {
        return (
            <>
                {this.props.isFetching ? <Preloader/> : null}
                <Users totalUsersCount={this.props.totalUsersCount}
                       pageSize={this.props.pageSize}
                       currentPage={this.props.currentPage}
                       onPageChanged={this.onPageChanged}
                       follow={this.props.follow}
                       unfollow={this.props.unfollow}
                       users={this.props.users}
                       followingProgress={this.props.followingProgress}
                       portionSize={this.props.portionSize}/>
            </>
        )
    }
}

type MapStateToPropsType = {
    users: Array<UserType>
    pageSize: number
    totalUsersCount: number
    currentPage: number
    isFetching: boolean
    followingProgress: Array<number>
    portionSize: number
}
type MapDispatchToPropsType = {
    follow: (id: number) => void
    unfollow: (id: number) => void
    setCurrentPage: (pageNumber: number) => void
    getUsers: (currentPage: number, pageSize: number) => void
}
type UserPagePropsType = MapStateToPropsType & MapDispatchToPropsType

const mapStateToProps = (state: AppRootStateType): MapStateToPropsType => {
    return {
        users: getUsersSuperSelector(state),
        pageSize: getPageSize(state),
        totalUsersCount: getTotalUsersCount(state),
        currentPage: getCurrentPage(state),
        isFetching: getIsFetching(state),
        followingProgress: getFollowingProgress(state),
        portionSize: state.usersPage.portionSize
    }
}

export default connect(mapStateToProps, {follow, unfollow, setCurrentPage, toggleIsFollowingProgress, getUsers})(UsersContainer)

