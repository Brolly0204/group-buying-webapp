import { get, post } from '../index';

// 获取商户信息
export const getInfo = id => {
    return get(`/api/detail/info/${id}`);
};

// 获取评论列表
export const getComment = (id, page) => {
    return get(`/api/detail/comment/${id}/${page}`);
};