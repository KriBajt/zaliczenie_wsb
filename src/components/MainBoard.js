import React, { Component } from 'react';
import TrelloList from "./TrelloList";
import { connect } from "react-redux";
import TrelloActionButton from "./Button/TrelloActionButton";
import { DragDropContext, Droppable } from "react-beautiful-dnd";
import 'bootstrap/dist/css/bootstrap.min.css';
import { sort } from "../actions";
import { GiNinjaHead } from 'react-icons/gi';
import Menu from './Menu/Menu';
import Footer from './Footer/Footer';
import Dane from './../dane';



class MainBoard extends Component {

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
                <Menu />
                <DragDropContext onDragEnd={this.onDragEnd}>
                    <div className="contentTrelloBox">
                        <Droppable droppableId="all-list" direction="horizontal" type="list">
                            {provided => (
                                <div className={'cardListBox'} {...provided.droppableProps} ref={provided.innerRef} >
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
                                </div>
                            )}
                        </Droppable>
                    </div>

                </DragDropContext>
                <Footer />

            </>
        )
    }
}

const mapStateToProps = state => ({
    lists: state.lists
});

export default connect(mapStateToProps)(MainBoard);