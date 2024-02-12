import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import image from '../assets/LabPhoto.png';
import BackgroundVideo from '../components/BackgroundVideo/BackgroundVideo';

const Home = () => {
    return (
        <Container style={{ position: 'relative', zIndex: 2 }}>
            <Row>
                <BackgroundVideo style={{ position: 'absolute', zIndex: 1 }}/>
                <Col>
                    <div>
                        <h3>This Website is Under Construction</h3>
                        <p>
                            Please refer to the facebook page for reliable up to date information.
                        </p>
                        <p style={{margin: 25, textAlign: 'left'}}>
                            We are a small animal clinic that focuses on dog and cat health care.
                            We have 2 part time vets: Dr. Dale Atkin & Dr. Kristen Ficzycz.
                            Our support staff includes four Registered Veterinary Technicians: Jeanine, Sharon, Paula & Kathryn.
                            Our amazing receptionist are Cari, Jodi & Andrea.
                            Rounding off our staff is our part time clinic cat Henry and other part time clinic cat Wilma!
                            We welcome new patients and are happy to answer any questions you may have!
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