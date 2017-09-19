import React, { Component } from 'react';
import HomeHeader from "@/components/HomeHeader";
import Swiper from "@/components/Swiper/index";
import Ad from "./subpage/Ad";
import { connect } from 'react-redux';
import * as Types from '@/redux/action-types'
import List from "./subpage/List";
import util from '@/common/util'

class Home extends Component {
    componentWillMount() {
        // console.log(this.props);
    }
    render() {
        return (
            <div>
                <HomeHeader cityName={this.props.userInfo.cityName}/>
                <Swiper/>
                <Ad/>
                <List cityName={this.props.userInfo.cityName}/>
            </div>
        )
    }
    componentDidMount() {
        // document.documentElement.scrollTop = util.getStorage('homeScroll')
    }

    componentWillUnmount() {
        // util.setStorage('homeScroll', document.documentElement.scrollTop)
    }
}
export default connect(
    state => ({...state}),
    {
    }
)(Home);