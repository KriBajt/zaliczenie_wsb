// import React, { Component } from 'react'
// import { render } from 'react-dom'
// import './CardDetail.css';


// export default class SendDataToApi extends Component {

//     constructor() {
//         super()
//     }
//     componentWillMount() {
//         this.getData()
//     }

//     getData() {
//         // create a new XMLHttpRequest
//         var xhr = new XMLHttpRequest()

//         // get a callback when the server responds
//         xhr.addEventListener('load', () => {
//             // update the state of the component with the result here
//             console.log(xhr.responseText)
//         })
//         // open the request with the verb and the url
//         xhr.open('POST', 'http://localhost:1028/api/taskboards/3/cards')
//         // send the request
//         xhr.send()
//     }

//     render() {
//         return (
//             <div>
//                 <p>Hello World</p>
//             </div>
//         )
//     }
// }

