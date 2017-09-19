import React, { Component } from 'react';
import MHeader from '@/components/MHeader';
import { connect } from 'react-redux';
import * as actions from '@/redux/actions/userInfo'
import LoginComponent from '@/components/LoginComponent'

class Login extends Component {
    constructor() {
        super();
        this.state = {
            login: true
        }
    }
    render() {       
        return (
            <div style={{paddingTop: 48}}>
              <MHeader title='用户登录'/>
              {/* 如果没登录显示登录组件 否则直接跳转到用户界面  */}
              {this.state.login? <LoginComponent login={this.login}/> : null}
            </div>
        )
    }
    login = (username) => {
       this.props.commitLoginInfo(username); // 提交登录信息
    //    this.props.history.push('/user'); // 登录成功后跳转到user
       let backPath = this.props.match.params.router;
       if(backPath){
           this.props.history.push(decodeURIComponent(backPath))
       } else {
           this.props.history.push('/user'); // 默认跳转到用户页
       }
    }
    checkLogin = () => { // 检测是否登录
        if(this.props.userInfo.username) {
            return this.props.history.push('/user');
        }
        this.setState({login: true});
    }
    componentWillMount() { // 加载页面时进行检测
        this.checkLogin();
    }
}

export default connect(
    state => ({...state}),
    actions
)(Login)