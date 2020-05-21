import React, { Component } from 'react'
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import { GiNinjaHead } from 'react-icons/gi';
import './Menu.css';
import CardForm from '../Card/CardForm';
import UserModal from '../UserPage/UserModal'

export default class Menu extends Component {
    constructor(props) {
        super(props);
        this.state = { addModalShow: false }
    }


    render() {
        // console.log(this.props);
        let addModalClose = () => this.setState({ addModalShow: false });

        return (
            <div >
                <Navbar className="customNaw " collapseOnSelect expand="lg" variant="dark">
                    <Navbar.Brand href="/" className={'style1'}>NinjaTask<GiNinjaHead /></Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="mr-auto">
                            {/* <CardForm addCard={this.props.addCard} /> */}

                            <CardForm
                                // addCard={this.props.addTable}
                                // onSubmit={this.props.onSubmit}
                                user={this.props.user}
                                onChange={this.handleChange}
                                cards={this.props.tableID}
                                key={this.props.card}
                                tables={this.props.user.taskboards}
                                history={this.props.history}
                                table={this.props.table}
                            />

                        </Nav>
                        <Nav>

                            <Nav.Link
                                id="login-name"

                                onClick={() => this.setState({ addModalShow: true })}>Cześć! {this.props.user.firstName}

                            </Nav.Link>
                            <UserModal
                                user={this.props.user}
                                show={this.state.addModalShow}
                                onHide={addModalClose}
                            />

                            <Nav.Link href="#deets" id="ikona-ninja"><GiNinjaHead /></Nav.Link>
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
