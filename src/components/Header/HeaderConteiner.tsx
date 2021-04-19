import React from "react";
import {Header} from "./Header";
import axios from "axios";
import {connect} from "react-redux";
import {setAuthUserData} from "../../redux/auth-reducer";
import {AppRootStateType} from "../../redux/redux-store";



type MapStatePropsType = {
    login: string
    isAuth: boolean
}
type MapDispatchPropsType = {
    setAuthUserData: (id: number, login: string, email: string) => void
}
export type AuthPropsType = MapStatePropsType & MapDispatchPropsType


class HeaderContainer extends React.Component<AuthPropsType> {
    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/auth/me`,{
            withCredentials: true
        })
            .then(response => {
                if (response.data.resultCode === 0) {
                    let {id, login, email} = response.data.data
                    this.props.setAuthUserData(id, login, email)
                }
            })
    }

    render() {
        return <Header {...this.props}/>
    }
}
let mapStateToProps = (state: AppRootStateType): MapStatePropsType=> ({
    login: state.auth.login,
    isAuth: state.auth.isAuth,


})
export default connect (mapStateToProps, {setAuthUserData})(HeaderContainer)