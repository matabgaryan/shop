import React from 'react';
import AppWrapper from "./containners/wrappers/AppWrapper";
import './configs/fonts.scss'
import {BrowserRouter} from "react-router-dom";
import {Provider} from "react-redux";
import {store} from "./store/store";

function App() {
    return (
        <>
            <BrowserRouter basename='/shop'>
                <Provider store={store}>
                    <AppWrapper />
                </Provider>
            </BrowserRouter>
        </>
    );
}

export default App;
