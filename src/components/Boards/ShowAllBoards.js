import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { fadeIn } from './../../utils/Animations';

const Title = styled.h2`
    color: #fff;
    padding: 10px;
    animation: ${fadeIn} 200ms linear;
    font-size:20px;

`

const BoardWrapper = styled.div`
    width: 284px;
    height:100%;
    margin-left: 30px;
    background-color: rgba(0, 0, 0, 0.25);
    padding: 15px 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border-radius: 5.5px;
    box-shadow: 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23);
    cursor: pointer;
    transition: 200ms ease-in-out;
    font-weight: 900;
    animation: ${fadeIn} 600ms linear;

    &:hover {
        box-shadow: 0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23);
        transition: 200ms ease-in-out;
        transform: scale(1.05);
    }
`

const ShowAllBoards = ({ title, id }) => (
    <Link to={`/b/${id}`} className="titleCardBoard">
        <BoardWrapper >
            <Title >{title}</Title>
        </BoardWrapper>
    </Link>
)

export default ShowAllBoards;
