import React from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import {Route} from "react-router-dom";
import UsersContainer from "./components/Users/UsersContainer";
import HeaderContainer from "./components/Header/HeaderConteiner";
import Login from "./components/Login/Login";
import {connect} from "react-redux";
import {initializeApp} from "./redux/app-reducer";
import {AppRootStateType} from "./redux/redux-store";
import {Preloader} from "./common/Preloader/Preloader";
import {withSuspense} from "./hoc/WithSuspense";

const DialogsContainer = React.lazy(() => import  ("./components/Dialogs/DialogsContainer"))
const ProfileContainer = React.lazy(() => import  ("./components/Profile/ProfileContainer"))


type MapStateToPropsType = {
    initialized: boolean
}
type MapDispatchToProps ={
    initializeApp: () => void
}
type AppPropsType = MapStateToPropsType & MapDispatchToProps

const SuspendedDialogs = withSuspense(DialogsContainer)
const SuspendedProfile = withSuspense(ProfileContainer)

class App extends React.Component<AppPropsType>{
    componentDidMount() {
        this.props.initializeApp()
    }
    render() {
        if (!this.props.initialized) {
            return <Preloader/>
        }
        return (
            <div className='app-wrapper'>
                <HeaderContainer/>
                <Navbar/>
                <div className='app-wrapper-content'>
                    <Route path='/dialogs' render={() => <SuspendedDialogs/>}/>
                    <Route path='/profile/:userId?' render={() => <SuspendedProfile/>}/>
                    <Route path='/users' render={() => <UsersContainer/>}/>
                    <Route path='/login' render={() => <Login/>}/>
                </div>
            </div>
        )
    }
}

const MapStateToProps = (state: AppRootStateType) => ({
    initialized: state.app.initialized
})

export default connect (MapStateToProps,{initializeApp})(App)



