import React, {ComponentType} from "react";
import Profile from "./Profile";
import {connect} from "react-redux";
import {getProfile, getStatus, ProfileType, updateStatus} from "../../redux/profile-reducer";
import { AppRootStateType } from "../../redux/redux-store";
import {RouteComponentProps, withRouter} from "react-router-dom";
import {withAuthRedirect} from "../../hoc/WithAuthRedirect";
import {compose} from "redux";

type PathParamsType = {
    userId: string | undefined
}
type MapStateToPropsType = {
    profile: null | ProfileType
    status: string
    authorizedUserId: string | undefined
    isAuth: boolean
}
type MapDispatchToPropsType = {
    getProfile: (userId: string | undefined) => void
    getStatus: (userId: string | undefined) => void
    updateStatus: (status: string | undefined) => void
}
type ProfilePagePropsType = MapStateToPropsType & MapDispatchToPropsType
type CommonPropsType = RouteComponentProps<PathParamsType> & ProfilePagePropsType

class ProfileContainer extends React.Component<CommonPropsType> {
    componentDidMount() {
        let userId = this.props.match.params.userId
        if (!userId) {
            userId = this.props.authorizedUserId
            if(!userId) {
                this.props.history.push('/login')
            }
        }
        this.props.getProfile(userId)
        this.props.getStatus(userId)
    }

    render() {
        return (
            <Profile profile={this.props.profile} status={this.props.status} updateStatus={this.props.updateStatus}/>
        )
    }
}

let mapStateToProps = (state: AppRootStateType): MapStateToPropsType => ({
    profile: state.profilePage.profile,
    status: state.profilePage.status,
    authorizedUserId: state.auth.id,
    isAuth: state.auth.isAuth

})

export default compose<ComponentType>(
    connect(mapStateToProps, {getProfile, getStatus, updateStatus}), withRouter, withAuthRedirect
)(ProfileContainer)