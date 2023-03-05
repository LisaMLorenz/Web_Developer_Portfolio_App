import React, { useState } from 'react';
import '../../styles/contact.css';
import { Modal, Button } from 'react-bootstrap';

function Contact() {
  const [showModal, setShowModal] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleCloseModal = () => setShowModal(false);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      alert('Please fill out all fields.');
      return;
    }
    setShowModal(true);
    setFormData({
      name: '',
      email: '',
      message: ''
    });
  };

  return (
    <div className="contact-form-container">
      <h1>Contact Me &#x270D; &nbsp; &nbsp; &nbsp;
      <a href="https://github.com/LisaMLorenz" target="_blank">
  <i className="fab fa-github fa-1x"></i>
</a>
&nbsp;

<a href="https://www.linkedin.com/in/lisa-lorenz-ab043086" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
  <i class="fab fa-linkedin fa-1x"></i>
</a>

</h1>
     
      &nbsp;
      
      <p>Just use this form to get in touch <a href='mailto:hej@frau-lorenz.de'>email me directly</a> or give me a ring at +44.777.01.51.168</p>

      <form onSubmit={handleSubmit}>
        <div className="form">
          <label htmlFor="name">Name</label>
          <input type="text" className="form-control" id="name" name="name" value={formData.name} placeholder="Harry Nilsson" onChange={handleInputChange} />
        </div>
        &nbsp;
        <div className="form-group">
          <label htmlFor="email">Email address</label>
          <input type="email" className="form-control" id="email" name="email" value={formData.email} placeholder="nilsson@schmilsson.co" onChange={handleInputChange} />
        </div>
        &nbsp;
        <div className="form-group">
          <label htmlFor="message">Message</label>
          <textarea className="form-control" id="message" name="message" value={formData.message} rows="3" placeholder="Put de lime in de coconut, then you feel better." onChange={handleInputChange}></textarea>
        </div>
        &nbsp;
        &nbsp;
        <button type="submit" className="btn btn-primary" id="contact-btn">Submit</button>
      </form>

      <Modal show={showModal} onHide={handleCloseModal}>
        <Modal.Header closeButton>
          <Modal.Title>
            <p className='modal-text-header'>Message Sent!</p>
            </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>Your message has been sent. 👏 Thank you for contacting me! <br /> I will be in touch within 24h. 👀</p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" id='close-btn' onClick={handleCloseModal}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default Contact;



