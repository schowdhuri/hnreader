import React from "react";
import styled from "styled-components";
import { View, Text } from "react-native";

import hoursAgo from "../utils/hoursAgo";
import Comments from "./Comments";
import { Spinner } from "native-base";

const Wrapper = styled.View``;

const Title = styled.Text`
`;
const Summary = styled.View`
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    margin-top: 5px;
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
const TextContent = styled.Text`
    padding: 15px 0;
    font-size: 11;
`;
const Separator = styled.Text`
    color: #999;
`;

class Story extends React.Component {
    componentDidMount() {
        this.props.clearStory();
        this.props.getStory(this.props.navigation.getParam("storyId"));
    }
    render() {
        const { isLoading, story } = this.props;
        if(isLoading || !story) {
            return (<Wrapper>
                <Spinner />
            </Wrapper>);
        }
        return <Wrapper>
            <Title href={story.url} target="_blank">{story.title}</Title>
            <Summary>
                <Score>{story.score} points</Score>
                <Separator>{" | "}</Separator>
                <User>{story.by}</User>
                <Separator>{" | "}</Separator>
                <TimeAdded>{hoursAgo(story.time)}</TimeAdded>
            </Summary>
            <TextContent dangerouslySetInnerHTML={{__html: story.text}} />
            <Comments comments={story.comments} />
        </Wrapper>;
    }
}

export default Story;
