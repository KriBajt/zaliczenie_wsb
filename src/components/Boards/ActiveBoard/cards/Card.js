import React, { Component } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
// import { DragSource } from 'react-dnd';

import { ItemTypes } from './../../../../utils/Constants';
import { fadeIn } from './../../../../utils/Animations'
import archiveCard from './../../../../actions/archiveCard';
import BtnCardDetails from '../../../Button/BtnCardDetails'
import { Droppable } from 'react-beautiful-dnd';

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




class Card extends Component {


    togglePost = (cardId, listId) => {
        this.props.archiveCard(cardId, listId)
    }


    render() {

        const {
            title,
            archiveCard,
            cardId,
            listId,
            isArchived,
        } = this.props;

        const cardStyles = {
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
