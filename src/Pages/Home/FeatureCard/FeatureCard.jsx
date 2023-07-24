import React from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import { PiBrainDuotone } from 'react-icons/pi';
import { RiWifiOffLine } from 'react-icons/ri';
import { PiHandHeartThin } from 'react-icons/pi';
import { AiFillSafetyCertificate } from 'react-icons/ai';

const FeatureCard = () => {
    return (
        <div style={{position: "relative", top:"-50px"}}>
            <Row xs={1} md={4} className="g-4 mx-5 mb-3">

                <Col >
                    <Card className='d-flex justify-content-around bg-dark text-light py-4' style={{height: "260px"}}>

                        <div className= "d-flex">
                            <div className='ms-3 mt-4' >
                                <PiBrainDuotone style={{height: "30px", width: "30px"}}/>
                            </div>
                            <Card.Body >
                                <Card.Title>AI-Copilot</Card.Title>
                                <Card.Text>
                                Enhance your screenwriting experience with GPT-powered editing features and AI-generated imagery
                                </Card.Text>
                            </Card.Body>
                        </div>
                    </Card>
                </Col>
                <Col >
                    <Card className='d-flex justify-content-around bg-dark text-light py-4' style={{height: "260px"}} >

                        <div className= "d-flex">
                            <div className='ms-3 mt-4' >
                                <RiWifiOffLine style={{height: "30px", width: "30px"}}/>
                            </div>
                            <Card.Body >
                                <Card.Title>Offline-Capable</Card.Title>
                                <Card.Text>
                                Work on the go without having to rely on the cloud and an always-required internet connectiony
                                </Card.Text>
                            </Card.Body>
                        </div>
                    </Card>
                </Col>
                <Col >
                    <Card className='d-flex justify-content-around bg-dark text-light py-4' style={{height: "260px"}}>

                        <div className= "d-flex">
                            <div className='ms-3 mt-4' >
                                <PiHandHeartThin style={{height: "30px", width: "30px"}}/>
                            </div>
                            <Card.Body >
                                <Card.Title>Free</Card.Title>
                                <Card.Text>
                                Enjoy the NOLAN free version while also influencing the further development of the product.
                                </Card.Text>
                            </Card.Body>
                        </div>
                    </Card>
                </Col>
                <Col >
                    <Card className='d-flex justify-content-around bg-dark text-light py-4' style={{height: "260px"}} >

                        <div className= "d-flex">
                            <div className='ms-3 mt-4' >
                                <AiFillSafetyCertificate style={{height: "30px", width: "30px"}}/>
                            </div>
                            <Card.Body >
                                <Card.Title>Secure</Card.Title>
                                <Card.Text>
                                Don’t worry, your screenplay is secure and encrypted with Nolan
                                </Card.Text>
                            </Card.Body>
                        </div>
                    </Card>
                </Col>

            </Row>
        </div>
    );
};

export default FeatureCard;