import { CHANGE_TAB } from "../constants/actions";
import { TOP } from "../constants/storyTypes";

const initialState = TOP.id;

export default (state=initialState, action) => {
    switch(action.type) {
        case CHANGE_TAB:
            return action.value;
            
        default:
            return state;
    }
};
