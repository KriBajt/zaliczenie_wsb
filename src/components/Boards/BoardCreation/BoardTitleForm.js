import React from 'react';
import { Field, reduxForm } from 'redux-form';
import styled from 'styled-components';
import BoardTitleInput from './BoardTitleInput';

const CancelButton = styled.button`
    width: auto;
    height: 43px;
    margin: 15px 5px 5px;
    text-transform: uppercase;
    cursor: pointer;
    transition: all 200ms ease-in-out;
    border: none;
    background: none;
    color: white;
    font-weight: 400;
    &:hover {
        transition: all 200ms ease-in-out;
        background-color: none;
        color: #00ffc5;
    }
`

const ButtonWrapper = styled.div`
    margin: 20px 0 5px 0;
    display: flex;
    justify-content: flex-end;
    width: 100%;
`


const SubmitButton = styled.button`
    width: 100%;
    height: 43px;
    border-radius:10px;
    margin: 15px 18px 5px 0;
    text-transform: uppercase;
    cursor: pointer;
    transition: all 250 ease-in-out;
    border: none;
    box-shadow: 0 3px 3px rgba(0,0,0,0.16), 0 3px 3px rgba(0,0,0,0.23);

    &:hover {
        transition: all 250ms ease-in-out;
        color: #20c997;
        box-shadow: 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23);
        background-color: #fff;
    }
`


let BoardTitleForm = (props) => {

    const { handleSubmit, cancelAction } = props;

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <Field
                    name="boardTitle"
                    component={BoardTitleInput}
                    type="text"
                    placeholder="Wprowadź nazwę tablicy"
                />
            </form>
            <ButtonWrapper>
                <CancelButton onClick={() => cancelAction()}>Anuluj</CancelButton>
                <SubmitButton onClick={handleSubmit} type="button">Stwórz</SubmitButton>
            </ButtonWrapper>
        </div>
    )
}

function validate(values) {

    let errors = {};

    if (!values.boardTitle || values.boardTitle === '') {
        errors.boardTitle = "Wpisz nazwę tablicy"
    }

    return errors;
}

BoardTitleForm = reduxForm({
    validate,
    form: 'boardTitle'
})(BoardTitleForm)

export default BoardTitleForm;
