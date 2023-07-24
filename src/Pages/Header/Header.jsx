import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import "./Header.css"
import { Link } from 'react-router-dom';
import icon from "../../assets/favicon-32x32.png"

const Header = () => {
    return (
        <div >
            <Navbar fixed="top" data-bs-theme="dark" className='custom-header '>

                <Container >

                    <Link className='text-decoration-none '>
                        <img src={icon} alt="" srcset="" className='d-block ms-1' style={{height: "27px", width: "70%" }} />
                        <Navbar.Brand>NOLAN</Navbar.Brand>
                    </Link>
                    <div className='justify-content-end'>
                        <Nav className="me-auto text-white ">
                            <Link className='text-decoration-none'><Nav.Link>About us</Nav.Link></Link>
                            <Link className='text-decoration-none '><Nav.Link>Login</Nav.Link></Link>
                            <Link className='text-decoration-none '><Nav.Link>Pricing</Nav.Link></Link>
                            <Link className='text-decoration-none '><Nav.Link>Create Script</Nav.Link></Link>
                            <Link className='text-decoration-none '><Nav.Link>Blog</Nav.Link></Link>

                        </Nav>
                    </div>
                </Container>

            </Navbar>

        </div >
    );
};

export default Header;