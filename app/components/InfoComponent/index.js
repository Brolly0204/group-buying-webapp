import React, {Component} from 'react';
import Star from '@/components/Star';
import './index.less';

export default class InfoComponent extends Component {
    render() {
        let {desc, img, price, star, subTitle, title} = this.props.data;
        return (
            <div className='info-component'>
                <div className='info-list'>
                    <img src={img} alt=""/>
                    <div className='info-desc'>
                        <h3>{title}</h3>
                        <div className='info-star'>
                            <Star star={star}/> <span>￥{price}</span>
                        </div>
                        <p>{subTitle}</p>
                    </div>
                </div>
                <div dangerouslySetInnerHTML={{__html: desc}} />
            </div>
        )
    }
}
