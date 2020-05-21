import React from 'react';
import { connect } from 'react-redux';
import { userActions } from '../actions';
import 'bootstrap/dist/css/bootstrap.min.css';
import Menu from '../components/Menu/Menu';
import Footer from '../components/Footer/Footer';
import ShowTable from '../components/Table/ShowTable';
import '../App.css';
import axios from "axios";

class HomePage extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            tables: [],

        };
    }


    componentDidMount() {
        this.props.dispatch(userActions.getAll());

        const token = this.props.user.token;
        const config = {
            headers: { Authorization: `Bearer ${token}` }
        };
        const userID = this.props.user.id;

        axios.get(
            `https://ninjaorganizer.azurewebsites.net/users/${userID}/taskboards/`,
            config
        ).then(res =>
            this.setState({
                tables: res.data
            })
        )
    }


    // Usuwanie karty
    deleteTable = id => {
        this.props.dispatch(userActions.getAll());
        const token = this.props.user.token;
        const config = {
            headers: { Authorization: `Bearer ${token}` }
        };

        const userID = this.props.user.id;

        axios.delete(`https://ninjaorganizer.azurewebsites.net/users/${userID}/taskboards/${id}`, config).then(res =>
            this.setState({
                tables: [...this.state.tables.filter(table => table.id !== id)]
            })
        );

    };

    setUpdate = (title, id) => {
        const token = this.props.user.token;
        const config = {
            headers: { Authorization: `Bearer ${token}` }
        };

        const userID = this.props.user.id;

        axios.put(`https://ninjaorganizer.azurewebsites.net/users/${userID}/taskboards/${id}`, config)
            .then(response => {
                // console.log(response);
            })
            .catch(error => {
                // console.log(error);
            });
    }

    markcomplete = id => {
        this.setState({
            tables: this.state.tables.map(table => {
                if (table.id === id) {
                    table.completed = !table.completed;
                }
                return table;
            })
        });
    };

    handleDeleteUser(id) {
        return (e) => this.props.dispatch(userActions.delete(id));
    }

    render() {
        const { user } = this.props;

        return (
            <>
                <Menu
                    tables={this.state.tables}
                    markcomplete={this.markcomplete}
                    deleteTable={this.deleteTable}
                    setUpdate={this.setUpdate}
                    onChange={this.handleChange}
                    user={user} />

                <section className="sectionText">
                    <div className="textNewBoard">
                        {/* <h4>Stwórz swoją pierwszą tablicę !</h4> */}
                    </div>
                </section>

                <div className="newTaskTitle"><h4>Aktywne tablice</h4></div>
                <div className="tablica ">
                    <div className="d-flex justify-content-start flex-wrap cardCustom">
                        <ShowTable
                            tables={this.state.tables}
                            markcomplete={this.markcomplete}
                            deleteTable={this.deleteTable}
                            setUpdate={this.setUpdate}
                            onChange={this.handleChange}
                            user={user}
                            table={this.state.table}
                        />
                    </div>
                </div>

                <Footer />

            </>
        );
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

const connectedHomePage = connect(mapStateToProps)(HomePage);
export { connectedHomePage as HomePage };