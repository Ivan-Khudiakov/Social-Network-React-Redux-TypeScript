import React from "react";
import {Header} from "./Header";
import {connect} from "react-redux";

import {AppRootStateType} from "../../redux/redux-store";
import {getAuthUserData} from "../../redux/auth-reducer";




type MapStatePropsType = {
    login: string
    isAuth: boolean
}
type MapDispatchPropsType = {
    getAuthUserData: () => void
}
export type AuthPropsType = MapStatePropsType & MapDispatchPropsType


class HeaderContainer extends React.Component<AuthPropsType> {
    componentDidMount() {
        this.props.getAuthUserData()
    }

    render() {
        return <Header {...this.props}/>
    }
}
let mapStateToProps = (state: AppRootStateType): MapStatePropsType=> ({
    login: state.auth.login,
    isAuth: state.auth.isAuth,


})
export default connect (mapStateToProps, {getAuthUserData})(HeaderContainer)