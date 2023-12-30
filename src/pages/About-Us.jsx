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
                    <h2>Cochrane Veterinary Care Clinic</h2>
                    <p><strong>Location:</strong> Cochrane, Alberta</p>
                    <p><strong>Focus:</strong> Healthcare for dogs and cats</p>
                    <p><strong>Lead Veterinarian:</strong> Dr. Dale Atkin</p>
                    <p>Cochrane Veterinary Care Clinic is renowned in the Cochrane community for its compassionate and quality care for pets. The clinic, led by Dr. Dale Atkin, specializes in the healthcare of dogs and cats. It has earned positive reviews and recommendations for its professional veterinary services and dedicated approach, especially during challenging times for pets and their owners.</p>
                    <p><strong>Operating Hours:</strong> Weekdays</p>
                    <p>The clinic provides consistent care and support to pet owners and their pets throughout the workweek, establishing itself as a key resource for pet health in the area.</p>
                </Col>
            </Row>
        </Container>
    );
};

export default AboutUs;
