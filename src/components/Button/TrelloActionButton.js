import React from "react";
import Icon from "@material-ui/core/Icon";
import Textarea from 'react-textarea-autosize';
import Card from '@material-ui/core/Card';
import Button from '@material-ui/core/Button';
import { connect } from "react-redux";
import { addList, addCard } from "../../actions";
import './Button.css';

class TrelloActionButton extends React.Component {

    state = {
        formOpen: false,
        text: ""
    };


    openForm = () => {
        this.setState({
            formOpen: true
        })
    }

    closeForm = e => {
        this.setState({
            formOpen: false
        });
    };

    handleInputChange = e => {
        this.setState({
            text: e.target.value
        });
    };

    handleAddList = () => {
        const { dispatch } = this.props;
        const { text } = this.state;

        if (text) {
            this.setState({
                text: ""
            });
            dispatch(addList(text))
        }
        return;
    };

    handleAddCard = () => {
        const { dispatch, listID } = this.props;
        const { text } = this.state;

        if (text) {
            this.setState({
                text: ""
            });
            dispatch(addCard(listID, text))
        }
    }
    renderAddButton = () => {
        const { list } = this.props;

        const buttonText = list ? "Dodaj nową listę" : " Dodaj nową kartę";
        const buttonTextOpacity = list ? 1 : 0.5;
        const buttonTextColor = list ? "white" : "black";
        const buttonTextBackground = list ? "rgba(0,0,0,.25)" : "rgba(0,0,0,.25)";

        return (
            <div
                className="btnFirst"
                onClick={this.openForm}
                style={{
                    ...styles.openFormButtonGroup,
                    opacity: buttonTextOpacity,
                    color: buttonTextColor,
                    backgroundColor: buttonTextBackground
                }
                }
            >
                <Icon>add</Icon>
                <p>{buttonText}</p>
            </div >
        )
    }



    renderForm = () => {
        const { list } = this.props;

        const placeholder = list ? "Wpisz tytuł listy..." : "Wpisz tytuł dla tej karty...";
        const buttonTitle = list ? "Dodaj nową listę" : "Dodaj kartę";

        return <div>
            <Card style={{
                overflow: "visible",
                minHeight: 80,
                minWidth: 272,
                padding: "6px 8px 2px"


            }}>
                <Textarea
                    placeholder={placeholder}
                    autoFocus
                    onBlur={this.closeForm}
                    value={this.state.text}
                    onChange={this.handleInputChange}
                    style={{
                        resize: "none",
                        width: "100%",
                        overflow: "hidden",
                        outline: "none",
                        border: "none",
                    }}
                />
            </Card>
            <div style={styles.formButtonGroup}>
                <Button onMouseDown={list ? this.handleAddList : this.handleAddCard} variant="contained" style={{ color: "white", backgroundColor: "gray" }}>{buttonTitle}{" "}</Button>


                <Icon style={{ marginLeft: 8, cursor: "pointer" }}>close</Icon>
            </div>
        </div>
    };

    render() {
        return this.state.formOpen ? this.renderForm() : this.renderAddButton();
    }
}

const styles = {
    openFormButtonGroup: {
        display: "flex",
        alignItems: "center",
        cursor: "pointer",
        borderRadius: 50,
        height: 50,
        width: 284,
        marginTop: 30,

    },

    formButtonGroup: {
        // marginTop: 8,
        display: "flex",
        alignItems: "center",
    }
}
export default connect()(TrelloActionButton);