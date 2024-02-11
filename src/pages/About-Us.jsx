import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import image from '../assets/BlackLabPhoto.png';

const AboutUs = () => {
    return (
        <Container>
            <h1> About Us</h1>
            <Row>
                <Col>
                <img className="AboutUs-Image" src={image} alt="Logo" />
                </Col>
                <Col>
                    <p><strong>Location:</strong> Cochrane, Alberta</p>
                    <p><strong>Focus:</strong> Healthcare for dogs and cats</p>
                    <p><strong>Lead Veterinarian:</strong> Dr. Dale Atkin</p>
                    <p style={{textAlign: 'left'}}>Cochrane Veterinary Care Clinic is renowned in the Cochrane community for its compassionate and quality care for pets.
                        The clinic, led by Dr. Dale Atkin, specializes in the healthcare of dogs and cats.
                        It has earned positive reviews and recommendations for its professional veterinary services and dedicated approach,
                            especially during challenging times for pets and their owners.</p>

                    <p><strong>Operating Hours:</strong><br />
                    Monday - Friday: 8:30 AM - 5:30 PM,<br />
                    Wednesday - Friday: 8:30 AM - 10:00 PM,<br />
                    Saturday: 9:00 AM - 12:00 PM,<br />
                    Sunday: CLOSED
                    </p>
                    <p style={{textAlign: 'left'}}>The clinic provides consistent care and support to pet owners and their pets throughout the week, establishing itself as a key resource for pet health in the area.</p>
                </Col>
            </Row>
        </Container>
    );
};

export default AboutUs;
