import React from 'react';
import './App.css';
import Header from '../src/components/Header/Header'
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import Dialogs from "./components/Dialogs/Dialogs";
import {Route, BrowserRouter} from "react-router-dom";
import {RootStateType} from "./redux/state";


export type AppPropsType = {
    state: RootStateType
    addPost: (postText:string) => void
    changeNewText: (newText:string) => void
}

function App(props: AppPropsType) {
    return (
        <BrowserRouter>
            <div className='app-wrapper'>
                <Header/>
                <Navbar/>
                <div className='app-wrapper-content'>
                    <Route path='/dialogs' render={() => <Dialogs dialogsPage={props.state.dialogsPage}/>} />
                    <Route path='/profile' render={() => <Profile profilePage={props.state.profilePage}
                                                                  addPost={props.addPost}
                                                                  changeNewText={props.changeNewText}
                    />} />
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
