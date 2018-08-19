import React from "react";
import { connect } from "react-redux";
import {
    Container,
    Content,
    StyleProvider
} from "native-base";
import getTheme from "../native-base-theme/components";

import * as actions from "../actions";
import { getActiveTab } from "../selectors";
import Header from "../components/Header";
import Footer from "../components/Footer";
import * as STORY_TYPES from "../constants/storyTypes";
import List from "../components/ListContainer";

const HomePage = props => {
    const { activeTab, onChangeTab } = props;
    let selectedType = STORY_TYPES.TOP;
    Object.keys(STORY_TYPES).forEach(key => {
        if(STORY_TYPES[key].id === activeTab)
            selectedType = STORY_TYPES[key];
    });
    return (<StyleProvider style={getTheme()}>
        <Container>
            <Header />
            <Content>
                <List {...props} storyType={selectedType} />
            </Content>
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
    activeTab: getActiveTab(state)
}), dispatch => ({
    onChangeTab(value) {
        dispatch(actions.changeTab(value));
    }
}))(HomePage);
