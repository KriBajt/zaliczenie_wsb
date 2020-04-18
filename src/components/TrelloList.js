import React, { Component } from 'react';
import TrelloCard from "./TrelloCard";
import { CardActions } from '@material-ui/core';
import TrelloActionButton from "./TrelloActionButton";
import { Droppable } from "react-beautiful-dnd";
import styled from "styled-components";

const ListContainer = styled.div`
    background-color: rgb(193, 193, 193, .5);
    color: #ffff;
    border-radius: 5px;
    width: 300px;
    padding: 8px;
    height: 100%;
    margin-right: 8px;
`

const TrelloList = ({ title, cards, listID }) => {
    return (
        <Droppable droppableId={String(listID)}>
            {provided => (
                <ListContainer

                    className="cardBody col-2"
                    {...provided.droppablePro}
                    ref={provided.innerRef}
                >

                    <h4>{title}</h4>
                    {cards.map((card, index) => (
                        <TrelloCard
                            className="col-10"
                            key={card.id}
                            index={index}
                            text={card.text}
                            id={card.id} />
                    ))}
                    <TrelloActionButton listID={listID} />
                    {provided.placeholder}

                </ListContainer>
            )
            }
        </Droppable >
    );
};

export default TrelloList;