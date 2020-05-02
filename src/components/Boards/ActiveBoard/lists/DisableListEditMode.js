import React from 'react';
import styled from 'styled-components';
import CloseIcon from './../../../../assets/closeIcon.svg'
import './../../../Button/Button.css';


const DisableWrapper = styled.div`
    position: relative;
    left: 20px;
    top: -28px;
    height:50px;
`

const DisableButton = styled.svg`
    width: 34px;
    height: 34px;
    padding: 5px;
    transition: all 200ms ease-in-out;
    background-image: url(${CloseIcon});
    background-repeat: no-repeat;
    cursor: pointer;
    transform: scale(1.25) rotate(4.5deg);


    &:hover {
        transition: all 200ms ease-in-out;
        transform: scale(.95) rotate(4.5deg);
        stroke="#fff"

    }
`

const DisableListEditMode = ({ disableList }) => (
    <DisableWrapper onClick={disableList}>
        <DisableButton />
    </DisableWrapper>
);

export default DisableListEditMode;
