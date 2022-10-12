import React, { Component } from "react";
import { Form, Button } from "react-bootstrap";
import { Modal } from "react-bootstrap/cjs";

export default class FormRegister extends Component {
  render() {
    const {
      email,
      username,
      password,
      handleChangeInput,
      show,
      onHide,
      createNewUser,
    } = this.props;
    return (
      <div>
        <Modal show={show}>
          <Modal.Body>
            <Modal.Header closeButton>
              <Modal.Title id="contained-modal-title-vcenter">
                REGISTER
              </Modal.Title>
            </Modal.Header>

            <Form>
              <Form.Group controlId="formBookName">
                <Form.Label>EMAIL</Form.Label>
                <Form.Control
                  value={email}
                  type="text"
                  name="email"
                  placeholder="Input name"
                  onChange={(event) => handleChangeInput(event)}
                />
              </Form.Group>

              <Form.Group controlId="formBookName">
                <Form.Label>USERNAME</Form.Label>
                <Form.Control
                  value={username}
                  type="text"
                  name="username"
                  placeholder="Input username"
                  onChange={(event) => handleChangeInput(event)}
                />
              </Form.Group>

              <Form.Group controlId="formBookName">
                <Form.Label>PASSWORD</Form.Label>
                <Form.Control
                  value={password}
                  type="password"
                  name="password"
                  placeholder="Input name"
                  onChange={(event) => handleChangeInput(event)}
                />
              </Form.Group>
            </Form>
          </Modal.Body>
          <Modal.Footer>
            <Button
              onClick={() => {
                createNewUser();
                onHide();
              }}
              style={{ backgroundColor: "blue" }}
            >
              REGISTER
            </Button>
            <Button
              onClick={() => onHide()}
              style={{ backgroundColor: "blue" }}
            >
              CANCEL
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    );
  }
}
