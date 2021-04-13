import {connect} from "react-redux";
import {Dispatch} from "redux";
import {followAC, setCurrentPageAC, setTotalUsersCountAC, setUsersAC, unfollowAC, UserType} from "../../redux/usersReducer";
import {AppRootStateType} from "../../redux/redux-store";
import {Users} from "./Users";


export type MapStateToPropsType = {
    users: Array<UserType>
    pageSize: number
    totalUsersCount: number
    currentPage: number

}
export type MapDispatchToPropsType = {
    follow: (id: number) => void
    unfollow: (id: number) => void
    setUsers: (users: Array<UserType>) => void
    setCurrentPage: (pageNumber: number) => void
    setTotalUsersCount: (totalCount: number) => void
}

export type UserPagePropsType = MapStateToPropsType & MapDispatchToPropsType

const mapStateToProps = (state: AppRootStateType): MapStateToPropsType => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage
    }
}
const mapDispatchToProps = (dispatch: Dispatch): MapDispatchToPropsType => {
    return {
        follow: (id: number) => {
            dispatch(followAC(id))
        },
        unfollow: (id: number) => {
            dispatch(unfollowAC(id))
        },
        setUsers: (users: UserType[]) => {
            dispatch(setUsersAC(users))
        },
        setCurrentPage: (pageNumber: number) => {
            dispatch(setCurrentPageAC(pageNumber))
        },
        setTotalUsersCount: (totalCount: number) => {
            dispatch(setTotalUsersCountAC(totalCount))
        }

    }
}

const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users)
export default UsersContainer;
