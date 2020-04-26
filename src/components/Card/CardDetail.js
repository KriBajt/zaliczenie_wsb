import React, { Component } from 'react'
import { Modal, Row, Col, Form } from 'react-bootstrap';
import { Button, ButtonToolbar } from 'react-bootstrap';
import CKEditor from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import './CardDetail.css';
import { IoIosCloseCircle, IoIosSave } from 'react-icons/io';

export default class CardDetail extends Component {
    constructor(props) {
        super(props);

    }

    render() {
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
                            <Form>
                                <div className="row justify-content-between">
                                    <div className="col-12 col-md-8 ">
                                        <div className="cardDetailNav">
                                            <p>Dodaj eplik </p>
                                            <span> | </span>
                                            <p> Nazwa projektu</p>
                                        </div>
                                        <div className="cardDetailContent">
                                            <h4>Przykładowy temat zadania do wykonania...</h4>
                                            <h6 className="mt-5">Krótki opis</h6>
                                            <Form.Group id="cardDetailShortDescription">
                                                <Form.Control as="textarea" rows="2" />
                                            </Form.Group>
                                            <h6 className="mt-5">Pełny Opis</h6>
                                            <Form.Group id="cardDetailDescription">
                                                <CKEditor
                                                    editor={ClassicEditor}
                                                    data="<p>Dodaj opis...</p>"
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
                                            <hr />
                                            <p>Termin</p>
                                            <hr />
                                            <p>Osoba przypisana</p>
                                            <hr />
                                            <p>Prioritet</p>
                                            <hr />

                                        </div>
                                    </div>
                                </div>
                            </Form>

                        </div>
                        <div className="cardDetailCommentContent">
                            <h6>Komentarze</h6>
                            <div className="cardDetailCommentContentItems">
                                <div class="row">
                                    <div className="col-2"><p>Ikona</p></div>
                                    <div className="col-8 cardDetailCommentContentItem"> <p>Komentarz nr 1.....</p></div>
                                    <hr />
                                </div>
                                <div class="row">
                                    <div className="col-2"><p>Ikona</p></div>

                                    <div className="col-8 cardDetailCommentContentItem"> <p> Komentarz nr 2.....</p></div>
                                    <hr />
                                </div>
                                <div class="row">
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