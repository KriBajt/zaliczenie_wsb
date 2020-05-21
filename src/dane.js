// import React, { Component } from 'react'

// export default class dane extends Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             error: null,
//             isLoaded: false,
//         };
//     }

//     componentDidMount() {
//         fetch("https://ninjaorganizer.azurewebsites.net/taskboards/3/cards")
//             .then(res => res.json())
//             .then(
//                 (result) => {
//                     this.setState({
//                         isLoaded: true,
//                         items: result
//                     });
//                 },
//                 // Uwaga: to ważne, żeby obsłużyć błędy tutaj, a
//                 // nie w bloku catch(), aby nie przetwarzać błędów
//                 // mających swoje źródło w komponencie.
//                 (error) => {
//                     this.setState({
//                         isLoaded: true,
//                         error
//                     });
//                 }
//             )
//     }

//     render() {
//         const { error, isLoaded, items } = this.state;
//         if (error) {
//             return <div>Błąd: {error.message}</div>;
//         } else if (!isLoaded) {
//             return <div>Ładowanie...</div>;
//         } else {
//             return (
//                 <>
//                     <ul>
//                         {items.map(item => (
//                             <div class="card text-white bg-dark mb-3">
//                                 <div class="card-header">
//                                     <p key={item.title}>{item.title}</p>
//                                 </div>
//                                 <div class="card-body">
//                                     <h5 class="card-title">Dark card title</h5>
//                                     <p class="card-text">{item.content}</p>
//                                 </div>

//                             </div>
//                         ))}
//                     </ul>
//                 </>
//             );
//         }
//     }
// }
