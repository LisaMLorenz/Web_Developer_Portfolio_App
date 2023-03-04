import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

function Footer() {
  return (
    <footer className="bg-light py-3">
      <Container>
        <Row>
          <Col md={6}>
            <p className="text-muted small mb-0">© 2023 Lisa Lorenz. All Rights Reserved.</p>
          </Col>
          <Col md={6} className="d-flex justify-content-md-end">
            <ul className="list-inline mb-0">
              <li className="list-inline-item">
                <a href="https://twitter.com/HejNousMagazine">Twitter</a>
              </li>
              <li className="list-inline-item">
                <a href="https://drive.google.com/uc?export=download&id=1ska45iBZ0eI55AR9ymyKgvwQjsy1EkDU">Download CV</a>
              </li>
              <li className="list-inline-item">
                <a href="https://www.linkedin.com/in/lisa-lorenz-ab043086">LinkedIn</a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;
