import React, { Component } from 'react'
import { Modal, Row, Col, Form } from 'react-bootstrap';
import { Button, ButtonToolbar } from 'react-bootstrap';
import CKEditor from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import './CardDetail.css';

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
                        <div className="container">
                            <Form>
                                <div className="row">
                                    <div className="cardDetailNav">
                                        <p>Dodaj eplik </p>
                                        <span> | </span>
                                        <p> Nazwa projektu</p>
                                    </div>
                                </div>
                                <h4>Przykładowy temat zadania do wykonania...</h4>

                                <h6 className="mt-5">Opis</h6>
                                <div className="cardDetailContent">
                                    <div className="col-12 col-md-8 ml-0 pl-0">
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
                                    <div className="col-md-3">
                                        <p>dfsdfs</p>

                                    </div>

                                </div>


                                <Form.Row>
                                    <Form.Group as={Col} controlId="formGridZip">
                                        <Form.Label>Zip</Form.Label>
                                        <Form.Control />
                                    </Form.Group>
                                </Form.Row>



                                <Button variant="primary" type="submit">
                                    Kick it!
                                 </Button>
                            </Form>

                        </div>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="danger" onClick={this.props.onHide}>Kick Out!</Button>
                    </Modal.Footer>
                </Modal>
            </>
        )
    }
}