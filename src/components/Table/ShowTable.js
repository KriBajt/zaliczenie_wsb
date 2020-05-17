import React, { Component, useState, useEffect } from 'react'
import './TableDetail.css';
import BtnCardDetails from '../Button/BtnCardList';
import { BsFillTrashFill } from 'react-icons/bs';
import axios from "axios";
import TableItem from './TableItem';
import PropTypes from 'prop-types';
import { userActions } from '../../actions/user.actions';
import { connect } from 'react-redux';


export default class ShowTable extends Component {

    // const fetchItems = async ()=>{
    //     const data =  await fetch()
    // }

    render() {
        return this.props.tables.map(table => (

            <TableItem
                key={this.props.table}
                markComplete={this.props.markComplete}
                deleteTable={this.props.deleteTable}
                setUpdate={this.props.setUpdate}
                onChange={this.handleChange}
                table={table}
                user={this.props.user}
            />
        ));
    }
}

//PropTypes

ShowTable.propTypes = {
    tables: PropTypes.array.isRequired,
    markComplete: PropTypes.func.isRequired,
    deleteTable: PropTypes.func.isRequired,
    setUpdate: PropTypes.func.isRequired,
    onChange: PropTypes.func.isRequired,


};

function mapStateToProps(state) {
    const { loggingIn } = state.authentication;
    return {
        loggingIn
    };
}

const connectedShowTable = connect(mapStateToProps)(ShowTable);
export { connectedShowTable as ShowTable };


