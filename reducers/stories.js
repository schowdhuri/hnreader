import * as ACTIONS from "../constants/actions";

const initialState = {
    items: [],
    error: null
};

export default (state=initialState, action) => {
    switch(action.type) {
        case ACTIONS.GET_INDEX:
            if(!action.num)
                return initialState;
            break;
        
        case ACTIONS.GET_INDEX_OK:
            return {
                ...initialState,
                items: action.items
            };

        case ACTIONS.GET_INDEX_ERR:
            return {
                ...initialState,
                error: action.error
            };
            
        default:
            return state;
    }
    return state;
};
