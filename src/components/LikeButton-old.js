import React, { Component } from 'react';
import {bounce} from 'react-animations';
import styled, { keyframes } from 'styled-components';

const BouncyDiv = styled.div`
    animation: 2s ${keyframes`${bounce}`} infinite;
    border: 5px dashed orange;
`;

export default class ReactAnimations extends Component {
    render() {
        return (
            <BouncyDiv><p>LikeButton</p></BouncyDiv>
        );
    }
}