import React from "react";
import styled from "styled-components";
import {
    Button,
    Header,
    Left,
    Right,
    Body,
    Title
} from "native-base";
import Icon from "react-native-vector-icons/FontAwesome";
import FeatherIcon from "react-native-vector-icons/Feather";

const AppIcon = styled(Icon)`
    font-size: 22;
    color: #fff;
`;
const BackIcon = styled(FeatherIcon)`
    font-size: 22;
    color: #fff;
`;

export default props => (<Header>
    <Left>
        {props.back
            ? <Button iconLeft transparent onPress={props.onBack}>
                <BackIcon name="arrow-left" />
            </Button>
            : <AppIcon name="hacker-news" />}
    </Left>
    <Body>
        <Title>HN Reader</Title>
    </Body>
    <Right />
</Header>);
