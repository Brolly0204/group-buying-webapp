import * as Types from '../action-types';

let initState = {
    data: []
};

export default (state = initState, action) => {
    switch (action.type) {
        case Types.GET_SHOP_LIST:
            return {
                ...state,
                data: [
                    ...state.data,
                    ...action.data
                ]
            };
        default:
            return state;
    }
}