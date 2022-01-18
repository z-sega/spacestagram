import React from "react";
import styled from "styled-components";

const Title = styled.h1`
    font-size: 1.5em;
    text-align: left;
    // font-family: Blox;
`;

const SubTitle = styled.p`
    font-size: 1.2em;
    text-align: left;
    color: palevioletred; 
`;

const Wrapper = styled.section`
    padding: 4em;
    background: papayawhip;
`;

export default function MainTitle() {
    
    return(
        <Wrapper>
            <Title>
                Spacestagram
            </Title>
            <SubTitle>
                Brought to you by NASA's image API. 
            </SubTitle>
        </Wrapper>
    );
}