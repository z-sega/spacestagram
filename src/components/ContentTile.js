import React, { useState } from "react";
import styled from "styled-components";

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
    padding-right: 15px;
    flex: 5;
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

    const [isLikedIcon, setIsLikedIcon] = useState(false);

    return (
        <Wrapper className='content-tile'>
            <a href={props.hdSrc} target='_blank' rel='noreferrer'><Image src={props.src} /></a>
            <Title>{props.title}</Title>
            <Description>{props.description}</Description>
    
            <ButtonAndDate>
                <div className='likebutton' onClick={() => setIsLikedIcon(!isLikedIcon)} >
                    {/* {props.wasLiked ? '😍' : '🙂' } */}
                    {isLikedIcon ? '😍' : '🙂' }
                </div>
                <Date>{props.date}</Date>
            </ButtonAndDate>
        </Wrapper>
    );
}