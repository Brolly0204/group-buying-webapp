import React, {Component} from 'react';
import './index.less';

export default class LoadMore extends Component {
    render() {
        return (
            <div className='has-more' ref={v=> this._v = v}>
                {
                    this.props.hasMore ? <div onClick={this.props.loadMore}>{
                            this.props.isLoading ? <h3>正在加载中...</h3> : <h3>加载更多</h3>
                        }</div> :
                        <div>我是有底线的~~</div>
                }
            </div>
        )
    }

    scrollLoad = () => {
        // console.log(this._v.getBoundingClientRect()); // 方法返回元素的大小及其相对于视口的位置
        this.timer && window.clearTimeout(this.timer);
        this.timer = setTimeout(() => {
            let winH = window.screen.height;
            let sTop = document.documentElement.scrollTop;
            let sHei = document.documentElement.scrollHeight;
            if (sTop + winH > sHei - 5 && !this.props.isLoading) {
                this.props.loadMore();
            }
        }, 30);
    };

    componentDidMount() {
        window.addEventListener('scroll', this.scrollLoad)
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this.scrollLoad)
    }
}
