import React from "react";

const Footer = () => {
  return (
    <footer className="bg-light py-4">
      <div className="container">
        <div className="row">
          {/* Info */}
          <div className="col-md-4">
            <h5>Info</h5>
            <p>Öppettider dygnet runt</p>
          </div>

          {/* Kontakt */}
          <div className="col-md-4">
            <h5>Kontakt</h5>
            <p>Email: rosita@webshop.com</p>
            <p>Telefon: +4612345678</p>
          </div>

          {/* Följ oss */}
          <div className="col-md-4">
            <h5>Följ oss</h5>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="d-block">
              Facebook
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="d-block">
              Instagram
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;