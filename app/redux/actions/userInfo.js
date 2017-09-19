import * as Types from '../action-types';

// 更新city action
export const updateCity = (data) => (
    {
        type: Types.UPDATE_CITY,
        data
    }
);

// 获取商户列表
export const getShopList = (data) => (
    {
        type: Types.GET_SHOP_LIST,
        data
    }
);


// 提交登录用户信息
export const commitLoginInfo = username =>(
    {
        type: Types.LOGIN_USER_INFO,
        username
    }
)