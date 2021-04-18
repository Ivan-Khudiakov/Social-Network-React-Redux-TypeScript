import React from "react";
import {Header} from "./Header";
import axios from "axios";
import {connect} from "react-redux";
import {setAuthUserData} from "../../redux/auth-reducer";
import {AppRootStateType} from "../../redux/redux-store";

type DataType = {
    id: number,
    email: string,
    login: string
}

type MapStateToPropsType = {
    data: DataType
}
type MapDispatchToPropsType = {
    setAuthUserData: ( data: DataType ) => void
}
export type AuthPropsType = MapStateToPropsType & MapDispatchToPropsType


class HeaderContainer extends React.Component<AuthPropsType> {
    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/auth/me`,{
            withCredentials: true
        })
            .then(response => {
                if (response.data.resultCode === 0) {
                    this.props.setAuthUserData(response.data)
                }
            })
    }

    render() {
        return <Header {...this.props}/>
    }
}
let mapStateToProps = (state: AppRootStateType): MapStateToPropsType=> ({
    data: state.auth
})
export default connect (mapStateToProps, {setAuthUserData})(HeaderContainer)