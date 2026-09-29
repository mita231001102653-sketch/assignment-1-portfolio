import React, { useState } from 'react';

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
  };

  return (
    <section id="contact" className="contact-section container">
      <h2 className="section-title">Contact Information</h2>
      <p className="section-subtitle">Feel free to reach out for collaborations or project inquiries.</p>

      <div className="contact-box">
        <div className="contact-info">
          <h3 style={{ fontSize: '1.2rem', marginBottom: '8px' }}>Get In Touch</h3>
          <div className="contact-item">
            <span>📧</span>
            <span>mita231001102653@technoindiaeducation.com</span>
          </div>
          <div className="contact-item">
            <span>📍</span>
            <span>Kolkata, West Bengal, India</span>
          </div>
          <div className="contact-item">
            <span>🌐</span>
            <span>github.com/mita231001102653-sketch</span>
          </div>
        </div>

        <form className="contact-form" onSubmit={handleSubmit}>
          {submitted ? (
            <div style={{ padding: '16px', background: 'rgba(16, 185, 129, 0.15)', border: '1px solid #10b981', color: '#34d399', borderRadius: '8px' }}>
              Thank you for your message! I will get back to you soon.
            </div>
          ) : (
            <>
              <input type="text" placeholder="Your Name" required className="form-input" />
              <input type="email" placeholder="Your Email" required className="form-input" />
              <textarea placeholder="Your Message" rows="4" required className="form-input"></textarea>
              <button type="submit" className="btn-primary">Send Message</button>
            </>
          )}
        </form>
      </div>
    </section>
  );
}
