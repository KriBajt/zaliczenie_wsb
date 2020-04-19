import React, { Component } from 'react';
import TrelloList from "./TrelloList";
import { connect } from "react-redux";
import TrelloActionButton from "./TrelloActionButton";
import { DragDropContext, Droppable } from "react-beautiful-dnd";
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Nav from 'react-bootstrap/Nav';
import Link from 'react-bootstrap/NavLink';
import 'bootstrap/dist/css/bootstrap.min.css';
import { sort } from "../actions";
import styled from "styled-components";


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
                <Navbar className="customNaw col-12 " collapseOnSelect expand="lg" variant="dark">
                    <Navbar.Brand href="#home">Aplikacja zaliczeniowa WSB</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="mr-auto">
                            <Nav.Link href="#features">Features</Nav.Link>
                            <Nav.Link href="#pricing">Pricing</Nav.Link>
                            <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
                                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                            </NavDropdown>
                        </Nav>
                        <Nav>
                            <Nav.Link href="#deets">More deets</Nav.Link>
                            <Nav.Link eventKey={2} href="#memes">
                                Wyloguj
                    </Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
                <DragDropContext onDragEnd={this.onDragEnd}>
                    <div class="contentTrelloBox">
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