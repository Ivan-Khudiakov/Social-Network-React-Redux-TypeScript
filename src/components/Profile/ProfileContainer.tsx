import React, {ComponentType} from "react";
import Profile from "./Profile";
import {connect} from "react-redux";
import {getProfile, getStatus, ProfileType, updateStatus} from "../../redux/profile-reducer";
import { AppRootStateType } from "../../redux/redux-store";
import {RouteComponentProps, withRouter} from "react-router-dom";
import {withAuthRedirect} from "../../hoc/WithAuthRedirect";
import {compose} from "redux";

type PathParamsType = {
    userId: string
}
type MapStateToPropsType = {
    profile: null | ProfileType
    status: string
}
type MapDispatchToPropsType = {
    getProfile: (userId: string ) => void
    getStatus: (userId: string ) => void
    updateStatus: (status: string ) => void
}
type ProfilePagePropsType = MapStateToPropsType & MapDispatchToPropsType
type CommonPropsType = RouteComponentProps<PathParamsType> & ProfilePagePropsType

class ProfileContainer extends React.Component<CommonPropsType> {
    componentDidMount() {
        let userId = this.props.match.params.userId
        if (!userId) {
            userId = "2"
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
    status: state.profilePage.status

})

export default compose<ComponentType>(
    connect(mapStateToProps, {getProfile, getStatus, updateStatus}), withRouter, withAuthRedirect
)(ProfileContainer)