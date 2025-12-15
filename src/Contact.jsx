import React, { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Thank you for your message! We will get back to you soon.');
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 2000);
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  const handleClear = () => {
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  const handleDelete = () => {
    if (Object.values(formData).some(val => val.trim() !== '')) {
      if (window.confirm('Are you sure you want to delete all data?')) {
        setFormData({ name: '', email: '', subject: '', message: '' });
      }
    }
  };

  return (
    <div className="contact-section">
      <h1 className="mb-4">Contact Us</h1>
      
      <div className="row g-4 justify-content-center">
        <div className="col-md-4">
          <div className="card p-4 h-100">
            <h5 className="mb-3">📍 Address</h5>
            <p>123 Main Street<br />Suite 100<br />City, State 12345</p>
          </div>
        </div>
        
        <div className="col-md-4">
          <div className="card p-4 h-100">
            <h5 className="mb-3">📞 Phone</h5>
            <p><a href="tel:+1234567890" className="text-decoration-none">+1 (234) 567-8900</a></p>
            <p>Monday - Friday: 9AM - 6PM</p>
          </div>
        </div>
        
        <div className="col-md-4">
          <div className="card p-4 h-100">
            <h5 className="mb-3">✉️ Email</h5>
            <p><a href="mailto:support@myapp.com" className="text-decoration-none">support@myapp.com</a></p>
            <p>We respond within 24 hours</p>
          </div>
        </div>
      </div>

      <div className="row mt-5 justify-content-center">
        <div className="col-md-6">
          <div className="card p-5 form-card">
            <h4 className="mb-4">Send us a Message</h4>
            {submitted && <div className="alert alert-success">Message sent successfully!</div>}
            <form onSubmit={handleSubmit}>
              <div className="mb-3">
                <label htmlFor="name" className="form-label">Name</label>
                <input
                  type="text"
                  className="form-control"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>
              
              <div className="mb-3">
                <label htmlFor="email" className="form-label">Email</label>
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
              
              <div className="mb-3">
                <label htmlFor="subject" className="form-label">Subject</label>
                <input
                  type="text"
                  className="form-control"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                />
              </div>
              
              <div className="mb-3">
                <label htmlFor="message" className="form-label">Message</label>
                <textarea
                  className="form-control"
                  id="message"
                  name="message"
                  rows="3"
                  value={formData.message}
                  onChange={handleChange}
                  required
                ></textarea>
              </div>
              
              <div className="button-group mt-4">
                <button type="submit" className="btn btn-primary">Submit</button>
                <button type="button" className="btn btn-secondary" onClick={handleClear}>Clear</button>
                <button type="button" className="btn btn-danger" onClick={handleDelete}>Delete</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
