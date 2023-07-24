import React from 'react';
import { Button, Form, Modal } from 'react-bootstrap';

const CreateScript = ({ show, handleClose }) => {
    return (
        <div>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Create Script</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    {/* Add your modal content here */}

                    <Form>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>*Title</Form.Label>
                            <Form.Control type="text" name="tilte" placeholder="Untitled Screenplay" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                            <Form.Label>Plot</Form.Label>
                            <Form.Control name="genre" as="textarea" rows={3} placeholder='Sci-fi adventure across multiverse' />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>*Genre</Form.Label>
                            <Form.Control type="text" name="genre" />
                        </Form.Group>
                    </Form>
                    <div >
                        <p className="text-center">OR</p>
                    </div>
                    <div className='text-center'>
                        <Button variant="outline-danger" >Upload .PDF</Button>
                    </div>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="outline-danger" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="danger" >
                       Submit
                    </Button>
                    {/* Add additional footer buttons if needed */}
                </Modal.Footer>
            </Modal>
        </div>
    );
};

export default CreateScript;