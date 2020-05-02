import React, { Component } from 'react';
import styled from 'styled-components';
import CreateCardContainer from './../cards/CardContainer';
import { DropTarget } from 'react-dnd';
import { ItemTypes } from './../../../../utils/Constants';
import { connect } from 'react-redux'
import handleDrop from './../../../../actions/handleDrop'
import { fadeIn } from './../../../../utils/Animations';


const ListItemWrapper = styled.div`
    display: inline-block;
    vertical-align: top;
    margin: 20px;


    background-color: rgba(255,255,255,0.45);
    border-radius:10px;
    padding: 5px 10px;
    box-shadow: 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23);
    transition: all 150ms ease-in-out;
    animation: ${fadeIn} 300ms linear;

`

const ListItemHeader = styled.h4`
    margin-top: 20px;
    color: white;
    letter-spacing: 1.66;
    text-align: center;
    text-transform: uppercase;
    font-weight: 400;
`

const dropSource = {
    drop(props, monitor) {
        const card = monitor.getItem(); // this item is being dragged
        props.handleDrop(card.title, card.cardId, card.listId, props.id);
        // const droppedItem = props.onDrop(monitor.getItem());

    },

}

function collect(connect, monitor) {
    return {
        // Call this function inside render()
        // to let React DnD handle the drag events:
        // connectDropTarget: connect.dropTarget(),
        // You can ask the monitor about the current drag state:
        isOver: monitor.isOver(),
        isOverCurrent: monitor.isOver({ shallow: true }),
        canDrop: monitor.canDrop(),
        itemType: monitor.getItemType()
    };
}

// @DropTarget(ItemTypes.CARD, dropSource, collect)

class ListItem extends Component {
    render() {
        const { name, id } = this.props;
        return (
            <div>
                <ListItemWrapper>
                    <ListItemHeader >{name}</ListItemHeader>
                    <hr />
                    <CreateCardContainer listId={id} />
                </ListItemWrapper>

            </div>
        )
    }
}


export default connect(null, { handleDrop })(ListItem);
