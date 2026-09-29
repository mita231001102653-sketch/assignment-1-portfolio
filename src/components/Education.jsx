import React from 'react';

export default function Education() {
  const educationList = [
    {
      degree: "B.Tech in Computer Science & Engineering",
      institution: "Techno India Group",
      year: "2023 - 2027",
      details: "Focusing on Software Engineering, Web Technologies, Data Structures, and Database Systems."
    },
    {
      degree: "Higher Secondary (10+2 Science)",
      institution: "State Education Board",
      year: "2021 - 2023",
      details: "Specialized in Mathematics, Physics, Chemistry, and Computer Science."
    }
  ];

  return (
    <section id="education" className="education-section container">
      <h2 className="section-title">Education</h2>
      <p className="section-subtitle">Academic qualification & educational journey.</p>

      <div className="education-timeline">
        {educationList.map((edu, idx) => (
          <div key={idx} className="edu-item">
            <div>
              <div className="edu-role">{edu.degree}</div>
              <div className="edu-inst">{edu.institution}</div>
              <p style={{ color: '#9ca3af', marginTop: '8px', fontSize: '0.95rem' }}>{edu.details}</p>
            </div>
            <span className="edu-year">{edu.year}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
