import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./styles/index.scss";
import { Provider } from "react-redux";
import { configureStore } from '@reduxjs/toolkit'
import rootReducer from './reducers'

import { getPosts } from "./actions/post.action";
import { getUser } from "./actions/user.action";


const store = configureStore({
    reducer: rootReducer,
    devTools: true,
})

store.dispatch(getPosts())
store.dispatch(getUser())

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider> , 
    document.getElementById("root")
);
