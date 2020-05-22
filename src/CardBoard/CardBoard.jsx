import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { userActions } from '../actions';
import 'bootstrap/dist/css/bootstrap.min.css';
import MenuCard from '../components/Menu/MenuCard';
import Footer from '../components/Footer/Footer';
import ShowCard from '../components/Card/ShowCard';
import ShowCardDone from '../components/Card/ShowCardDone';
import '../App.css';
import axios from "axios";
import { Button } from 'react-bootstrap';
import { confirmAlert } from 'react-confirm-alert'; // Import
import 'react-confirm-alert/src/react-confirm-alert.css'; // Import css

class CardBoard extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            cards: [],
            state: '',
            showing: true,
        };

        const options = {
            title: 'Title',
            message: 'Message',
            buttons: [
                {
                    label: 'Yes',
                    onClick: () => alert('Click Yes')
                },
                {
                    label: 'No',
                    onClick: () => alert('Click No')
                }
            ],
            childrenElement: () => <div />,
            customUI: ({ onClose }) => <div>Custom UI</div>,
            closeOnEscape: true,
            closeOnClickOutside: true,
            willUnmount: () => { },
            afterClose: () => { },
            onClickOutside: () => { },
            onKeypressEscape: () => { }
        };
    }

    componentDidMount() {

        const pathID = this.props.location.pathname;
        var str = pathID;
        var n = str.lastIndexOf('/');
        var tableID = str.substring(n + 1);

        const token = this.props.user.token;
        const config = {
            headers: { Authorization: `Bearer ${token}` }
        };
        const userID = this.props.user.id;

        axios.get(
            `https://ninjaorganizer.azurewebsites.net/users/${userID}/taskboards/${tableID}/cards`,
            config
        ).then(res =>
            this.setState({
                cards: res.data,
                tables: tableID

            })

        )

    }

    deleteCard = id => {
        confirmAlert({
            customUI: ({ onClose }) => {
                return (
                    <div className='custom-ui'>
                        <h1>Czy na pewno chcesz usunąć zadanie ?</h1>
                        <button className="delete-confirm-no" onClick={onClose}>Nie</button>
                        <button className="delete-confirm"
                            onClick={() => {
                                this.deleteCardConfirmed(id);
                                onClose();
                            }}
                        >
                            O tak, usuń to !
                        </button>
                    </div>
                );
            }
        });
    }


    // Usuwanie karty
    deleteCardConfirmed = id => {
        this.props.dispatch(userActions.getAll());

        const token = this.props.user.token;
        const config = {
            headers: { Authorization: `Bearer ${token}` }
        };

        const userID = this.props.user.id;
        const pathID = this.props.location.pathname;

        var str = pathID;
        var n = str.lastIndexOf('/');
        var tableID = str.substring(n + 1);

        axios.delete(`https://ninjaorganizer.azurewebsites.net/users/${userID}/taskboards/${tableID}/cards/${id}`, config).then(res =>
            this.setState({
                cards: [...this.state.cards.filter(card => card.id !== id)]
            })
        );

    };



    setUpdate = id => {

        const token = this.props.user.token;
        const config = {
            headers: { Authorization: `Bearer ${token}` }
        };

        const bodyParameters = {
            state: 3
        };

        const userID = this.props.user.id;
        const pathID = this.props.location.pathname;

        var str = pathID;
        var n = str.lastIndexOf('/');
        var tableID = str.substring(n + 1);

        axios.patch(`https://ninjaorganizer.azurewebsites.net/users/${userID}/taskboards/${tableID}/cards/${id}`, bodyParameters, config).then(res =>
            this.setState({
                cards: [...this.state.cards.filter(card => card.id !== id)]
            })
        );
        // window.location.reload(false);
    };

    markcomplete = id => {
        this.setState({
            cards: this.state.cards.map(table => {
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
                <MenuCard
                    user={user}
                    tables={this.state.tables}
                    key={this.props.card}
                    history={this.props.history}
                    cards={this.state.cards}

                />

                <div className="cardCustom">
                </div>
                <div className="newTaskTitle "><h4>Zadania do wykonania</h4></div>
                <div className="tablica">
                    <div className=" cardCustom">
                        <div className="col-12 cardCustom">
                            <ShowCard
                                key={this.props.card}
                                cards={this.state.cards}
                                markcomplete={this.markcomplete}
                                deleteCard={this.deleteCard}
                                deleteCardConfirmed={this.deleteCardConfirmed}
                                setUpdate={this.setUpdate}
                                user={user}
                                history={this.props.history}
                                tableID={this.state.tables}
                            />
                            {/* <button onClick={() => this.setState({ showing: !showing })}>toggle</button>
                            <div style={{ display: (showing ? 'block' : 'none') }}>This is visible</div> */}
                        </div>
                    </div>
                </div>
                <hr></hr>

                <div className="newTaskTitle mt-5"><h4>Zadania wykonane</h4></div>
                <div className="tablicaArch ">
                    <div className="cardCustom col-12">

                        <ShowCardDone
                            key={this.props.card}
                            cards={this.state.cards}
                            markcomplete={this.markcomplete}
                            deleteCard={this.deleteCard}
                            setUpdate={this.setUpdate}
                            onChange={this.handleChange}
                            user={user}
                            tables={this.props.tables}
                        />
                    </div>
                </div>

                <div className="retunButton">
                    <Link to={'/'}>
                        <Button >
                            ←
                    </Button>
                    </Link>
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

const connectedCardBoard = connect(mapStateToProps)(CardBoard);
export { connectedCardBoard as CardBoard };