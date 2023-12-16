import { useState, useEffect } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa'; 
import Logo from "../../assets/LogoHomeFinal.png";
import "./Header.css";

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 0);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
      <div className="menuIcon" onClick={toggleMenu}>
        {isMenuOpen ? (
          <FaTimes style={{ color: "#fafafa", width: "2em", height: "2em" }} />
        ) : (
          <FaBars style={{ color: "#fafafa", width: "5em", height: "2.5em" }} />
        )}
      </div>
      <div className="logoContainer">
        <img
          src={Logo}
          alt="Logo"
          className="centeredImage"
        />
      </div>
      {isMenuOpen && (
        <div className="menu-sidebar">
          <div className="closeIcon" onClick={closeMenu}>
            <FaTimes style={{ color: "#fafafa", width: "2em", height: "2em" }} />
          </div>
          <img
          src={Logo}
          alt="Logo"
          className="sidebarImage"
        />

        </div>
      )}
    </header>
  );
};

export default Header;
