import React from "react";
import styled from "styled-components";
import { View, Text } from "react-native";
import HTML from 'react-native-render-html';

import hoursAgo from "../utils/hoursAgo";

const Wrapper = styled.View``;

const User = styled.Text`
`;

const TimeAdded = styled.Text`
`;
const TextContent = styled(HTML)`
    padding: 10px 0;
    font-size: 11;
`;
const Comment = styled.View`
    background: #f2f2f2;
    border-radius: 2;
    border: solid 1px #e3e3e4;
    margin-bottom: 10px;
`;
const Header = styled.View`
    border-radius: 2;
    background: #e3e3e4;
    padding: 5px 10px;
    display: flex;
    flex-direction: row;
`;
const Content = styled.View`
    padding: 0 10px;
`;
const Separator = styled.Text`
    color: #999;
`;

const Comments = props => {
    const { comments } = props;
    if(!comments)
        return null;
    return (<Wrapper>
        {comments
            .filter(c => c.text)
            .map(comment => (<Comment key={comment.id}>
                <Header>
                    <User>{comment.by}</User>
                    <Separator>{" | "}</Separator>
                    <TimeAdded>{hoursAgo(comment.time)}</TimeAdded>
                </Header>
                <Content>
                    <TextContent
                        html={comment.text}
                        containerStyle={{fontSize: 11}} />
                    {comment.comments
                        ? <Comments
                            comments={comment.comments} />
                        : null}
                </Content>
        </Comment>))}
    </Wrapper>);
};

export default Comments;