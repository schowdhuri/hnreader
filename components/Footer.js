import React from "react";
import styled from "styled-components";
import {
    Button,
    Footer,
    FooterTab
} from "native-base";
import FAIcon from "react-native-vector-icons/FontAwesome";
import Icon from "react-native-vector-icons/Entypo";
import MCIcon from "react-native-vector-icons/MaterialCommunityIcons";
import { Text } from "react-native";

import * as STORY_TYPES from "../constants/storyTypes";

const ButtonIcon = styled(Icon)`
    font-size: 24;
    color: #404041;
    ${props => props.active ? "color: #ff6600;" : ""}
`;
const ButtonFAIcon = styled(FAIcon)`
    font-size: 24;
    color: #404041;
    ${props => props.active ? "color: #ff6600;" : ""}
`;
const ButtonMCIcon = styled(MCIcon)`
    font-size: 24;
    color: #404041;
    ${props => props.active ? "color: #ff6600;" : ""}
`;
const ButtonCaption = styled(Text)`
    font-size: 10;
    color: #999;
    ${props => props.active ? "color: #ff6600;" : ""}
`;

export default props => {
    const { activeTab, onChangeTab } = props;
    return (<Footer>
      <FooterTab>
        <Button onPress={() => onChangeTab(STORY_TYPES.TOP.id)}>
            <ButtonMCIcon
                name="fire"
                active={activeTab === STORY_TYPES.TOP.id}></ButtonMCIcon>
            <ButtonCaption
                active={activeTab === STORY_TYPES.TOP.id}>Top</ButtonCaption>
        </Button>
        <Button onPress={() => onChangeTab(STORY_TYPES.NEW.id)}>
            <ButtonIcon
                name="star-outlined"
                active={activeTab === STORY_TYPES.NEW.id}></ButtonIcon>
            <ButtonCaption
                active={activeTab === STORY_TYPES.NEW.id}>New</ButtonCaption>
        </Button>
        <Button onPress={() => onChangeTab(STORY_TYPES.ASK.id)}>
            <ButtonFAIcon
                name="question"
                active={activeTab === STORY_TYPES.ASK.id}></ButtonFAIcon>
            <ButtonCaption
                active={activeTab === STORY_TYPES.ASK.id}>Ask</ButtonCaption>
        </Button>
        <Button onPress={() => onChangeTab(STORY_TYPES.SHOW.id)}>
            <ButtonIcon
                name="emoji-happy"
                active={activeTab === STORY_TYPES.SHOW.id}></ButtonIcon>
            <ButtonCaption
                active={activeTab === STORY_TYPES.SHOW.id}>Show</ButtonCaption>
        </Button>
        <Button onPress={() => onChangeTab(STORY_TYPES.JOBS.id)}>
            <ButtonFAIcon
                name="briefcase"
                active={activeTab === STORY_TYPES.JOBS.id}></ButtonFAIcon>
            <ButtonCaption
                active={activeTab === STORY_TYPES.JOBS.id}>Jobs</ButtonCaption>
        </Button>
      </FooterTab>
    </Footer>);
};