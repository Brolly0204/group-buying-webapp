import React, { Component } from 'react';
import {
    HashRouter as Router,
    Route,
    Switch,
    Redirect
} from 'react-router-dom';
import Home from "../containers/Home";
import Detail from "../containers/Detail/index";
import User from "../containers/User/index";
import Login from "../containers/Login/index";
import City from "../containers/City";

export default class RouterMap extends Component {
    render() {
        return (
            <Router>
                <Switch>
                    <Route exact path={'/'} component={Home} />
                    <Route path={'/detail/:id'} component={Detail} />
                    <Route path={'/user'} component={User} />
                    {/* 跳转到登录也需要把之前的路由作为 路径参数传递过来 登录完成后再跳回到之前路由 */}
                    <Route path={'/login/:router?'} component={Login} />
                    <Route path={'/city'} component={City} />

                    <Redirect from={'*'} to={'/'} />
                </Switch>
            </Router>
        )
    }
}
