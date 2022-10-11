import React from "react";
import { Form, Button } from "react-bootstrap";
import { Modal } from "react-bootstrap/cjs";

const CreatName = (props) => {
  const { show, onHide, handleChangeInput, createNewName, name } = props;

  return (
    <div>
      <Modal show={show}>
        <Modal.Body>
          <Modal.Header closeButton>
            <Modal.Title id="contained-modal-title-vcenter">
              CREATE NAME
            </Modal.Title>
          </Modal.Header>

          <Form>
            <Form.Group controlId="formBookName">
              <Form.Label>NAME</Form.Label>
              <Form.Control
                value={name}
                type="text"
                name="name"
                placeholder="Input name"
                onChange={(event) => handleChangeInput(event)}
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button
            onClick={() => createNewName()}
            style={{ backgroundColor: "blue" }}
          >
            Submit
          </Button>
          <Button onClick={() => onHide()} style={{ backgroundColor: "blue" }}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default CreatName;
