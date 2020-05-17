import React, { Component } from 'react'
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Nav from 'react-bootstrap/Nav';
import Link from 'react-bootstrap/NavLink';
import { GiNinjaHead } from 'react-icons/gi';
import './Menu.css';
import TableForm from './../Table/TableForm';
import { connect } from 'react-redux';
import { userActions } from '../../actions/user.actions'
import UserModal from '../../components/UserPage/UserModal'

export default class Menu extends Component {
    constructor(props) {
        super(props);
        this.state = { addModalShow: false }
    }

    render() {
        let addModalClose = () => this.setState({ addModalShow: false });

        return (
            <div >
                <Navbar className="customNaw " collapseOnSelect expand="lg" variant="dark">
                    <Navbar.Brand href="/" className={'style1'}>NinjaTask<GiNinjaHead /></Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="mr-auto">
                            {/* <Nav.Link href="/dane">Dane</Nav.Link> */}
                            {/* <Nav.Link href="/dane">
                            </Nav.Link> */}

                            <TableForm
                                // addCard={this.props.addTable}
                                // onSubmit={this.props.onSubmit}
                                user={this.props.user}
                                onChange={this.handleChange}

                            />

                            {/* <Nav.Link href="#pricing">Pricing</Nav.Link>
                            <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
                                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                            </NavDropdown> */}

                        </Nav>
                        <Nav>

                            <Nav.Link
                                onClick={() => this.setState({ addModalShow: true })}>Cześć! {this.props.user.firstName}
                                <GiNinjaHead />
                            </Nav.Link>
                            <UserModal
                                user={this.props.user}
                                show={this.state.addModalShow}
                                onHide={addModalClose}
                            />

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


function mapStateToProps(state) {
    const { users, authentication } = state;
    const { user } = authentication;
    return {
        user,
        users,
    };
}

const connectedMenu = connect(mapStateToProps)(Menu);
export { connectedMenu as Menu };
