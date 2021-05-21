import React from "react";
import {Header} from "./Header";
import {connect} from "react-redux";
import {AppRootStateType} from "../../redux/redux-store";
import {logout} from "../../redux/auth-reducer";

type MapStatePropsType = {
    login: string | null
    isAuth: boolean
}
type MapDispatchPropsType = {
    logout: () => void
}
export type AuthPropsType = MapStatePropsType & MapDispatchPropsType


class HeaderContainer extends React.Component<AuthPropsType> {


    render() {
        return <Header {...this.props}/>
    }
}
let mapStateToProps = (state: AppRootStateType): MapStatePropsType=> ({
    login: state.auth.login,
    isAuth: state.auth.isAuth,
})

export default connect (mapStateToProps, {logout})(HeaderContainer)