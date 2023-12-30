/* eslint-disable react/prop-types */
import { useState } from 'react';
import ImgFooter from '../../assets/ImgFooter.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faTwitter,
  faFacebook,
  faInstagram,
} from '@fortawesome/free-brands-svg-icons';

import './Footer.css';

export const Footer = ({ showFooter }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  const [showErrorMessage, setShowErrorMessage] = useState(false);

  const isValidEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleJoinUs = () => {
    if (name && isValidEmail(email)) {
      setShowSuccessMessage(true);
      setShowErrorMessage(false);
    } else {
      setShowSuccessMessage(false);
      setShowErrorMessage(true);
    }
  };

  const footerClass = showFooter ? 'footerContainer' : 'footerContainer hidden';

  return (
    <footer className={footerClass}>
      <div className="footerContainer">
        <div className="footerContainerImg">
          <img
            className="africanWomanFooter"
            src={ImgFooter}
            alt="African Woman"
          />
          <div className="joinFamily">
            <p>Join Our Family</p>
          </div>
          <div className="inputContainer">
            <input
              className="inputFooter"
              type="text"
              placeholder="NAME"
              style={{ width: '21em', height: '3em' }}
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <input
              className="inputFooter"
              type="email"
              placeholder="EMAIL ADDRESS"
              style={{ width: '21em', height: '3em' }}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <div className="joinUsButton" onClick={handleJoinUs}>
              Join Us
            </div>
          </div>
          {showSuccessMessage && (
            <div className="successMessage">
              Thanks for joining us. Check your email
            </div>
          )}
          {showErrorMessage && (
            <div className="errorMessage">Please enter name and valid email</div>
          )}
        </div>

        <div className="lineContactBottom"></div>
        <div className="footerInformation">
          <span>|| Nankurunaisa ||</span>
          <span>|| Cookie Policy ||</span>
          <span>|| Legal Information ||</span>
          <span>|| Privacy Policy ||</span>
          <span>|| Terms and Conditions ||</span>
        </div>
        <div className="lineContactBottom"></div>
        <div className="customSocial">
          <a>
            <FontAwesomeIcon
              icon={faTwitter}
              style={{ color: 'white', fontSize: '32px' }}
            />
            <span className="d-lg-none ml-3">Twitter</span>
          </a>
          <a>
            <FontAwesomeIcon
              icon={faInstagram}
              style={{ color: 'white', fontSize: '32px' }}
            />
            <span className="d-lg-none ml-3">Instagram</span>
          </a>
          <a>
            <FontAwesomeIcon
              icon={faFacebook}
              style={{ color: 'white', fontSize: '32px' }}
            />
            <span className="d-lg-none ml-3">Facebook</span>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
