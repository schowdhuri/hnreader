import React from "react";
import { connect } from "react-redux";
import {
    Container,
    Content,
    StyleProvider
} from "native-base";

import getTheme from "../native-base-theme/components";
import * as STORY_TYPES from "../constants/storyTypes";
import * as actions from "../actions";
import { getActiveTab, isLoading } from "../selectors";
import Footer from "../components/Footer";
import Header from "../components/Header";
import List from "../components/ListContainer";

const HomePage = props => {
    const {
        activeTab,
        onChangeTab,
        isLoading,
        onRefreshList
    } = props;
    let selectedType = STORY_TYPES.TOP;
    Object.keys(STORY_TYPES).forEach(key => {
        if(STORY_TYPES[key].id === activeTab)
            selectedType = STORY_TYPES[key];
    });
    return (<StyleProvider style={getTheme()}>
        <Container>
            <Header />
            <List {...props} storyType={selectedType} />
            <Footer activeTab={activeTab} onChangeTab={onChangeTab} />
        </Container>
    </StyleProvider>);
};
HomePage.navigationOptions = {
    header: null,
    headerTintColor: '#fff',
    headerTitleStyle: {
        fontWeight: 'bold',
    },
};

export default connect(state => ({
    activeTab: getActiveTab(state),
    isLoading: isLoading(state)
}), dispatch => ({
    onChangeTab(value) {
        dispatch(actions.changeTab(value));
    }
}))(HomePage);
