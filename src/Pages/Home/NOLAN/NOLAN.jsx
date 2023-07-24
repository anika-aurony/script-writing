import React from 'react';
import { Button, Card, Col, Row } from 'react-bootstrap';
import YouTube from 'react-youtube';

const NOLAN = () => {
    const opts = {
        height: '320',
        width: '500',
        playerVars: {
            // Add any YouTube player parameters here (optional)
            autoplay: 1, // Autoplay the video when the component mounts
        },
    };

    const videoId = 'p6P4EDHqAV4';

    return (
        <div className='text-white'>
            <Row xs={1} md={2} className="g-5 mx-5 mb-5">
                <Col >
                    <Card.Body >
                        <h3>What is NOLAN?</h3>
                        <h1>Light, camera, action!</h1>
                        <Card.Text>
                            NolanAI is the ultimate tool for any screenwriter looking to improve their craft. With its AI-powered features and user-friendly interface, it can help you bring your stories to life in the most efficient and effective way possible, while respecting your unique creative voice.
                        </Card.Text>
                    </Card.Body>
                    <Button className='p-2 my-3' variant="danger">Explore our premium plan! </Button>
                </Col>
                <Col>
                    <YouTube videoId={videoId} opts={opts} />
                </Col>
            </Row>
        </div>
    );
};

export default NOLAN;