import React from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import {Route} from "react-router-dom";
import UsersContainer from "./components/Users/UsersContainer";
import HeaderContainer from "./components/Header/HeaderConteiner";
import Login from "./components/Login/Login";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";
import {connect} from "react-redux";
import {initializeApp} from "./redux/app-reducer";
import {AppRootStateType} from "./redux/redux-store";
import {Preloader} from "./common/Preloader/Preloader";

type MapStateToPropsType = {
    initialized: boolean
}
type MapDispatchToProps ={
    initializeApp: () => void
}
type AppPropsType = MapStateToPropsType & MapDispatchToProps

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
                    <Route path='/dialogs' render={() => <DialogsContainer/>}/>
                    <Route path='/profile/:userId?' render={() => <ProfileContainer/>}/>
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



