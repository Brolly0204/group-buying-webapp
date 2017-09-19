import React, {Component} from 'react';
import RouterMap from "../routes/index";
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux'
import * as actions from '@/redux/actions/userInfo'
import util from '@/common/util';

class App extends Component {
    constructor() {
        super();
        this.state = {done: false};
    }

    componentWillMount() {
        // console.log(this.props);

    }

    render() {

        return (
            <div style={{height: '100%'}}>
                {
                    this.state.done ? <RouterMap/> : <div>正在加载...</div>
                }
            </div>
        )
    }

    componentDidMount() {
        // 获取本地存储城市
        let cityName = util.getStorage('cityName') || '杭州';
        this.props.userActions.updateCity({cityName});
        this.setState({done: true});
        // setTimeout(() => this.setState({done: true}), 1000);
    }
}

export default connect(
    state => ({...state}),
    dispatch => ({
        userActions: bindActionCreators(actions, dispatch)
    })

    // actions
)(App);
