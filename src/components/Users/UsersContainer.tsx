import {connect} from "react-redux";
import {Dispatch} from "redux";
import {Users, UserType} from "./Users";
import {followAC, setUsersAC, unfollowAC} from "../../redux/usersReducer";
import {AppRootStateType} from "../../redux/redux-store";


const mapStateToProps = (state: AppRootStateType) => {
    return {
        users: state.usersPage.users
    }
}
const mapDispatchToProps = (dispatch: Dispatch) => {
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
    }
}

const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users)
export default UsersContainer;
