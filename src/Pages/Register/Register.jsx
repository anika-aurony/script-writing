import React, { useContext, useState } from 'react';
import "./Register.css"
import { Button, Form } from 'react-bootstrap';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../providers/AuthProvider';
import { updateProfile } from 'firebase/auth';
import "./Register.css"
const Register = () => {
    const { createUser } = useContext(AuthContext);
    const [error, setError] = useState('')
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || '/dashboard'

    const handleRegister = event => {
        setError('')
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const photo = form.photo.value;
        const email = form.email.value;
        const password = form.password.value;
        if (password.length < 6) {
            setError('Password should be minimum 6 characters')
        }
        console.log(name, photo, email, password);
        createUser(email, password, photo)
            .then(result => {
                const createdUser = result.user;
                console.log(createdUser);
                updateUserData(result.user, name, photo);
                navigate(from, { replace: true })
            })
            .catch(error => {
                console.log(error);

            })
        form.reset();
    }

    const updateUserData = (user, name, photo) => {
        updateProfile(user, {
            displayName: name,
            photoURL: photo
        })
        .then(()=>{
            console.log('user name updated')
        })
        .catch(()=>{
            setError(error.message)
        })
    }
    return (
        <div className='register-bg p-5 text-center  text-light'>
            <h2 className='pt-5 '>Register </h2>
            <div className='back d-flex flex-column  '>
                <Form onSubmit={handleRegister}>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Name</Form.Label>
                        <Form.Control style={{ width: "40%", margin: "0 auto" }} type="text" name='name' placeholder="Your Name" required />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Photo URL</Form.Label>
                        <Form.Control style={{ width: "40%", margin: "0 auto" }} type="text" name='photo' placeholder="Photo URL" required />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control style={{ width: "40%", margin: "0 auto" }} type="email" name='email' placeholder="Enter email" required />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control style={{ width: "40%", margin: "0 auto" }} type="password" name='password' placeholder="Password" required />
                    </Form.Group>


                    <Button variant="danger" type="submit">
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