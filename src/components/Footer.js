import React from 'react';
import { Container, Row } from 'react-bootstrap';
import '../styles/footer.css'

function Footer() {
  return (
    <footer className="bg-light py-3" id="footer-new">
      <Container>
        <Row className="justify-content-center">
          
          <div className="justify-content-center" id="footer-text">
            <ul className="list-inline mb-0">
              <li className="list-inline-item" id="footer-text">
                <a href="https://twitter.com/HejNousMagazine">Connect via Twitter</a>
              </li>
              <li className="list-inline-item" id="footer-text">
                <a href="https://drive.google.com/uc?export=download&id=1ska45iBZ0eI55AR9ymyKgvwQjsy1EkDU">Download my CV</a>
              </li>
              <li className="list-inline-item" id="footer-text">
                <a href="https://www.linkedin.com/in/lisa-lorenz-ab043086">LinkedIn</a>
              </li>
            </ul>

            <div className="text-center" id="footer-text">
            <p className="text-muted small mb-0">© 2023 Lisa Lorenz. All Rights Reserved.</p>
          </div>

          </div>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;
