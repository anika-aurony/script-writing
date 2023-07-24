import React, { useState } from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import "./Header.css"
import { Link } from 'react-router-dom';
import icon from "../../assets/favicon-32x32.png"
import CreateScript from '../CreateScript/CreateScript';

const Header = () => {

    const [showModal, setShowModal] = useState(false);

    const handleModalClose = () => {
        setShowModal(false);
    };

    const handleModalOpen = () => {
        setShowModal(true);
    };
    return (
        <div >
            <Navbar fixed="top" data-bs-theme="dark" className='custom-header '>

                <Container >

                    <Link className='text-decoration-none text-light' to='/'>
                        <img src={icon} alt="" srcset="" className='d-block ms-1' style={{ height: "27px", width: "70%" }} />
                        NOLAN
                    </Link>
                    <div className='justify-content-end'>
                        <Nav className="me-auto text-white ">
                            <Link className='text-decoration-none text-light me-4 mt-2'>About us</Link>
                            <Link to="/login" className='text-decoration-none text-light me-4 mt-2'>Login</Link>
                            <Link className='text-decoration-none text-light me-4 mt-2'>Pricing</Link>
                            <Link className='text-decoration-none text-light me-4 mt-2 ' onClick={handleModalOpen}>Create Script</Link>
                            <Link className='text-decoration-none text-light me-1 mt-2 '>Blog</Link>

                        </Nav>
                    </div>
                </Container>

            </Navbar>
            <CreateScript show={showModal} handleClose={handleModalClose} ></CreateScript>
        </div >
    );
};

export default Header;