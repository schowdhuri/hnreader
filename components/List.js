import React from "react";
import styled from "styled-components";
import { View, Text, TouchableOpacity } from "react-native";
import { Spinner } from "native-base";

import hoursAgo from "../utils/hoursAgo";

const Wrapper = styled.View`
    padding: 10px;
`;
const Story = styled.View`
    background: #f2f2f2;
    border-radius: 2px;
    margin-bottom: 2px;
    padding: 10px 15px;
`;
const Title = styled.Text``;
const Summary = styled.View`
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    margin-top: 5px;
`;
const Separator = styled.Text`
    color: #999;
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
const Discuss = styled.Text`
    color: #999;
`;

class List extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            storyType: null
        };
    }
    static getDerivedStateFromProps(nextProps, prevState) {
        if(nextProps.storyType !== prevState.storyType) {
            return { storyType: nextProps.storyType };
        } else {
            return null;
        }
    }
    
    componentDidMount() {
        this.props.getIndex(this.state.storyType);
    }
    componentDidUpdate(prevProps, prevState) {
        if(prevState.storyType !== this.state.storyType)
            this.props.getIndex(this.state.storyType);
    }
    openStory = storyId => {
        console.log("Open ", storyId)
        this.props.navigation.navigate("Story", {
            storyId
        });
    }
    render() {
        const { stories, isLoading } = this.props;
        return <Wrapper>
            {stories.map(story => <Story key={story.id}>
                <TouchableOpacity onPress={() => this.openStory(story.id)}>
                    <Title>{story.title}</Title>
                    <Summary>
                        <Score>{story.score} pt</Score>
                        <Separator>{" | "}</Separator>
                        <User>{story.by}</User>
                        <Separator>{" | "}</Separator>
                        <TimeAdded>{hoursAgo(story.time)}</TimeAdded>
                    </Summary>
                </TouchableOpacity>
            </Story>)}
            {isLoading ? <Spinner /> : null}
        </Wrapper>;
    }
}

export default List;
