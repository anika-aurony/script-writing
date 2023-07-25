import React, { useContext, useState } from 'react';
import "./Login.css"
import { Button, Form } from 'react-bootstrap';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../providers/AuthProvider';

const Login = () => {
    const { signIn, signInWithGoogle, signInWithGithub } = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || '/dashboard'
    const [error, setError] = useState('')

    const handleLogin = event =>{
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);

        signIn(email, password)
            .then(result => {
                const loggedUser = result.user;
                console.log(loggedUser);
                navigate(from, { replace: true })
            })
            .catch(error => {
                console.log(error.message);
                setError(error.message)
            })
    }

    const handleGoogleSignIn = () => {
        signInWithGoogle()
        .then(result =>{
            const logUser = result.user;
            console.log(logUser);
            navigate(from, { replace: true })
        })
        .catch(error=>{
            console.log(error.message)
        })

    }

    return (
        <div className='p-5 text-center login-bg text-light'>
            <h2 className='pt-5 '>Log in </h2>
            <p>Log in to unlock the full Nolan Experience.</p>
            <div className='back d-flex flex-column  '>
                <Button variant='danger' className='text-center' onClick={handleGoogleSignIn}>Continue With Google</Button>
               
                <Button variant='danger'>Continue With Facebook</Button>
                or
                <Form onSubmit={handleLogin} className=''>
                    <Form.Group className="my-3" controlId="formBasicEmail">
                        
                        <Form.Control style={{width: "40%", margin: "0 auto"}} type="email" name='email' placeholder="Enter email" required />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        
                        <Form.Control style={{width: "40%", margin: "0 auto"}} type="password" name='password' placeholder="Password" required />
                    </Form.Group>

                    <Button variant="danger" type="submit" className=''>
                        Login
                    </Button>
                    <br />
                    <Form.Text className="text-light">
                        Don't Have an Account? <Link to="/register">Register</Link>
                    </Form.Text>
                    <Form.Text className="text-success">

                    </Form.Text>
                    <br />
                    <Form.Text className="text-danger">
                        {error}
                    </Form.Text>

                </Form>
                <p>Forget Password?</p>
                <p className='pt-3'><small>By signing up, you agree to the Terms of Service and Privacy Policy.</small></p>
            </div>
        </div>
    );
};

export default Login;