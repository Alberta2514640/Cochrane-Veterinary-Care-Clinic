import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import image1 from '../assets/Stock1.png';
import image2 from '../assets/Stock2.png';
import image3 from '../assets/Stock3.png';
import image4 from '../assets/Stock4.png';
import image5 from '../assets/Stock5.png';
import image6 from '../assets/Stock6.png';
import image7 from '../assets/Stock7.png';
import image8 from '../assets/Stock8.png';
import image9 from '../assets/Stock9.png';

const Services = () => {
    return (
        <Container>
            <h1>Services at Cochrane Veterinary Care Clinic Under Construction</h1>
            <Row>
                <Col>
                    <img className="Stock-Image" src={image1} alt="Logo" />
                </Col>
                <Col>
                    <h2>Our Veterinary Services</h2>
                    <p>At Cochrane Veterinary Care Clinic, we offer a wide range of services to ensure the health and well-being of your pets. Our experienced team, led by Dr. Dale Atkin, is dedicated to providing compassionate care tailored to the unique needs of each animal.</p>
                </Col>
            </Row>
            <Row>
                <Col>
                    <img className="Stock-Image" src={image2} alt="Logo" />
                </Col>
                <Col>
                    <h3>General Health Checks</h3>
                    <p>Regular health examinations are crucial for maintaining your pet's health. Our comprehensive check-ups include a thorough physical examination, vaccinations, parasite control, and nutritional counseling.</p>
                </Col>

            </Row>
            <Row>
                <Col>
                    <img className="Stock-Image" src={image3} alt="Logo" />
                </Col>
                <Col>
                    <h3>Diagnostic Services</h3>
                    <p>We offer advanced diagnostic services including blood tests, x-rays, and ultrasounds to accurately diagnose and treat health issues in your pets.</p>
                </Col>
            </Row>
            <Row>
                <Col>
                    <img className="Stock-Image" src={image4} alt="Logo" />
                </Col>
                <Col>
                <h3>Dental Care</h3>
                <p>Good oral health is essential for your pet's overall well-being. Our dental services include teeth cleaning, dental x-rays, and oral surgeries.</p>
                </Col>
            </Row>
            <Row>
                <Col>
                    <img className="Stock-Image" src={image5} alt="Logo" />
                </Col>
                <Col>
                    <h3>Emergency Care</h3>
                    <p>In case of emergencies, our clinic is equipped to provide immediate care and treatment to address urgent health concerns of your pets.</p>
                </Col>
            </Row>
            <Row>
                <Col>
                    <img className="Stock-Image" src={image6} alt="Logo" />
                </Col>
                <Col>
                    <h3>Surgical Procedures</h3>
                    <p>Our surgical suite is equipped for a variety of procedures including spaying/neutering, soft tissue surgeries, and other necessary operations.</p>
                </Col>
            </Row>
            <Row>
                <Col>
                    <img className="Stock-Image" src={image7} alt="Logo" />
                </Col>
                <Col>
                    <h3>Preventive Care</h3>
                    <p>Prevention is better than cure. We offer various preventive care services such as vaccinations, flea and tick prevention, heartworm prevention, and more.</p>
                </Col>
            </Row>
            <Row>
                <Col>
                    <img className="Stock-Image" src={image8} alt="Logo" />
                </Col>
                <Col>
                    <h3>Nutritional Counseling</h3>
                    <p>Proper nutrition is key to a healthy life for your pets. Our experts provide personalized dietary plans and nutrition advice for pets at different life stages.</p>
                </Col>
            </Row>
            <Row>
                <Col>
                    <img className="Stock-Image" src={image9} alt="Logo" />
                </Col>
                <Col>
                <h3>Senior Pet Care</h3>
                <p>Older pets have special needs. We provide comprehensive care tailored to the health requirements of senior pets, focusing on comfort and quality of life.</p>
                </Col>
            </Row>
            <p>For more detailed information on our services or to schedule an appointment, please contact us at (403) 932-4138.</p>
        </Container>
       
    );
};

export default Services;
