## Extra libs


"react-redux": "5.0.7",
"react-navigation": "^2.11.2",s
"redux": "4.0.0",
"redux-saga": "0.16.0",
"reselect": "3.0.1",
"shortid": "2.2.12",
"styled-components": "3.4.2"



### Undecided

"@fortawesome/fontawesome-svg-core": "1.2.0-14",
"@fortawesome/free-solid-svg-icons": "5.1.0-11",
"@fortawesome/react-fontawesome": "0.1.0-11",




                <Tab heading="Best">
                    <ListView storyType="best" />
                </Tab>
                <Tab heading="Top">
                    <ListView storyType="top" />
                </Tab>
                <Tab heading="New">
                    <ListView storyType="new" />
                </Tab>
                <Tab heading="AskHN">
                    <ListView storyType="ask" />
                </Tab>
                <Tab heading="ShowHN">
                    <ListView storyType="show" />
                </Tab>
                <Tab heading="Jobs">
                    <ListView storyType="jobs" />
                </Tab>



import React from "react";
import styled from "styled-components";
import {
    Button,
    Container,
    Header,
    Content,
    Tab,
    Tabs,
    Left,
    Right,
    Body,
    Icon,
    Title,
    Footer,
    FooterTab
} from "native-base";
import { Text } from "react-native";

import ListView from "../pages/Stories";
import StoryView from "../pages/Story";
import LoadingOverlay from "./LoadingOverlay";

const Wrapper = styled.View``;

const App = props => {
    return <Container>
        <Header>
            <Left />
            <Body>
                <Title>HN Reader</Title>
            </Body>
            <Right />
        </Header>
        <Content>
            <ListView storyType="top" />
        </Content>
        <Footer>
          <FooterTab>
            <Button>
              <Text>Top</Text>
            </Button>
            <Button>
              <Text>New</Text>
            </Button>
            <Button>
              <Text>Ask</Text>
            </Button>
            <Button>
              <Text>Show</Text>
            </Button>
            <Button>
              <Text>Jobs</Text>
            </Button>
          </FooterTab>
        </Footer>
    </Container>
};

export default App;
