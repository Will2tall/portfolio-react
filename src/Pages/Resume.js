import React from "react";
import './css/resume.css';

export default function Resume() {
    return (
        <div className="haasImage">
            <img src={require("../assets/certificate.jpg").default} alt="Willliam Haas KU coding certificate" width={800} height={400}></img>
        </div>
    )
}