import React from "react";
import {Link} from 'react-router-dom';
import './Nav.css'

function Nav() {
    return (
        
          <aside className="list">
          <ul>
            <li>
              <Link to="/" className="text">About</Link>
            </li>
            <li>
              <Link to="/project" className="text">Project</Link>
            </li>
            <li>
              <a href="./resume.html" target="_blank" className="text">Resume</a>
            </li>
            <li>
                <Link to="/contact" className="text">Contact</Link>
            </li>
          </ul>
          </aside>
        
    )
}

export default Nav;