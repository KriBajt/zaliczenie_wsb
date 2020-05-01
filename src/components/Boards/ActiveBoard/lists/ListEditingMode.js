import React, { Component } from 'react'
import { connect } from 'react-redux'
import styled from 'styled-components';
import DisableListEditMode from './../lists/DisableListEditMode';
import disableListEditMode from './../../../../actions/disableListEditMode';

import { reduxForm, Field, reset } from 'redux-form';
import BoardTitleInput from './../../BoardCreation/BoardTitleInput';



const ListEditingModeWrapper = styled.div`
    padding: 20px 12px;
    height: 75px;
    margin: 20px 0;
    background-color: rgba(255, 255, 255, 0.45);
    border-radius:30px 0 30px 30px;
    display: flex;
    box-shadow: 0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23);
`
class ListEditingMode extends Component {

    render() {
        const { disableListEditMode, handleSubmit } = this.props;
        return (
            <ListEditingModeWrapper>
                <form onSubmit={handleSubmit}>
                    <Field
                        name="listItem"
                        component={BoardTitleInput}
                        type="text"
                        placeholder="Dodaj nawzwę listy"
                    />
                </form>
                <DisableListEditMode disableList={disableListEditMode} />
            </ListEditingModeWrapper>
        )
    }
}

function mapStateToProps({ activeBoard }) {
    return { activeBoard }
}


function validate(values) {
    let errors = {};

    if (!values.listItem) {
        errors.listItem = 'Wprowadź nazwę'
    }

    return errors;
}

const afterSubmit = (result, dispatch) => {
    dispatch(reset('listItem'));
}


export default reduxForm({
    validate,
    form: 'listItem',
    onSubmitSuccess: afterSubmit,
})(connect(mapStateToProps, { disableListEditMode })(ListEditingMode));
