import React, { useState } from "react";
import './Project.css'

function Project() {
    const [projects] = useState([
        {
            name: 'NoteTaker',
            description: 'A simple app that lets you take notes and saves them to a database',
            language: 'JavaScript, MongoDB',
            alt: 'Notepad',
            link: 'https://allthenotes.herokuapp.com'
        },
        {
            name: 'BudgetTracking',
            description: 'An app that allows you to track spending and deposits online and offline',
            language: 'PWA, Service worker, and Javascript',
            alt: 'A line graph showing spending',
            link: 'https://fast-escarpment-53346.herokuapp.com'
        },
        {
            name: 'ThisThat',
            description: 'A fun game that gives you a series of choices to select from and you create your own',
            language: 'Handlebars.js, SQL, Javascript, CSS, HTML, Express server',
            alt: 'This or That',
            link: 'https://this--that.herokuapp.com'
        },
        {
            name: 'CovidRiskTracker',
            description: 'Search for events and covid risk information by state',
            language: 'HTML, CSS, JavaScript, API(ticketmaster, covid risk tracker)',
            alt: 'Screenshot of covid risk tracker site',
            link: 'https://bpkaufman4.github.io/Group-2-project-1/'
        }
    ])

    return (
        <div className="box">
            {projects.map(project => (
                <a href={project.link} target="_blank" className="link-text" rel="noreferrer">
                <div className="card">
                    <img src={require(`../../assets/${project.name}.jpg`).default} alt={project.alt} key={project.name} className="image"/>
                    <div className="container">
                    <h4>{project.name}</h4>
                    <p>{project.description}</p>
                    <span className="a">{project.language}</span>
                    </div>
                </div>
                </a>
            ))}
        </div>
    )
}

export default Project;