import React, { Component } from 'react';
import Home from "../containers/Home";
import {
    HashRouter as Router,
    Route,
} from 'react-router-dom';
export default class RouterMap extends Component {
    render() {
        return (
            <Router>
                <div>
                    <Route path={'/'} component={Home}/>
                </div>
            </Router>
        )
    }
}
