import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <div className="footer">
      <h5 className="foot-text">
        <div>
          <p>
            Github Profile:{" "}
            <a
              href="https://github.com/Will2tall"
              target="_blank"
              rel="noreferrer"
              className="githublink"
            >
              Will2tall
            </a>
          </p>
        </div>
        <div>
          <p>Email: will2tall89@gmail.com</p>
        </div>
        <div>
          <p>Phone: (816)363-9011</p>
        </div>
      </h5>
    </div>
  );
}

export default Footer;
