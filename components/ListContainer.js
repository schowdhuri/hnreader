import { connect } from "react-redux";

import * as actions from "../actions";
import { getIndex, isLoading } from "../selectors";
import List from "./List";

const mapStateToProps = state => ({
    isLoading: isLoading(state),
    stories: getIndex(state)
});

const mapDispatchToProps = dispatch => ({
    getIndex(type) {
        dispatch(actions.getIndex(type));
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
)(List);
