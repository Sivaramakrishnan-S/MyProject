import React from 'react';
import './Contact.css';
const Contact = () => {
  return (
    <center><div className="Contact">
    <div className="container py-5">
      <div className="row">
        <div className="col-md-8">
          <h1>Contact Us</h1>
          <form>
            <div className="mb-3">
              <label htmlFor="name" className="form-label">Name</label>
              <input type="text" className="form-control" id="name" required />
            </div>
            <div className="mb-3">
              <label htmlFor="email" className="form-label">Email</label>
              <input type="email" className="form-control" id="email" required />
            </div>
            <div className="mb-3">
              <label htmlFor="subject" className="form-label">Subject</label>
              <input type="text" className="form-control" id="subject" required />
            </div>
            <div className="mb-3">
              <label htmlFor="message" className="form-label">Message</label>
              <textarea className="form-control" id="message" rows="5" required></textarea>
            </div>
            <button type="submit" className="btn btn-primary">Send</button>
          </form>
        </div>
        <div className="col-md-4">
          
        </div>
      </div>
    </div>
  </div></center>
  );
};

export default Contact;
