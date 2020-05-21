// import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
// import { connect } from 'react-redux';
// import { userActions } from '../actions';

// import TrelloList from '../components/TrelloList';
// import TrelloActionButton from "../components/Button/TrelloActionButton";
// import 'bootstrap/dist/css/bootstrap.min.css';
// import { sort } from "../actions";
// import { GiNinjaHead } from 'react-icons/gi';
// import Menu from '../components/Menu/Menu';
// import Footer from '../components/Footer/Footer';
// import BtnCardDetails from '../components/Button/BtnCardDetails'
// import CardDetail from '../components/Table/TableDetail'
// import ShowTable from '../components/Table/ShowTable';
// // coś modal psuje
// import Modal from '../components/Modal/Modal';
// import '../App.css';

// import TableForm from '../components/Table/TableForm';
// import axios from "axios";

// export default class Second extends Component {

//     constructor(props) {
//         super(props);
//     }
//     state = {
//         tables: [],
//         id: 1

//     };
//     componentDidMount() {
//         this.props.dispatch(userActions.getAll());

//         const { id } = this.state;
//         axios
//             .get(`https://ninjaorganizer.azurewebsites.net/users/1005/taskboards/`)
//             .then(res =>
//                 this.setState({
//                     tables: res.data
//                 })
//             );
//     }



//     // Usuwanie karty
//     deleteTable = id => {
//         axios.delete(`https://ninjaorganizer.azurewebsites.net/users/1005/taskboards/${id}`).then(res =>
//             this.setState({
//                 tables: [...this.state.tables.filter(table => table.id !== id)]
//             })
//         );
//     };

//     setUpdate = (title, id) => {
//         axios.put(`https://ninjaorganizer.azurewebsites.net/users/1005/taskboards/${id}`, {
//             Title: 'dupa',
//         }).then(response => {
//             console.log(response);
//         })
//             .catch(error => {
//                 console.log(error);
//             });
//     }

//     //toggle complete
//     markComplete = id => {
//         this.setState({
//             tables: this.state.tables.map(table => {
//                 if (table.id === id) {
//                     table.completed = !table.completed;
//                 }
//                 return table;
//             })
//         });
//     };

//     handleDeleteUser(id) {
//         return (e) => this.props.dispatch(userActions.delete(id));
//     }

//     render() {
//         const { user, users } = this.props;

//         return (
//             <>
//                 <Menu />
//                 <div className="container cardCustom">
//                 </div>

//                 <div className="tablica">
//                     <div className="hello">
//                         <p>Cześć!<br></br> {user.firstName} </p>
//                     </div>
//                     <div >
//                         <div className="container cardCustom">
//                             <ShowTable
//                                 tables={this.state.tables}
//                                 markComplete={this.markComplete}
//                                 deleteTable={this.deleteTable}
//                                 setUpdate={this.setUpdate}
//                                 onChange={this.handleChange}
//                                 {...this.props.user.firstName}

//                             />
//                         </div>
//                     </div>
//                 </div>

//                 <div className="container cardCustom">
//                     <ShowTable
//                         tables={this.state.tables}
//                         markComplete={this.markComplete}
//                         deleteTable={this.deleteTable}
//                         setUpdate={this.setUpdate}
//                         onChange={this.handleChange}
//                     />
//                 </div>
//                 <Footer />

//             </>
//         );
//     }
// }

// function mapStateToProps(state) {
//     const { users, authentication } = state;
//     const { user } = authentication;
//     return {
//         user,
//         users
//     };
// }

// const connectedSecond = connect(mapStateToProps)(Second);
// export { connectedSecond as Second };