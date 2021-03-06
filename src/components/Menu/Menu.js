import React, { Component } from 'react'
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import { GiNinjaHead } from 'react-icons/gi';
import './Menu.css';
import TableForm from './../Table/TableForm';
import { connect } from 'react-redux';
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

                {/* Menu główne z formularzem dodaawania tablic */}
                <Navbar className="customNaw " collapseOnSelect expand="lg" variant="dark">
                    <Navbar.Brand href="/" className={'style1'}>NinjaTask<GiNinjaHead /></Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="mr-auto">

                            {/* formularz dodawania  tablic*/}
                            <TableForm
                                user={this.props.user}
                                onChange={this.handleChange}
                            />
                        </Nav>
                        <Nav>

                            <Nav.Link
                                id="login-name"
                                onClick={() => this.setState({ addModalShow: true })}>Cześć! {this.props.user.firstName}

                            </Nav.Link>
                            {/* komponent informacjie o użytkowniku */}
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


// function mapStateToProps(state) {
//     const { users, authentication } = state;
//     const { user } = authentication;
//     return {
//         user,
//         users,
//     };
// }

// const connectedMenu = connect(mapStateToProps)(Menu);
// export { connectedMenu as Menu };
