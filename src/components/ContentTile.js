import React from 'react';
import sampleNasaImage from '../images/GCbulge_cfht.jpg'
import styled from "styled-components";
import LikeButton from './LikeButton';


export default function ContentTile() {
    const Image = styled.img`
        border: 5px dashed orange;
        margin-bottom: 10px;
    `;

    const Caption = styled.p`
        border: 5px dashed orange;
        margin-top: 10px;
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
        border: 5px dashed blue;
        text-align: left;
    `;
    
    return(
        <Wrapper>
            
            <Image src={sampleNasaImage} />
            <Caption>Description/Caption for image.</Caption>
            <Date>Date image was taken.</Date>
            {/* <LikeToggle primary>Love!</LikeToggle> */}
            {/* <Heart></Heart> */}
            <LikeButton></LikeButton>
        </Wrapper>
    );
}