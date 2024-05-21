import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const Home = () => {
    return (
        <Container style={{ position: 'relative', zIndex: 2 }}>
            <Row>
                <Col>
                    <div>
                        <p style={{margin: 25, textAlign: 'left'}}>
                            We are a small animal clinic that focuses on dog and cat health care.<br/>
                            We welcome new patients and are happy to answer any questions you may have!
                        </p>
                        
                    </div>
                </Col>
            </Row>
        </Container>
    );
};

export default Home;
