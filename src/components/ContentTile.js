import React from 'react';
import styled from "styled-components";
// import './ContentTile.css';
// import LikeButton from './LikeButton';

const Image = styled.img`
    border: 2px dashed orange;
    margin-bottom: 10px;

    // max-width:100%;
    // height:auto;
    // width: 720px;
    // height: 720px;
`;

const Title = styled.h3`
    // Content
    font-weight: bold;

    // Layout
    padding: 10px;
    border: 2px dashed orange;
    margin-top: 5px;
    text-align: left;
`;

const Description = styled.p`
    border: 2px dashed orange;
    margin-top: 5px;
    margin-bottom: 10px;
    text-align: left;

    padding: 10px;
`;

const Date = styled.p`
    border: 2px dashed orange;
    margin-top: 10px;
    margin-bottom: 10px;
    text-align: left;

    padding: 10px;
`;

const LikeToggle = styled.button`
    /* Adapt the colors based on primary prop */
    background: ${props => props.primary ? "palevioletred" : "white"};
    color: ${props => props.primary ? "white" : "palevioletred"};

    font-size: 1em;
    font-weight: bold;
    width: 150px;
    padding: 10px;
    border: 2px dashed orange;
`;

const Wrapper = styled.div`
    // border: 5px dashed red;
    text-align: left;
    margin: 20px;
    display: grid;
    justify-content: center;
    align-content: center;
    padding: 10px;

    // background-color: black;
    // color: white;

    /* */
    flex: 1 200px;
`;

export default function ContentTile(props) {
    // var result = format(props.date, 'MM/dd/yyyy')
    // console.log(result)

    return (
        <Wrapper className='content-tile'>
            <Image src={props.src} />
            <Title>{props.title}</Title>
            <Description>{props.description}</Description>
            <Date>{props.date}</Date>
            <LikeToggle primary>Love!</LikeToggle>
            {/* <LikeButton /> */}
        </Wrapper>
    );
}