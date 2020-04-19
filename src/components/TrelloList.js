import React, { Component } from 'react';
import TrelloCard from "./Card/TrelloCard";
import { CardActions } from '@material-ui/core';
import TrelloActionButton from "./Button/TrelloActionButton";
import { Droppable, Draggable } from "react-beautiful-dnd";
import styled from "styled-components";


const TrelloList = ({ title, cards, listID, index }) => {
    return (
        // <div className={'container'}>
        <Draggable draggableId={String(listID)} index={index}>
            {provided => (
                <div className={'ListContainer '}
                    {...provided.draggableProps}
                    ref={provided.innerRef}
                    {...provided.dragHandleProps}
                >
                    <Droppable droppableId={String(listID)}>
                        {provided => (
                            <div {...provided.droppableProps} ref={provided.innerRef}>
                                <h4>{title}</h4>
                                {cards.map((card, index) => (
                                    <TrelloCard
                                        key={card.id}
                                        index={index}
                                        text={card.text}
                                        id={card.id} />
                                ))}
                                {provided.placeholder}

                                <TrelloActionButton listID={listID} />
                            </div>
                        )
                        }
                    </Droppable >
                </div>
            )}
        </Draggable>
        // </div>

    );
};

export default TrelloList;