import React from "react";
import {NavLink} from 'react-router-dom';
import './Nav.css'

function Nav() {
    return (
        
          <aside className="list">
          <ul>
            <li>
              <NavLink to="/about" className="text" activeClassName="activate">About</NavLink>
            </li>
            <li>
              <NavLink to="/project" className="text" activeClassName="activate">Project</NavLink>
            </li>
            <li>
              <NavLink to="/certificate" className="text" activeClassName="activate">Certificate</NavLink>
            </li>
            <li>
              <NavLink to="/contact" className="text" activeClassName="activate">Contact</NavLink>
            </li>
          </ul>
          </aside>
        
    )
}

export default Nav;