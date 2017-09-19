import * as Types from '../action-types';

let initState = {cityName: '上海', username: ''};
export default (state = initState, action) => {
    switch (action.type) {
        case Types.UPDATE_CITY:
            return {
                ...state,
                ...action.data
            };
        case Types.LOGIN_USER_INFO:
             return {
                 ...state,
                 username: action.username 
             }    
        default:
            return state;
    }

};