import React from 'react';

export default function Skills() {
  const skills = [
    "React.js", "JavaScript (ES6+)", "JSX & HTML5",
    "External CSS3", "Git & GitHub", "Vite & Vercel",
    "REST APIs", "Node.js Basics", "Responsive Design"
  ];

  return (
    <section id="skills" className="skills-section container">
      <h2 className="section-title">Technical Skills</h2>
      <p className="section-subtitle">Technologies and tools I work with daily.</p>

      <div className="skills-grid">
        {skills.map((skill, idx) => (
          <div key={idx} className="skill-pill">
            {skill}
          </div>
        ))}
      </div>
    </section>
  );
}
