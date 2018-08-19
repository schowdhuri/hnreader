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
import Story from "../components/StoryContainer";

const StoryPage = props => (<StyleProvider style={getTheme()}>
    <Container>
        <Header back={true} onBack={() => props.navigation.goBack()} />
        <Content padder>
            <Story {...props} storyId={props.storyId} />
        </Content>
    </Container>
</StyleProvider>);
StoryPage.navigationOptions = {
    header: null
};

export default connect(state => ({
    activeTab: getActiveTab(state)
}), dispatch => ({
    onChangeTab(value) {
        dispatch(actions.changeTab(value));
    }
}))(StoryPage);
