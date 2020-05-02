import React, { Component } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
// import { DragSource } from 'react-dnd';

import { ItemTypes } from './../../../../utils/Constants';
import { fadeIn } from './../../../../utils/Animations'
import archiveCard from './../../../../actions/archiveCard';
import BtnCardDetails from '../../../Button/BtnCardDetails'

const CardWrapper = styled.div`
    margin: 10px 0;
    padding: 14px 7px;
    background: rgb(241, 241, 241);
    border-radius: 4.5px;
    cursor: grab;
    animation: ${fadeIn} 300ms linear;
    display: flex;
    justify-content: space-around;

`

const CardTitle = styled.h3`
    font-size: 19px;
    margin: 0;
`

const ArchiveTask = styled.div`
    padding: 4px 7px;
    opacity: 0.4;
    border: none;
    border-radius: 9999;
    cursor: pointer;
    font-size: 16px;
`

const cardSource = {
    beginDrag({ title, cardId, listId }) {
        return {
            title, cardId, listId
        }
    }
}


function collect(connect, monitor) {
    return {
        // connectDragSource: connect.dragSource(),
        // connectDragPreview: connect.dragPreview(),
        isDragging: monitor.isDragging(),
    }
}

// @DragSource(ItemTypes.CARD, cardSource, collect)
class Card extends Component {

    static propTypes = {
        // connectDragSource: PropTypes.func.isRequired,
        // connectDragPreview: PropTypes.func.isRequired,
        isDragging: PropTypes.bool.isRequired,
    }

    togglePost = (cardId, listId) => {
        this.props.archiveCard(cardId, listId)
    }

    render() {

        const {
            isDragging,
            // connectDragSource,
            title,
            archiveCard,
            cardId,
            listId,
            isArchived,
        } = this.props;

        const cardStyles = {
            opacity: isDragging || isArchived ? 0.35 : 1,
            boxShadow: "0 6px 6px rgba(0,0,0,0.16), 0 6px 6px rgba(0,0,0,0.23)",
            textDecoration: isArchived ? "line-through" : "none",
            backgroundColor: isArchived ? "#DECAFF" : "#20c997",
        };

        return (
            <div>
                <CardWrapper style={cardStyles}>
                    <CardTitle className="col-8">{title}</CardTitle>
                    <ArchiveTask className="col-3" onClick={() => this.togglePost(cardId, listId)}>✓</ArchiveTask>
                    <BtnCardDetails className="col-3" />


                </CardWrapper>
            </div>

        )
    }
}

const mapStateToProps = ({ activeBoardData }) => {
    return {
        activeBoardData
    }
}

export default connect(mapStateToProps, { archiveCard })(Card);
