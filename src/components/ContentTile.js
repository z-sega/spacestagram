import React from 'react';
import styled from "styled-components";
// import './ContentTile.css';
import LikeButton from './LikeButton';

const Image = styled.img`
    border: 2px dashed orange;
    margin-bottom: 5px;

    :hover {
        border: 4px dashed #1363EC;
    }
`;

const Title = styled.h3`
    // Content
    font-weight: bold;

    // Decorations
    :hover {
        text-decoration: underline #1363EC;
    }
    
    // Layout
    padding: 10px;
    border: 2px dashed orange;
    margin-top: 5px;
    margin-bottom: 5px;
    text-align: left;
`;

const Description = styled.p`
    font-family: 'Roboto Slab', serif;
    border: 2px dashed orange;
    margin-top: 5px;
    margin-bottom: 5px;
    text-align: left;
    padding: 10px;
`;

const Date = styled.p`
    font-weight: bold;
    // border: 2px dashed orange;
    margin-top: 5px;
    margin-bottom: 5px;
    text-align: right;


    padding: 10px;
    flex: 5;
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

const ButtonAndDate = styled.div`
    border: 2px dashed orange;
    display: flex;

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

    // function linkify(text) {
    //     var urlRegex =/(\b(https?|ftp|file):\/\/[-A-Z0-9+&@#\/%?=~_|!:,.;]*[-A-Z0-9+&@#\/%=~_|])/ig;
    //     return text.replace(urlRegex, function(url) {
    //         return '<a href="' + url + '">' + url + '</a>';
    //     });
    // }

    // const description = linkify(props.description);

    return (
        <Wrapper className='content-tile'>
            <Image src={props.src} />
            <Title>{props.title}</Title>
            <Description>{props.description}</Description>
    
            <ButtonAndDate>
                <LikeButton />
                <Date>{props.date}</Date>
            </ButtonAndDate>
        </Wrapper>
    );
}