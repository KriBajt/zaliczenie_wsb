import React from "react";
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { Draggable } from 'react-beautiful-dnd';
import styled from 'styled-components';


const CardContainer = styled.div`
    margin-bottom:8px;
`

const TrelloCard = ({ text, id, index }) => {
    return (
        <Draggable draggableId={String(id)} index={index}>
            {provided => (
                <CardContainer

                    ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps}>
                    <Card className="cardBodyContent" >
                        <CardContent>
                            <Typography
                                gutterBottom>
                                {text}
                            </Typography>
                        </CardContent>
                    </Card>
                </CardContainer>
            )}

        </Draggable >
    )
}

export default TrelloCard;