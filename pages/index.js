import React from "react";
import { createStackNavigator } from "react-navigation";
import { connect } from "react-redux";

import * as actions from "../actions";
import { isLoading, getActiveTab } from "../selectors";

import Stories from "./Stories";
import Story from "./Story";

const HNReader = createStackNavigator({
    Home: {
        screen: Stories
    },
    Story: {
        screen: Story
    }
});

const mapStateToProps = state => ({
    activeTab: getActiveTab(state),
    isLoading: isLoading(state)
});

const mapDispatchToProps = dispatch => ({
    onChangeTab(value) {
        dispatch(actions.changeTab(value));
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(HNReader);
