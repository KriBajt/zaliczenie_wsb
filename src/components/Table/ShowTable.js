import React, { Component } from 'react'
import './TableDetail.css';
import TableItem from './TableItem';
import { connect } from 'react-redux';


export default class ShowTable extends Component {

    constructor(props) {
        super(props);
        this.keyCount = 0;
        this.getKey = this.getKey.bind(this);
    }

    getKey() {
        return this.keyCount++;
    }
    render() {

        // listowanie tablic
        return this.props.tables.map((table) => (
            <TableItem
                key={this.getKey()}
                markcomplete={this.props.markcomplete}
                deleteTable={this.props.deleteTable}
                setUpdate={this.props.setUpdate}
                onChange={this.handleChange}
                table={table}
                user={this.props.user}
                history={this.props.history}
            />
        ));
    }
}

