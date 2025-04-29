import React from 'react';

const Resume = () => {
  return (
    <div style={{
      background: 'linear-gradient(to right, #0f0f0f, #1a1a1a)',
      color: '#FFFFFF',
      height: '100vh',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      fontFamily: 'Segoe UI, sans-serif',
      textAlign: 'center',
      padding: '0 1rem',
    }}>
      <h1 style={{ fontSize: '3rem', marginBottom: '0.5rem' }}>Hi, I'm Rishi 👋</h1>
      <p style={{ fontSize: '1.3rem', maxWidth: '600px', marginBottom: '1rem' }}>
        A passionate full-stack developer who loves turning complex problems into simple, elegant solutions.
      </p>
      <p style={{ fontSize: '1.1rem', maxWidth: '600px', marginBottom: '2rem', color: '#bbbbbb' }}>
        Download my resume to explore my journey, skills, and how I can bring value to your team.
      </p>
      <a
        href="/assets/rishi resume.pdf"
        download
        style={{
          backgroundColor: '#1DB954',
          color: '#fff',
          padding: '0.9rem 2rem',
          borderRadius: '12px',
          textDecoration: 'none',
          fontWeight: '600',
          fontSize: '1rem',
          boxShadow: '0 4px 15px rgba(29, 185, 84, 0.4)',
          transition: 'all 0.3s ease-in-out',
        }}
        onMouseOver={(e) => {
          e.currentTarget.style.backgroundColor = '#17a44d';
          e.currentTarget.style.transform = 'scale(1.05)';
        }}
        onMouseOut={(e) => {
          e.currentTarget.style.backgroundColor = '#1DB954';
          e.currentTarget.style.transform = 'scale(1)';
        }}
      >
        📄 Download Resume
      </a>
    </div>
  );
};

export default Resume;
