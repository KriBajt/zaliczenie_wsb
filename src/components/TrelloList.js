import React, { Component } from 'react';
import TrelloCard from "./TrelloCard";
import { CardActions } from '@material-ui/core';
import TrelloActionButton from "./TrelloActionButton";
import { Droppable } from "react-beautiful-dnd";


const TrelloList = ({ title, cards, listID }) => {
    return (
        <Droppable droppableId={String(listID)}>
            {provided => (
                <div className="cardBody col-2" {...provided.droppablePro} ref={provided.innerRef} style={styles.container}>
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

                </div>
            )}
        </Droppable>
    );
};

const styles = {
    container: {
        backgroundColor: 'rgb(193, 193, 193, .5)',
        color: '#ffff',
        borderRadius: 5,
        width: 300,
        padding: 8,
        height: "100%",
        marginRight: 8
    }
}
export default TrelloList;