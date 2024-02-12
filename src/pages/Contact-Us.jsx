import React from 'react';
import BusinessCard from '../components/BusinessCard/BusinessCard';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

const ContactUs = () => {
    return (
        <Container style={{ marginTop: '30px' }}>
            <Row>
            <div>
            <p>If you have any questions or need to schedule an appointment, please feel free to contact us using the information below.</p>

            <BusinessCard />

            <p>We look forward to hearing from you and taking care of your beloved pets!</p>

            </div>
            </Row>

        </Container>

    );
};

export default ContactUs;
