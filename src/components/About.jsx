import React from 'react';

export default function About() {
  return (
    <section id="about" className="about-section container">
      <h2 className="section-title">About Me</h2>
      <p className="section-subtitle">Dedicated developer focused on quality, component design, and performance.</p>

      <div className="about-grid">
        <div className="about-card">
          <h3 style={{ fontSize: '1.2rem', marginBottom: '12px', color: '#818cf8' }}>🚀 Problem Solver</h3>
          <p style={{ color: '#9ca3af' }}>Driven by creating elegant solutions to real-world software problems through clean code architecture.</p>
        </div>
        <div className="about-card">
          <h3 style={{ fontSize: '1.2rem', marginBottom: '12px', color: '#06b6d4' }}>⚛️ React Specialist</h3>
          <p style={{ color: '#9ca3af' }}>Deeply experienced in component-based state management, React Hooks, JSX, and external CSS designs.</p>
        </div>
        <div className="about-card">
          <h3 style={{ fontSize: '1.2rem', marginBottom: '12px', color: '#10b981' }}>🎨 UI/UX Focused</h3>
          <p style={{ color: '#9ca3af' }}>Creating delightful user experiences with responsive layouts, accessible elements, and polished aesthetics.</p>
        </div>
      </div>
    </section>
  );
}
