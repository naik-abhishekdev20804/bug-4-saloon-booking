import React from 'react';

const Header = () => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header>
      <div className="container header-container">
        <div className="logo">
          <i className="fas fa-spa"></i>
          <span>GlamBook</span>
        </div>
        <nav>
          <ul>
            <li>
              <a
                href="#home"
                onClick={(e) => {
                  e.preventDefault();
                }}
              >
                <i className="fas fa-home"></i> Home
              </a>
            </li>
            <li>
              <a href="#salons" onClick={(e) => { e.preventDefault(); scrollToSection('salons'); }}>
                <i className="fas fa-cut"></i> Salons
              </a>
            </li>
            <li>
              <a href="#register" onClick={(e) => { e.preventDefault(); scrollToSection('register'); }}>
                <i className="fas fa-store"></i> Register Salon
              </a>
            </li>
            <li>
              <a href="#about" onClick={(e) => { e.preventDefault(); scrollToSection('about'); }}>
                <i className="fas fa-info-circle"></i> About
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
