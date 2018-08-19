import React from "react";
import styled from "styled-components";
import { FlatList, View } from "react-native";
import ReactNativeHapticFeedback from "react-native-haptic-feedback";

import StoryListItem from "./ListItem";

const Wrapper = styled.View`
    flex: 1
`;

class StoriesList extends React.Component {
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
        ReactNativeHapticFeedback.trigger("impactLight", true);
        this.props.navigation.navigate("Story", {
            storyId
        });
    }
    refreshList = () => {
        if(!this.props.isLoading) {
            this.props.getIndex(this.state.storyType);
        }
    };
    loadMore = () => {
        const { isLoading, stories, getIndex } = this.props;
        if(!isLoading) {
            getIndex(this.state.storyType, stories.length);
        }
    };
    renderItem = ({ item }) => (
        <StoryListItem story={item} openStory={this.openStory} />
    );
    render() {
        const { stories, isLoading } = this.props;
        return <Wrapper>
            <FlatList
                data={stories}
                renderItem={this.renderItem}
                keyExtractor={s => `${s.id}`}
                refreshing={isLoading}
                onRefresh={this.refreshList}
                onEndReached={this.loadMore}
                onEndReachedThreshold={0.1} />
        </Wrapper>;
    }
}

export default StoriesList;
