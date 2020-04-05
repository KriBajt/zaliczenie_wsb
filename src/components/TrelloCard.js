import React from "react";
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const TrelloCard = ({ text }) => {
    return (
        <>
            <Card style={styles.cardContainer}>
                <CardContent>
                    <Typography
                        gutterBottom>
                        {text}
                    </Typography>
                </CardContent>
            </Card>
        </>
    )
}

const styles = {
    cardContainer: {
        marginBottom: 8
    }
}

export default TrelloCard;