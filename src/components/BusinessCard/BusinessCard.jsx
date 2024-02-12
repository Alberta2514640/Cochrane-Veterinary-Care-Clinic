import React, { Component } from 'react';
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
            <div className="card">
                <h2>{data.name}</h2>
                <p><strong>Address:</strong> {data.address}</p>
                <p><strong>Phone:</strong> {data.phone}</p>

                <h3>Hours of Operation:</h3>
                <p>{data.hours.weekdays}</p>
                <p>{data.hours.weekends}</p>

                <div style={{ height: "auto", margin: "0 auto", maxWidth: 128, width: "100%" }}>
                    <QRCode
                        size={128}
                        style={{ height: "auto", maxWidth: "100%", width: "100%" }}
                        value={vCardInfo}
                        viewBox={`0 0 128 128`}
                    />
                </div>

            </div>
        );
    }
}

export default BusinessCard;
