import React, { Component } from 'react';
import TrelloList from "./TrelloList";
import { connect } from "react-redux";
import TrelloActionButton from "./TrelloActionButton";
import { DragDropContext, Droppable } from "react-beautiful-dnd";
import 'bootstrap/dist/css/bootstrap.min.css';
import { sort } from "../actions";
import styled from "styled-components";
import { GiNinjaHead } from 'react-icons/gi';
import Menu from './Menu/Menu';


const ListContainer = styled.div`
        display: flex;
        flex-direction: row;
`

class App extends Component {

    onDragEnd = result => {
        const { destination, source, draggableId, type } = result;

        if (!destination) {
            return;
        }

        this.props.dispatch(
            sort(
                source.droppableId,
                destination.droppableId,
                source.index,
                destination.index,
                draggableId,
                type
            )
        );
    };

    render() {
        const { lists } = this.props;
        return (
            <>
                <DragDropContext onDragEnd={this.onDragEnd}>

                    <div class="contentTrelloBox">
                        <Menu className={'mt-2'} />
                        <Droppable droppableId="all-list" direction="horizontal" type="list">
                            {provided => (
                                <ListContainer {...provided.droppableProps} ref={provided.innerRef} >
                                    {lists.map((list, index) => (
                                        <TrelloList
                                            listID={list.id}
                                            key={list.id}
                                            title={list.title}
                                            cards={list.cards}
                                            index={index}
                                        />
                                    ))}
                                    {provided.placeholder}
                                    <TrelloActionButton list />
                                </ListContainer>
                            )}
                        </Droppable>
                    </div>

                </DragDropContext>
            </>
        )
    }
}

const mapStateToProps = state => ({
    lists: state.lists
});

export default connect(mapStateToProps)(App);