import React, { Component } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux'
import { Wrapper } from './CreateBoard';
import cancelCreatingBoard from './../../../actions/cancelCreatingBoard';

import submitNewBoard from './../../../actions/submitNewBoard';
import BoardTitleForm from './BoardTitleForm';

const Title = styled.h3`
    color: white;
    font-size:16px;
    padding-left:0px;
    padding:0;
    margin:0;
`
const TopWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-bottom:20px;
    padding-top:10px;
    width: 100%;
    border-bottom: solid 1px rgb(240,240,240);
`

const CloseBoardIcon = styled.img`
    width: 34px;
    height: 34px;
    padding: 5px;
    transition: all 200ms ease-in-out;
    transform: scale(1.25) rotate(4.5deg);

    &:hover {
        transition: all 200ms ease-in-out;
        transform: scale(.95) rotate(4.5deg);
        stroke="#fff"
    }
`

const BodyWrapper = styled.div`
    display: flex;
    flex-direction: column;
`

const BoardNamingTitle = styled.h5`
    color: white;
    font-weight: 400;
    font-size:16px;
`


class ActiveCreateBoard extends Component {


    submit = (values) => {
        this.props.submitNewBoard(values.boardTitle);

        values.boardTitle = '';
    }

    render() {

        const {
            cancelCreatingBoard,
        } = this.props;

        return (

            <Wrapper>

                <TopWrapper>
                    <Title>Dodaj nową tablice</Title>
                    <CloseBoardIcon
                        onClick={() => cancelCreatingBoard()}
                        src={require('../../../assets/closeIcon.svg')}
                    />
                </TopWrapper>
                <BodyWrapper>
                    <BoardNamingTitle></BoardNamingTitle>
                    <BoardTitleForm
                        onSubmit={this.submit}
                        cancelAction={cancelCreatingBoard}
                    />
                </BodyWrapper>

            </Wrapper>

        )
    }
}


export default connect(null, { cancelCreatingBoard, submitNewBoard })(ActiveCreateBoard);
