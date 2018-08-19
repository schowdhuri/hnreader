import React from "react";
import styled from "styled-components";
import { View, Text, Linking, TouchableOpacity } from "react-native";
import HTML from 'react-native-render-html';
import ReactNativeHapticFeedback from 'react-native-haptic-feedback';

import hoursAgo from "../utils/hoursAgo";
import Comments from "./Comments";
import { Spinner } from "native-base";

const Wrapper = styled.View``;

const Title = styled.Text`
    color: #4286f4;
    font-weight: 500;
    padding: 5px 0;
`;
const Summary = styled.View`
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    margin: 5px 0 10px;
`;
const Score = styled.Text`
    color: #999;
`;
const User = styled.Text`
    color: #999;
`;
const TimeAdded = styled.Text`
    color: #999;
`;
const HTMLWrapper = styled.View`
    padding: 15px 0;
`;
const Separator = styled.Text`
    color: #999;
`;

class Story extends React.Component {
    componentDidMount() {
        this.props.clearStory();
        this.props.getStory(this.props.navigation.getParam("storyId"));
    }
    openURL = (ev, href) => {
        ReactNativeHapticFeedback.trigger("impactLight", true);
        Linking.openURL(href);
    }
    render() {
        const { isLoading, story } = this.props;
        if(isLoading || !story) {
            return (<Wrapper>
                <Spinner />
            </Wrapper>);
        }
        console.log("Story text: ", story.text)
        return <Wrapper>
            <TouchableOpacity
                onPress={() => this.openURL(null, story.url)}
            >
                <Title>{story.title}</Title>
            </TouchableOpacity>
            <Summary>
                <Score>{story.score} points</Score>
                <Separator>{" | "}</Separator>
                <User>{story.by}</User>
                <Separator>{" | "}</Separator>
                <TimeAdded>{hoursAgo(story.time)}</TimeAdded>
            </Summary>
            {story.text ? <HTMLWrapper>
                <HTML
                    html={story.text}
                    baseFontStyle={{fontSize: 13}}
                    onLinkPreff={this.openURL} />
            </HTMLWrapper> : null}
            <Comments comments={story.comments} />
        </Wrapper>;
    }
}

export default Story;
