import React from "react";
import Profile from "./Profile";
import {connect} from "react-redux";
import {getProfile, ProfileType} from "../../redux/profile-reducer";
import { AppRootStateType } from "../../redux/redux-store";
import {RouteComponentProps, withRouter } from "react-router-dom";

type PathParamsType = {
    userId: string
}
type MapStateToPropsType = {
    profile: null | ProfileType
}
type MapDispatchToPropsType = {
    getProfile: (userId: string ) => void
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
    }

    render() {
        return (
            <Profile {...this.props} profile={this.props.profile}/>
        )
    }
}

let mapStateToProps = (state: AppRootStateType): MapStateToPropsType => ({
    profile: state.profilePage.profile
})
let WithUrlDataContainerComponent = withRouter(ProfileContainer)
export default connect(mapStateToProps, {getProfile})(WithUrlDataContainerComponent)