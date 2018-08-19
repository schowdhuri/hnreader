import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { Spinner } from "native-base";
import { View, Text } from "react-native";

const OverlayBG = styled.View`
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: 99999;
    background: rgba(0, 0, 0, 0.4);
    opacity: 0.01;
    ${props => props.show
        ? "top: 0;opacity: 1;"
        : ""}
`;
const Box = styled.View`
    position: absolute;
    top: 50%;
    left: 0;
    right: 0;
    margin-top: -24px;
    padding: 16px;
`;
const Message = styled.Text`
    margin-top: 10px;
    color: #e3e3e3;
`;

const LoadingOverlay = ({ loading, message }) => {
    return (<OverlayBG show={loading}>
        {loading
            ? <Box>
                <Spinner />
                <Text>{message || "Loading ..."}</Text>
            </Box>
            : null}
    </OverlayBG>);
};
LoadingOverlay.propTypes = {
    loading: PropTypes.bool.isRequired,
    message: PropTypes.string
};

export default LoadingOverlay;