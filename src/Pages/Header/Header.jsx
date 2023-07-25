import React, { useContext, useState } from 'react';
import {  Container, Nav, Navbar } from 'react-bootstrap';
import "./Header.css"
import { Link } from 'react-router-dom';
import icon from "../../assets/favicon-32x32.png"
import CreateScript from '../CreateScript/CreateScript';
import { AuthContext } from '../../providers/AuthProvider';


const Header = () => {
    //script Modal
    const [showModal, setShowModal] = useState(false);

    const handleModalClose = () => {
        setShowModal(false);
    };

    const handleModalOpen = () => {
        setShowModal(true);
    };
    // Logout
    const { user, logOut } = useContext(AuthContext);
    const handleLogOut = () => {
        logOut()
            .then()
            .catch(error => console.log(error));
    }
    return (
        <div >
            <Navbar fixed="top" data-bs-theme="dark" className='custom-header '>

                <Container >

                    <Link className='text-decoration-none text-light' to='/'>
                        <img src={icon} alt=""  className='d-block ms-1' style={{ height: "27px", width: "70%" }} />
                        NOLAN
                    </Link>
                    <div className='justify-content-end'>
                        <Nav className="me-auto text-white ">
                            {
                                user && <Link to="/dashboard"  className='text-decoration-none text-light me-4 mt-2'>Dashboard</Link>
                            }
                            <Link className='text-decoration-none text-light me-4 mt-2'>About us</Link>
                            <Link className='text-decoration-none text-light me-4 mt-2'>Pricing</Link>
                            <Link className='text-decoration-none text-light me-4 mt-2 ' onClick={handleModalOpen}>Create Script</Link>
                            <Link className='text-decoration-none text-light me-4 mt-2 '>Blog</Link>
                            {user ?
                                <Link onClick={handleLogOut} className='text-decoration-none text-light me-4 mt-2'>Logout</Link> :
                                <Link to="/login" className='text-decoration-none text-light me-4 mt-2'>
                                    Login
                                </Link>
                            }

                            {user && <p className='text-white pt-2 me-3 ' data-toggle="tooltip" data-placement="right" title={user?.displayName}> <img src={user?.photoURL
                            } alt="" style={{ height: '40px', borderRadius: '50%', width: '40px' }} /> </p>}
                        </Nav>
                    </div>
                </Container>

            </Navbar>
            <CreateScript show={showModal} handleClose={handleModalClose} ></CreateScript>
        </div >
    );
};

export default Header;