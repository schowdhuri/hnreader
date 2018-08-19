import * as ACTIONS from "../constants/actions";

const initialState = {
    error: null,
    value: null
};

export default (state=initialState, action) => {
    switch(action.type) {
        case ACTIONS.GET_STORY:
            return {
                ...initialState
            };

        case ACTIONS.GET_STORY_OK:
            return {
                ...initialState,
                value: action.story
            };

        case ACTIONS.GET_STORY_ERR:
            return {
                ...initialState,
                error: action.error
            };

        case ACTIONS.CLEAR_STORY:
            return initialState;
            
        default:
            return state;
    }
};
