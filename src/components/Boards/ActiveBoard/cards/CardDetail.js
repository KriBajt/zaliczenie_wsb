import React, { Component } from 'react'
import { Modal, Row, Col, Form } from 'react-bootstrap';
import { Button, ButtonToolbar } from 'react-bootstrap';
import CKEditor from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import './../../../Button/Button.css';
import { IoIosCloseCircle, IoIosSave } from 'react-icons/io';
import axios from 'axios';

export default class CardDetail extends Component {
    constructor(props) {
        super(props)

        this.state = {
            title: '',
            content: '',
            state: '',
            priority: '',
            error: null,
            isLoaded: false,
            items: ''
        }
    }

    changeHandler = (e) => {
        this.setState({ [e.target.name]: e.target.value })
    }

    submitHandler = e => {
        e.preventDefault()
        console.log(this.state)
        axios.post('http://localhost:1028/api/taskboards/3/cards/', this.state)
            .then(response => {
                console.log(response)
                console.log('ok')

            })
            .catch(error => {
                console.log(error)
                console.log('dupa')

            })
    }

    render() {
        // const { error, isLoaded, items } = this.state;
        const { title, content, state, priority, items } = this.state

        // if (error) {
        //     return <div>Błąd: {error.message}</div>;
        // } else if (!isLoaded) {
        //     return <div>Ładowanie...</div>;
        // } else {
        return (
            <>
                <Modal
                    {...this.props}
                    size="xl"
                    aria-labelledby="contained-modal-title-vcenter"
                    centered
                >
                    <Modal.Header closeButton>
                        <Modal.Title id="contained-modal-title-vcenter">
                            Szczegóły zadania
                    </Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <div className="container modalBodyCustom">
                            <Form onSubmit={this.submitHandler}>
                                <div className="row justify-content-between">
                                    <div className="col-12 col-md-8 ">
                                        <div className="cardDetailNav">
                                            <p>Tutaj mogą być jakieś inputy dodaj plik, udostępnij itp..</p>
                                        </div>
                                        <div className="cardDetailContent">
                                            {/* <h6 className="mt-5"> {items.map(item => (
                                                    <p key={item.title}> value={title} onChange={this.changeHandler}
                                                    </p>
                                                ))}Tytuł</h6> */}
                                            <Form.Group id="cardDetailPriority">
                                                <Form.Control as="input" name="title" value={title} onChange={this.changeHandler} />
                                            </Form.Group>
                                            {/* <Form.Group id="cardDetailShortDescription">
                                                    <Form.Control as="textarea" rows="1" placeholder={items[1].title} />
                                                </Form.Group> */}

                                            <h6 className="mt-5">Pełny Opis</h6>
                                            <Form.Group id="cardDetailDescription">
                                                <CKEditor
                                                    editor={ClassicEditor}
                                                    ref="content"
                                                    // value={content}
                                                    data='dupa'
                                                    onInit={editor => {
                                                        // You can store the "editor" and use when it is needed.
                                                        console.log('Editor is ready to use!', editor);
                                                    }}
                                                    onChange={(event, editor) => {
                                                        const data = editor.getData();
                                                        console.log({ event, editor, data });
                                                    }}
                                                    onBlur={(event, editor) => {
                                                        console.log('Blur.', editor);
                                                    }}
                                                    onFocus={(event, editor) => {
                                                        console.log('Focus.', editor);
                                                    }}
                                                />
                                            </Form.Group>
                                        </div>

                                        <Button variant="primary" type="submit" className="ml-0">
                                            <IoIosSave />
                                        </Button>
                                    </div>
                                    <div className=" col-12 col-md-2 ml-0 pl-0 cardDetailAction">
                                        <div >
                                            <p>Status zadania</p>
                                            <Form.Group id="cardDetailPriority">
                                                <Form.Control as="input" name="state" value={state} onChange={this.changeHandler} />
                                            </Form.Group>
                                            <hr />
                                            <p>Termin</p>
                                            <hr />
                                            <p>Osoba przypisana</p>
                                            <hr />
                                            <p>Prioritet</p>
                                            <Form.Group id="cardDetailPriority">
                                                <Form.Control as="input" name="priority" value={priority} onChange={this.changeHandler} />
                                            </Form.Group>
                                            <hr />
                                        </div>
                                    </div>
                                </div>
                            </Form>

                        </div>
                        <div className="cardDetailCommentContent">
                            <h6>Komentarze</h6>
                            <div className="cardDetailCommentContentItems">
                                <div className="row">
                                    <div className="col-2"><p>Ikona</p></div>
                                    <div className="col-8 cardDetailCommentContentItem"> <p>Komentarz nr 1.....</p></div>
                                    <hr />
                                </div>
                                <div className="row">
                                    <div className="col-2"><p>Ikona</p></div>

                                    <div className="col-8 cardDetailCommentContentItem"> <p> Komentarz nr 2.....</p></div>
                                    <hr />
                                </div>
                                <div className="row">
                                    <div className="col-2"> <p>Ikona</p></div>
                                    <div className="col-8 cardDetailCommentContentItem"> <p> Komentarz nr 3.....</p></div>
                                    <hr />
                                </div>
                            </div>
                        </div>

                    </Modal.Body>
                    <Modal.Footer>
                        <Button className="btnDanger" onClick={this.props.onHide}><IoIosCloseCircle /></Button>
                    </Modal.Footer>
                </Modal>
            </>
        )
    }
}
// }