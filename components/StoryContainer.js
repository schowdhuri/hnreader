import { connect } from "react-redux";

import * as actions from "../actions";
import { getStory, isLoading } from "../selectors";
import Story from "./Story";

const mapStateToProps = state => ({
    story: getStory(state),
    isLoading: isLoading(state)
});

const mapDispatchToProps = dispatch => ({
    clearStory() {
        dispatch(actions.clearStory());
    },
    getStory(id) {
        dispatch(actions.getStory(id));
    }
});

const mergeProps = (stateProps, dispatchProps, ownProps) => ({
    ...stateProps,
    ...dispatchProps,
    ...ownProps
});

export default connect(
    mapStateToProps,
    mapDispatchToProps,
    mergeProps
)(Story);
