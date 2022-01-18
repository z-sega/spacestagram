import React from 'react';
import styled from "styled-components";
// import LikeButton from './LikeButton';

const Image = styled.img`
    border: 5px dashed orange;
    margin-bottom: 10px;
    // max-width:100%;
    // height:auto;
    // width: 720px;
    // height: 720px;
`;

const Title = styled.h3`
    border: 5px dashed orange;
    margin-top: 5px;
    text-align: left;
`;

const Description = styled.p`
    border: 5px dashed orange;
    margin-top: 5px;
    margin-bottom: 10px;
    text-align: left;
    
`;

const Date = styled.p`
    border: 5px dashed orange;
    margin-top: 10px;
    margin-bottom: 10px;
    text-align: left;
`;

const LikeToggle = styled.button`
    /* Adapt the colors based on primary prop */
    background: ${props => props.primary ? "palevioletred" : "white"};
    color: ${props => props.primary ? "white" : "palevioletred"};

    font-size: 1em;
    margin: 1em;
    padding: 0.25em 1em;
    border: 2px solid palevioletred;
    border-radius: 3px;
`;

const Wrapper = styled.div`
    border: 5px dashed red;
    text-align: left;
    margin: 20px;
    display: grid;
    justify-content: center;
    align-content: center;

    /* */
    flex: 1 200px;
`;

export default function ContentTile(props) {
    return (
        <Wrapper>
            <Image src={props.src} />
            <Title>{props.title}</Title>
            <Description>{props.description}</Description>
            <Date>{props.date}</Date>
            <LikeToggle primary>Love!</LikeToggle>
        </Wrapper>
    );
}