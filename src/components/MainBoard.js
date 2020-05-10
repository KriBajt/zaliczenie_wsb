import React, { Component } from 'react';
import TrelloList from "./TrelloList";
import { connect } from "react-redux";
import TrelloActionButton from "./Button/TrelloActionButton";
import 'bootstrap/dist/css/bootstrap.min.css';
import { sort } from "../actions";
import { GiNinjaHead } from 'react-icons/gi';
import Menu from './Menu/Menu';
import Footer from './Footer/Footer';
import Dane from './../dane';
import BtnCardDetails from './Button/BtnCardDetails'
import CardDetail from './Table/TableDetail'

import ShowTable from './Table/ShowTable';

// import SendDataToApi from './Table/SendDataToApi';
import TableForm from './../components/Table/TableForm';
import axios from "axios";


class MainBoard extends Component {
    state = {
        tables: []
    };

    componentDidMount() {
        axios
            .get("http://localhost:1028/api/taskboards/")
            .then(res =>
                this.setState({
                    tables: res.data
                })
            );
    }
    //toggle complete
    markComplete = id => {
        this.setState({
            tables: this.state.tables.map(table => {
                if (table.id === id) {
                    table.completed = !table.completed;
                }
                return table;
            })
        });
    };

    // Usuwanie karty
    deleteTable = id => {
        axios.delete(`http://localhost:1028/api/taskboards/${id}`).then(res =>
            this.setState({
                tables: [...this.state.tables.filter(table => table.id !== id)]
            })
        );
    };

    render() {
        return (
            <>
                <Menu />
                <div className="container cardCustom">
                </div>
                <div className="container cardCustom">
                    <ShowTable
                        tables={this.state.tables}
                        markComplete={this.markComplete}
                        deleteTable={this.deleteTable} />
                </div>
                <Footer />
            </>
        )
    }
}

const mapStateToProps = state => ({
    lists: state.lists
});

export default connect(mapStateToProps)(MainBoard);