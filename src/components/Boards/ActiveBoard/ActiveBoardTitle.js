import React from 'react';
import styled from 'styled-components';
import { fadeIn } from './../../../utils/Animations';

const TitleWrapper = styled.div`
    display: flex;
    justify-content: center;
    padding: 10px 60px;
    width: 100%;
    animation: ${fadeIn} 300ms linear;
    color:#fff;
`

const Title = styled.h1`
`

const ActiveBoardTitle = ({ children }) => (
    <TitleWrapper>
        <Title>Tablica: {children}</Title>
    </TitleWrapper>
)

export default ActiveBoardTitle;
