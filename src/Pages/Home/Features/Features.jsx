import React from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import intro from "../../../assets/intro.webp";
import history from "../../../assets/history.webp";
import suggestion from "../../../assets/suggestion.webp";
import accent from "../../../assets/accent.webp";
import script1 from "../../../assets/script_smart.webp";
const Features = () => {
    return (
        <div className=' py-5' style={{ backgroundColor: "rgba(44, 42, 42, 0.397)" }}>
            <h3 className='text-center my-5 ' >Features</h3>
            <Row xs={1} md={2} className="g-3 mx-5 mb-5">
                <Col>
                    <img src={intro} alt="" style={{ height: "300px", width: "80%" }} />
                </Col>
                <Col >
                    <Card.Body >

                        <h1>THE INDUSTRY STANDARD SCRIPT WRITING SOFTWARE</h1>
                        <Card.Text>
                            Nolan provides a user-friendly interface, advanced formatting options, and helpful features such as character and scene breakdowns, revision tracking, and collaboration tools. With its powerful tools and intuitive design.
                        </Card.Text>
                    </Card.Body>

                </Col>

            </Row>
            <Row xs={1} md={2} className="g-5 mx-5 mb-5">

                <Col >
                    <Card.Body >

                        <h1>TRACK EVERY EDIT WITH EASE</h1>
                        <Card.Text>
                            A per-row script history list is a feature in scriptwriting software that allows writers to track changes made to their scripts on a row-by-row basis. With this feature, writers can see a complete history of edits made to each line of dialogue, stage direction, or action in their script. This makes it easy to compare different versions of a script and to identify where changes have been made. The per-row script history list is an essential tool for writers who want to keep track of their progress and ensure that their scripts are always up-to-date.
                        </Card.Text>
                    </Card.Body>

                </Col>
                <Col>
                    <img src={history} alt="" style={{ height: "300px", width: "80%" }} />
                </Col>
            </Row>
            <Row xs={1} md={2} className="g-5 mx-5 mb-5">
                <Col>
                    <img src={suggestion} alt="" style={{ height: "300px", width: "80%" }} />
                </Col>
                <Col >
                    <Card.Body >

                        <h1>ASK NOLAN FOR SUGGESTION</h1>
                        <Card.Text>
                            To help you create high-quality story, Nolan offers a powerful editing feature. With "Ask Nolan", you can easily enhance the quality of your text by highlighting the selected text, correcting any spelling and grammar errors, and adjusting the tone of the paragraph as necessary. This feature provides you with the flexibility to customize your text and make it more engaging and effective.
                        </Card.Text>
                    </Card.Body>

                </Col>

            </Row>
            <Row xs={1} md={2} className="g-5 mx-5 mb-5">

                <Col >
                    <Card.Body >

                        <h1>CHANGE YOUR CHARACTER ACCENT</h1>
                        <Card.Text>
                            Personalize your character and make it truly unique. "Change Accent" allows you to change your character's accent, making it sound more distinct and authentic. Whether you want to add a touch of personality to your character or create a character that stands out, this feature provides you with the flexibility to customize your character's accent to match your preferences. With this feature, you can create a character that truly represents you and brings your story to life.
                        </Card.Text>
                    </Card.Body>

                </Col>
                <Col>
                    <img src={accent} alt="" style={{ height: "300px", width: "80%" }} />
                </Col>
            </Row>
            <Row xs={1} md={2} className="g-5 mx-5 mb-5">
                <Col>
                    <img src={script1} alt="" style={{ height: "300px", width: "80%" }} />
                </Col>
                <Col >
                    <Card.Body >

                        <h1>SCRIPT SMART</h1>
                        <Card.Text>
                            Script Smart uses advanced algorithms to automatically format your text into a screenplay format. With Script Smart, you can save time and focus on writing by letting the software handle the formatting for you. This feature also provides suggestions and corrections to help ensure that your screenplay adheres to industry standards and is formatted correctly.
                        </Card.Text>
                    </Card.Body>

                </Col>

            </Row>
        </div>
    );
};

export default Features;