import React, {Component} from 'react';
import {getAD} from "../../../api/home/index";
import './index.less';
import Loading from "../../../components/Loading/index";

export default class Ad extends Component {
    constructor() {
        super();
        this.state = {data: []}
    }

    render() {
        let {data} = this.state;
        // let data = [];
        return (
            <div className='ad-container'>
                <h3>超值特惠</h3>
                {
                    data.length ? data.map((item, index) => (
                        <a href={item.link} key={index}>
                            <img src={item.img} title={item.title}/>
                        </a>
                    )) : <Loading/>
                }
            </div>
        )
    }

    componentDidMount() {
        getAD().then(data => this.setState({data}));
    }
}
