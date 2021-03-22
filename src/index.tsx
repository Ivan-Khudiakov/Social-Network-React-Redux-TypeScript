import React from 'react';
import './index.css';
import reportWebVitals from './reportWebVitals';
import store, {StoreType} from './redux/state';

import ReactDOM from "react-dom";
import App from "./App";
import state from "./redux/state";

const rerenderEntireTree = () => {
    const state = store.getState()
    ReactDOM.render(
        <React.StrictMode>
            <App  state={state} addPost={store.addPost.bind(store)} changeNewText={store.changeNewText.bind(store)}/>
        </React.StrictMode>,
        document.getElementById('root')
    );
}

rerenderEntireTree()

store.subscribe(rerenderEntireTree)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
