import { useState, useEffect } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import Logo from "../../assets/LogoHomeFinal.png";
import "./Header.css";
import { Link} from "react-router-dom";
import { useNavigate } from "react-router-dom";
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
  const navigate = useNavigate();

  const userToken = useSelector((state) => state.user.token);
  const userRole = useSelector((state) => state.user.credentials.role);



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
  const handleLogin = () => {};

  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(userLogout());
    navigate("/home")
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
          <Link to="/home" className="menu-link" onClick={closeMenu}>
            <div className="menu-section1">HOME</div>
          </Link>
          <div className="menu-section2" onClick={toggleDestinations}>
            DESTINATIONS{" "}
            <span className="arrow-icon">{isDestinationsOpen ? "▼" : "▶"}</span>
            {isDestinationsOpen && (
              <div className="destinations-menu">
                <Link to="/palaos" className="menu-link" onClick={closeMenu}>
                  <div className="menu-item">Palaos</div>
                </Link>
                <Link to="/boavista" className="menu-link" onClick={closeMenu}>
                <div className="menu-item">BoaVista</div>
                </Link>
                <div className="menu-item">Svalrgaror</div>
              </div>
            )}
          </div>
           {userToken && (
            <div className="menu-options">
              {userRole === 'admin' && (
                <Link to="/admin" className="menu-link" onClick={closeMenu}>
                  <div className="menu-section3">ADMIN</div>
                </Link>
              )}
              <Link to="/profile" className="menu-link" onClick={closeMenu}>
                <div className="menu-section4">PROFILE</div>
              </Link>
            </div>
          )}

          <div className="user-icons">
            {userToken ? (
              <>
                <div className="menu-section" onClick={handleLogout}>
                  <FontAwesomeIcon icon={faSignOutAlt} className="icon1" />
                  <p className="loginTitleIcon">Logout</p>
                </div>
              </>
            ) : (
              <>
                <div className="menu-section" onClick={handleLogin}>
                  <Link to="/login" className="menu-link" onClick={closeMenu}>
                    <FontAwesomeIcon icon={faSignInAlt} className="icon1" />
                    <p className="loginTitleIcon">Login</p>
                  </Link>
                </div>
              </>
            )}
            <div className="menu-section">
              <Link to="/register" className="menu-link" onClick={closeMenu}>
                <FontAwesomeIcon icon={faUserPlus} className="icon2" />
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
