import React from "react";
import styled from "styled-components";
import { View, Text } from "react-native";
import { ListItem } from "native-base";

import hoursAgo from "../utils/hoursAgo";

const Story = styled(ListItem)`
    padding: 10px 15px 10px 0;
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

class StoryListItem extends React.PureComponent {
    openStory = () => {
        this.props.openStory(this.props.story.id);
    }
    render() {
        const { story } = this.props;
        return (<Story key={story.id} onPress={this.openStory}>
            <View>
                <Title>{story.title}</Title>
                <Summary>
                    <Score>{story.score} pt</Score>
                    <Separator>{" | "}</Separator>
                    <User>{story.by}</User>
                    <Separator>{" | "}</Separator>
                    <TimeAdded>{hoursAgo(story.time)}</TimeAdded>
                </Summary>
            </View>
        </Story>);
    }
}

export default StoryListItem;
