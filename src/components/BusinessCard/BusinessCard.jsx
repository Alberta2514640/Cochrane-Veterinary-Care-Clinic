import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import './BusinessCard.css';
import data from './Business.json'; 

import QRCode from "react-qr-code";
class BusinessCard extends Component {
    render() {
        const vCardInfo = [
            "BEGIN:VCARD",
            "VERSION:3.0",
            `N:${data.name}`,
            `ADR:${data.address.replace(/,/g, ';')}`, 
            `TEL:${data.phone}`,
            `PHOTO;TYPE=JPEG;VALUE=URI:${data.logoURL}`, 
            "END:VCARD"
        ].join("\r\n");

        return (
            <Container>
                <Row>
                    <div className="card">
                        <Col>
                            
                                <h2>{data.name}</h2>
                                <p><strong>Address:</strong> {data.address}</p>
                                <p><strong>Phone:</strong> <a href={`tel:${data.phone}`}>{data.phone}</a></p>

                                <h3>Hours of Operation:</h3>
                                <p>{data.hours.weekdays}</p>
                                <p>{data.hours.weekends}</p>



                            
                        </Col>
                        <Col style={{ display: "flex", alignItems: "center" }}>
                            <div style={{ height: "auto", margin: "0 auto", width: "100%" }}>
                                <QRCode
                                    size={128}
                                    style={{ height: "auto", maxWidth: "100%", width: "100%" }}
                                    value={vCardInfo}
                                    viewBox={`0 0 128 128`}
                                />
                            </div>
                        </Col>
                    </div>
                </Row>

            </Container>

        );
    }
}

export default BusinessCard;
