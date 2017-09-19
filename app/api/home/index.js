import {get, post} from '../index';

// 获取广告数据
export const getAD = () => {
    return get('/api/ad');
};

// 获取商品列表
export const getList = (city, page) => {
    return get(`/api/list/${city}/${page}`)
};

