import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import image from '../assets/LabPhoto.png';

const Home = () => {
    return (
        <Container>
            <Row>
                <Col>
                    <img className="Home-Image" src={image} alt="Logo" />
                </Col>
                <Col>
                    <div>
                        <h1>Cochrane Veterinary Care Clinic</h1>
                        <h3>Where your pets are treated like family</h3>
                        <p>
                            Website Under Construction
                        </p>
                    </div>
                </Col>
            </Row>
        </Container>
    );
};

export default Home;

{/* <div>


</div> */}