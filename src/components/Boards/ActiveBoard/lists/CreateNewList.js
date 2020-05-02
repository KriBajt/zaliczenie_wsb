import React from 'react';
import styled from 'styled-components';
import { fadeIn } from './../../../../utils/Animations';
import Icon from "@material-ui/core/Icon";

export const Wrapper = styled.div`
    width: 320px;
    height: 50px;
    background-color: rgba(0, 0, 0, 0.25);
    padding: 20px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border-radius: 30px ;
    box-shadow: 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23);
    cursor: pointer;
    transition: 200ms ease-in-out;
    font-weight: 400;
    font-size:16px;

&:hover {
    box-shadow: 0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23);
    transition: 200ms ease-in-out;
    transform: scale(1.01);

}
`

const Text = styled.h3`
    color: white;
    font-size:16px;
    display:flex;
    align-items:center;
    margin-bottom:0px;

    &:hover{
        color:#20c997;
    }


`

const CreateNewList = ({ addList }) => (
    <Wrapper onClick={addList}>
        <Text><Icon>add</Icon><span className="spanAddNewList">Dodaj nową listę</span></Text>
    </Wrapper>
)

export default CreateNewList;
