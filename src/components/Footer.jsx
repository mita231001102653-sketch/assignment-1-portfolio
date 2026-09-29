import React from 'react';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <p>© {new Date().getFullYear()} Mita Kar. Built with React & JSX. All rights reserved.</p>
      </div>
    </footer>
  );
}
