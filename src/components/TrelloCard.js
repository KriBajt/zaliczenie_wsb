import React from "react";
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { Draggable } from 'react-beautiful-dnd';

const TrelloCard = ({ text, id, index }) => {
    return (
        <Draggable draggableId={String(id)} index={index}>
            {provided => (
                <div ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps}>
                    <Card style={styles.cardContainer}>
                        <CardContent>
                            <Typography
                                gutterBottom>
                                {text}
                            </Typography>
                        </CardContent>
                    </Card>
                </div>
            )}

        </Draggable >
    )
}

const styles = {
    cardContainer: {
        marginBottom: 8
    }
}

export default TrelloCard;