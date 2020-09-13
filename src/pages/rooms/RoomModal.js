import React, { Component, useState } from "react";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { times } from "@fortawesome/free-solid-svg-icons";
import { Modal, Button, Row, Form, Col } from "react-bootstrap";

const RoomModal = (props) => {
    const {
        handleChange,
        showDetails,
        hideDetails,
        selectedRoom,
        createRoom,
        edited,
    } = props;

    const [validated, setValidated] = useState(false);
    const onValidated = (event) => {
        const form = event.currentTarget;
        console.log(form);
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        } else {
            createRoom(event);
        }
        setValidated(true);
    };
    return (
        <Modal show={showDetails}>
            <Modal.Header>
                <Modal.Title id="contained-modal-title-vcenter">
                    Detail Room
                </Modal.Title>
            </Modal.Header>
            <Form
                noValidate
                validated={validated}
                onSubmit={(event) => {
                    onValidated(event);
                }}
            >
                <Modal.Body>
                    <Form.Group as={Row} controlId="formGridRoom">
                        <Form.Label column sm={3}>
                            Room Name
                        </Form.Label>
                        <Col sm={9}>
                            <Form.Control
                                name="roomName"
                                type="text"
                                placeholder="Input Room Name"
                                onChange={(event) => {
                                    handleChange(event, "roomName");
                                }}
                                value={selectedRoom["roomName"]}
                                required="true"
                                // ref={inputFocus}
                                autoFocus={true}
                            />
                            <div className="valid-feedback">Looks good!</div>
                            <div className="invalid-feedback">
                                Form can't be empty
                            </div>
                        </Col>
                    </Form.Group>

                    <Form.Group as={Row} controlId="formGridPrice">
                        <Form.Label column sm={3}>
                            Price
                        </Form.Label>
                        <Col sm={9}>
                            {/* <InputGroup.Prepend>
                                    <InputGroup.Text>Rp</InputGroup.Text>
                                </InputGroup.Prepend> */}
                            <Form.Control
                                name="price"
                                type="number"
                                placeholder="Input Price ex:10000"
                                onChange={(event) => {
                                    handleChange(event, "price");
                                }}
                                value={selectedRoom["price"]}
                                required="true"
                            />
                            <div className="valid-feedback">Looks good!</div>
                            <div className="invalid-feedback">
                                Form can't be empty
                            </div>
                        </Col>
                    </Form.Group>
                    <Form.Group as={Row} controlId="formGridRoom">
                        <Form.Label column sm={3}>
                            Room Status
                        </Form.Label>
                        <Col sm={9}>
                            <Form.Control
                                name="status"
                                type="text"
                                // placeholder="Input Room Status"
                                onChange={(event) => {
                                    handleChange(event, "status");
                                }}
                                value={selectedRoom["status"]}
                                disabled={edited}
                                required="true"
                            />
                        </Col>
                    </Form.Group>
                </Modal.Body>
                <Modal.Footer>
                    <Button
                        className="float-right"
                        variant="primary"
                        type="submit"
                    >
                        Submit
                    </Button>
                    <Button
                        onClick={() => {
                            hideDetails();
                        }}
                    >
                        Cancel
                    </Button>
                </Modal.Footer>
            </Form>
        </Modal>
    );
};

export default RoomModal;
