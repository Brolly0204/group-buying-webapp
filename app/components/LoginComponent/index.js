import React, { Component } from 'react';
import 'antd/dist/antd.css'
import { Button, Input, Row, Col } from 'antd'
import './index.less'

export default class LoginComponent extends Component {
    
    constructor() {
        super();
        this.state = { val: '' };
    }

    render() {
        return (
            <div className='login-component'>
                <Row className='col-'>
                    <Col span={18} offset={3}>
                        <Input type="text"
                            value={this.state.val}
                            onChange={this.changeVal.bind(this)}
                            placeholder='请输入用户名'
                        />
                    </Col>
                </Row>
                <Row className='col-'>
                <Col span={18} offset={3}>
                    <Input type="text"
                        value={this.state.val}
                        onChange={this.changeVal.bind(this)}
                        placeholder='请输入用户名'
                    />
                </Col>
            </Row>
                <Button type='primary' onClick={this.login}>登录</Button>
            </div>
        )
    }
    login = (e) => {
        if(/^\s*$/.test(this.state.val)) {
            return alert('请将用户信息填写完整');
        }
         this.props.login(this.state.val);
    }
    changeVal(e) {
        this.setState({ val: e.target.value })
    }
}

