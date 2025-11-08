import React from 'react';

export default function Header() {
  const cvUrl = process.env.PUBLIC_URL + '/Assets/pdf/RahulShakya_st125982_CV.pdf';
  const avatar = process.env.PUBLIC_URL + '/Assets/Image/Profile.jpg';

  return (
    <header className="site-header" role="banner">
      <div className="inner">
        <div style={{display: 'flex', alignItems: 'center', gap: '0.75rem'}}>
          <img src={avatar} alt="Profile" className="header-avatar" />
          <div>
            <div className="site-title">Rahul Shakya</div>
            <div style={{fontSize: '0.85rem', color: 'rgba(255,255,255,0.9)'}}>
              AI Engineer • Developer • Photographer
            </div>
          </div>
        </div>

        <nav className="nav-links" aria-label="Main navigation">
          <a href="#about">About</a>
          <a href="#projects">Projects</a>
          <a href="#skills">Skills</a>
          <a href="#contact">Contact</a>
          <a className="btn-download" href={cvUrl} download>
            Download CV
          </a>
        </nav>
      </div>
    </header>
  );
}
