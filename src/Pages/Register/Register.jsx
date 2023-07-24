import React from 'react';
import "./Register.css"
import { Button, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Register = () => {

    const handleRegister = event =>{}
    return (
        <div className='register-bg p-5 text-center  text-light'>
            <h2 className='pt-5 '>Register </h2>
            <div className='back d-flex flex-column  '>
            <Form onSubmit={handleRegister}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Name</Form.Label>
                    <Form.Control style={{width: "40%", margin: "0 auto"}}  type="text" name='name' placeholder="Your Name" required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Photo URL</Form.Label>
                    <Form.Control style={{width: "40%", margin: "0 auto"}}  type="text" name='photo' placeholder="Photo URL" required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control style={{width: "40%", margin: "0 auto"}}  type="email" name='email' placeholder="Enter email" required />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control style={{width: "40%", margin: "0 auto"}}  type="password" name='password' placeholder="Password" required />
                </Form.Group>

                
                <Button variant="danger"  type="submit">
                    Register
                </Button>
                <br />
                <Form.Text className="text-light    ">
                    Already Have an Account? <Link to="/login">Login</Link>
                </Form.Text>
               
                <br />
                <Form.Text className="text-danger">
                {/* {error} */}
                </Form.Text>
            </Form>
            </div>
        </div>
    );
};

export default Register;