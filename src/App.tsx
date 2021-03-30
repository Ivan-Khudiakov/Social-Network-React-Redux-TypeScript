import React from 'react';
import './App.css';
import Header from '../src/components/Header/Header'
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import {Route, BrowserRouter} from "react-router-dom";
import {ActionsType, RootStateType} from "./redux/store";
import DialogsContainer from "./components/Dialogs/DiaogsContainer";


export type AppPropsType = {
    state: RootStateType
    dispatch: (action: ActionsType) => void
}

function App(props: AppPropsType) {
    return (
        <BrowserRouter>
            <div className='app-wrapper'>
                <Header/>
                <Navbar/>
                <div className='app-wrapper-content'>
                    <Route path='/dialogs' render={() => <DialogsContainer dialogsPage={props.state.dialogsPage}
                                                                  dispatch={props.dispatch}/>}/>
                    <Route path='/profile' render={() => <Profile profilePage={props.state.profilePage}
                                                                  dispatch={props.dispatch}
                    />}/>
                </div>
            </div>
        </BrowserRouter>
    )
}

export default App;
