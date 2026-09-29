import React from 'react';

export default function Hero() {
  return (
    <section id="hero" className="hero-section container">
      <div className="hero-content">
        <div className="hero-tag">✨ Full-Stack Developer & React Enthusiast</div>
        <h1 className="hero-title">Crafting Modern & Responsive Web Applications</h1>
        <p className="hero-desc">
          Hi, I'm <strong>Mita Kar</strong>. A passionate computer science student building innovative user interfaces, scalable frontend applications, and clean modular code.
        </p>
        <div style={{ display: 'flex', gap: '16px' }}>
          <a href="#contact" className="btn-primary">Get in Touch</a>
          <a href="#skills" className="btn-primary" style={{ background: 'rgba(255,255,255,0.08)' }}>Explore Skills</a>
        </div>
      </div>
      <div className="hero-avatar">
        <img src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=500&q=80" alt="Mita Kar Avatar" />
      </div>
    </section>
  );
}
