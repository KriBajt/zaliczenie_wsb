import React, { Component, useState, useEffect } from 'react'
import './TableDetail.css';
import BtnCardDetails from '../Button/BtnCardDetails';
import { BsFillTrashFill } from 'react-icons/bs';
import axios from "axios";
import TableItem from './TableItem';
import PropTypes from 'prop-types';


export default class ShowTable extends Component {

    // const fetchItems = async ()=>{
    //     const data =  await fetch()
    // }
    render() {
        return this.props.tables.map(table => (

            <TableItem
                key={table.id}
                markComplete={this.props.markComplete}
                deleteTable={this.props.deleteTable}
                setUpdate={this.props.setUpdate}
                onChange={this.handleChange}

                table={table}

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



