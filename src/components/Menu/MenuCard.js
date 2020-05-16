import React, { Component } from 'react'
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Nav from 'react-bootstrap/Nav';
import Link from 'react-bootstrap/NavLink';
import { GiNinjaHead } from 'react-icons/gi';
import './Menu.css';
import CardForm from '../Card/CardForm';
import { userActions } from '../../actions/user.actions';
import { connect } from 'react-redux';
// import ShowTable from '../components/Table/ShowTable';


export default class Menu extends Component {
    render() {
        return (
            <div >
                <Navbar className="customNaw " collapseOnSelect expand="lg" variant="dark">
                    <Navbar.Brand href="/" className={'style1'}>NinjaTask<GiNinjaHead /></Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="mr-auto">
                            <CardForm addCard={this.props.addCard} />
                        </Nav>
                        <Nav>
                            <Nav.Link href="#deets"><GiNinjaHead /></Nav.Link>
                            <Nav.Link eventKey={2} href="/login">
                                Wyloguj
                    </Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
            </div>
        )
    }
}
