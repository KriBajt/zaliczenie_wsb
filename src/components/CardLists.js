// import React, { Component } from 'react';
// import TrelloList from "./TrelloList";
// import { connect } from "react-redux";
// import TrelloActionButton from "./Button/TrelloActionButton";
// import 'bootstrap/dist/css/bootstrap.min.css';
// import { sort } from "../actions";
// import { GiNinjaHead } from 'react-icons/gi';
// import MenuCard from './Menu/MenuCard';
// import Footer from './Footer/Footer';
// import Dane from '../dane';
// import BtnCardDetails from './Button/BtnCardDetails'
// import CardDetail from './Card/CardDetail'
// import ShowCard from './Card/ShowCard';
// // import SendDataToApi from './Card/SendDataToApi';
// import CardForm from './Card/CardForm';
// import axios from "axios";
// import { userActions } from '../actions';
// import { HomePage } from '../HomePage/index'
// import TableItem from '../components/Table/TableItem'

// export default class CardLists extends Component {
//     constructor(props) {
//         super(props);
//     }
//     state = {
//         cards: []


//     };

//     componentDidMount() {
//         // const token = this.props.user.token;
//         // const config = {
//         //     headers: { Authorization: `Bearer ${token}` }
//         // };
//         // const userID = this.props.user.id;
//         // console.log(this.props);
//         axios.get(
//             `https://ninjaorganizer.azurewebsites.net/users/1005/taskboards/1148/cards/`,
//             // config
//         ).then(res =>
//             this.setState({
//                 tables: res.data
//             })
//         )
//     }


//     //toggle complete
//     markComplete = id => {
//         this.setState({
//             cards: this.state.cards.map(card => {
//                 if (card.id === id) {
//                     card.completed = !card.completed;
//                 }
//                 return card;
//             })
//         });
//     };

//     // // Usuwanie karty
//     // deleteCard = id => {
//     //     axios.delete(`https://ninjaorganizer.azurewebsites.net/users/1/taskboards/1/cards/${id}`).then(res =>
//     //         this.setState({
//     //             cards: [...this.state.cards.filter(card => card.id !== id)]
//     //         })
//     //     );
//     // };

//     // Usuwanie karty
//     deleteCard = id => {
//         const token = this.props.user.token;
//         const config = {
//             headers: { Authorization: `Bearer ${token}` }
//         };
//         const userID = this.props.user.id;
//         axios.delete(`https://ninjaorganizer.azurewebsites.net/users/${userID}/taskboards/${id}`, config).then(res =>
//             this.setState({
//                 cards: [...this.state.cards.filter(card => card.id !== id)]
//             })
//         );
//     };



//     render() {
//         return (
//             <>
//                 <MenuCard />
//                 <div className="container cardCustom">
//                 </div>
//                 <div className="container cardCustom">
//                     <ShowCard
//                         cards={this.state.cards}
//                         markComplete={this.markComplete}
//                         deleteCard={this.deleteCard}
//                     />
//                 </div>
//                 <Footer />
//             </>
//         )
//     }
// }

// function mapStateToProps(state) {
//     const { users, authentication } = state;
//     const { user } = authentication;
//     return {
//         user,
//         users,
//     };
// }

// const connectedCardLists = connect(mapStateToProps)(CardLists);
// export { connectedCardLists as CardLists };