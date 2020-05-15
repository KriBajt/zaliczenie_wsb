// import React, { Component } from 'react';
// import TrelloList from "../TrelloList";
// import { connect } from "react-redux";
// import TrelloActionButton from "../Button/TrelloActionButton";
// import 'bootstrap/dist/css/bootstrap.min.css';
// import { sort } from "../../actions";
// import { GiNinjaHead } from 'react-icons/gi';
// import Menu from '../Menu/Menu';
// import Footer from '../Footer/Footer';
// import Dane from '../../dane';
// import BtnCardDetails from '../components/Button/BtnCardDetails';
// import CardDetail from '../Table/TableDetail'
// import ShowTable from '../Table/ShowTable';
// import Modal from '../Modal/Modal';
// // import SendDataToApi from './Table/SendDataToApi';
// import TableForm from '../Table/TableForm';
// import axios from "axios";
// import { userActions } from '../../actions';

// import { Link } from 'react-router-dom';
// import 'bootstrap/dist/css/bootstrap.min.css';
// // coś modal psuje


// class MainBoard extends Component {

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
//             .get(`hhttp://localhost:1028/users/1003/taskboards/`)
//             .then(res =>
//                 this.setState({
//                     tables: res.data
//                 })
//             );
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

//     // editTable = id => {
//     //     axios.delete(`http://localhost:1028/taskboards/${id}`).then(res =>
//     //         this.setState({
//     //             tables: [...this.state.tables.filter(table => table.id !== id)]
//     //         })
//     //     );
//     // };

//     // Usuwanie karty
//     deleteTable = id => {
//         axios.delete(`http://localhost:1028/users/1003/taskboards/${id}`).then(res =>
//             this.setState({
//                 tables: [...this.state.tables.filter(table => table.id !== id)]
//             })
//         );
//     };

//     setUpdate = (title, id) => {
//         axios.put(`http://localhost:1028/users/1003/taskboards/${id}`, {
//             Title: 'dupa',
//         }).then(response => {
//             console.log(response);
//         })
//             .catch(error => {
//                 console.log(error);
//             });
//     }

//     handleChange = (e) => {
//         this.setState({
//             tables: e.target.value,
//         });
//     }



//     render() {
//         return (
//             <>
//                 <Menu />
//                 <div className="container cardCustom">
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

//                 <Modal />
//                 <Footer />
//             </>
//         )
//     }
// }

// const mapStateToProps = state => ({
//     lists: state.lists
// });

// export default connect(mapStateToProps)(MainBoard);