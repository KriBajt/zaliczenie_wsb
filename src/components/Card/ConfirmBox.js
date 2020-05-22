import React, { Component } from 'react'
import { confirmAlert } from 'react-confirm-alert'; // Import
import 'react-confirm-alert/src/react-confirm-alert.css'; // Import cs


export default class ConfirmBox extends Component {
    render() {
        return (
            confirmAlert({
                customUI: ({ onClose }) => {
                    return (
                        <div className='custom-ui'>
                            <h1>Czy na pewno chcesz usunąć zadanie ?</h1>
                            <button onClick={onClose}>Nie</button>
                            <button
                                onClick={() => {
                                    this.handleClickDelete();
                                    onClose();
                                }}
                            >
                                O tak, usuń to !
                    </button>
                        </div>
                    );
                }
            })
        )
    }
}



