import { useState, useEffect } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import Logo from "../../assets/LogoHomeFinal.png";
import "./Header.css";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux"; 
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSignInAlt,
  faSignOutAlt,
  faUserPlus,
} from "@fortawesome/free-solid-svg-icons";
import { userLogout } from "../../pages/userSlice";

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isDestinationsOpen, setIsDestinationsOpen] = useState(false);

  const userToken = useSelector((state) => state.user.token);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 0);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    setIsDestinationsOpen(false);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
    setIsDestinationsOpen(false);
  };

  const toggleDestinations = () => {
    setIsDestinationsOpen(!isDestinationsOpen);
  };
  const handleLogin = () => {
    console.log("Login logic here");
  };

  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(userLogout());
  };


  return (
    <header className={`header ${isScrolled || isMenuOpen ? "scrolled" : ""}`}>
      <div className="menuIcon" onClick={toggleMenu}>
        {isMenuOpen ? (
          <FaTimes style={{ color: "#fafafa", width: "2em", height: "2em" }} />
        ) : (
          <FaBars style={{ color: "#fafafa", width: "5em", height: "2.5em" }} />
        )}
      </div>
      <div className="logoContainer">
        <img src={Logo} alt="Logo" className="centeredImage" />
      </div>
      {isMenuOpen && (
        <div className="menu-sidebar">
          <div className="closeIcon" onClick={closeMenu}>
            <FaTimes className="closeIcon2" />
          </div>
          <img src={Logo} alt="Logo" className="sidebarImage" />
          <Link to="/home" className="menu-link">
            <div className="menu-section1">HOME</div>
          </Link>
          <div className="menu-section2" onClick={toggleDestinations}>
            DESTINATIONS{" "}
            <span className="arrow-icon">{isDestinationsOpen ? "▼" : "▶"}</span>
            {isDestinationsOpen && (
              <div className="destinations-menu">
                <Link to="/palaos" className="menu-link">
                  <div className="menu-item">Palaos</div>
                </Link>
                <div className="menu-item">BoaVista</div>
                <div className="menu-item">Svalrgaror</div>
              </div>
            )}
          </div>
          {userToken && (
            <Link to="/profile" className="menu-link"  onClick={closeMenu}>
              <div className="menu-section3">PROFILE</div>
            </Link>
          )}
          <div className="user-icons">
            {userToken ? (
              <>
                <div className="menu-section" onClick={handleLogout}>
                  <FontAwesomeIcon icon={faSignOutAlt} className="icon1"/> 
                  <p className="loginTitleIcon">Logout</p>
                </div>
              </>
            ) : (
              <>
                <div className="menu-section" onClick={handleLogin}>
                <Link to="/login" className="menu-link"  onClick={closeMenu}>
                  <FontAwesomeIcon icon={faSignInAlt} className="icon1"/> 
                  <p className="loginTitleIcon">Login</p>
                  </Link>
                </div>
              </>
            )}
            <div className="menu-section">
            <Link to="/register" className="menu-link"  onClick={closeMenu}>
              <FontAwesomeIcon icon={faUserPlus} className="icon2"/> 
              <p className="registerTitleIcon">Register</p>
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
