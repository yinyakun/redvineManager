import React from 'react';
import {HashRouter, Route, Switch} from 'react-router-dom';
import Login from './login/login.js';
import Home from './home/home.js';
import Message from "./leavemassage/message.js";
import Product from "./product/product.js";

const BasicRoute = () => (
    <HashRouter>
        <Switch>
            <Route exact path="/" component={Login}/>
            <Route exact path="/home" component={Home}/>
            <Route exact path="/login" component={Login}/>
          
        </Switch>
    </HashRouter>
);
export default BasicRoute;