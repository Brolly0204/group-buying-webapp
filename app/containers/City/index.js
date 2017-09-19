import React, { Component } from 'react';
import MHeader from '@/components/MHeader';
import { connect } from 'react-redux';
import * as actions from '@/redux/actions/userInfo'
import ChooseCity from '@/components/ChooseCity'
import './index.less';

class City extends Component {
    render() {
        console.log(this.props);
        return (
            <div className='city-container'>
                <MHeader title='选择城市' />
                {/* 当前城市 */}
                <div className='currentCity'>
                    <h2>{this.props.userInfo.cityName}</h2>
                </div>
                {/* 选择城市 */}
                <ChooseCity changeCity={this.changeCity} />
            </div>
        )
    }
    changeCity = (e) => {
        if (e.target.tagName.toUpperCase() === 'LI') {
            this.props.updateCity({ cityName: e.target.innerHTML });
            this.props.history.push('/');
        }
    }
}

export default connect(
    state => ({ ...state }),
    actions
)(City)