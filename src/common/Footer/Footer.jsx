import ImgFooter from "../../assets/ImgFooter.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTwitter,
  faFacebook,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";

import "./Footer.css";

// eslint-disable-next-line react/prop-types
export const Footer = ({ showFooter }) => {
    const footerClass = showFooter ? "footerContainer" : "footerContainer hidden";

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
            style={{ width: "21em", height: "3em" }}
          />
          <input
            className="inputFooter"
            type="email"
            placeholder="EMAIL ADDRESS"
            style={{ width: "21em", height: "3em" }}
          />
          <div className="joinUsButton">Join Us</div>
        </div>
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
            style={{ color: "white", fontSize: "32px" }}
          />
          <span className="d-lg-none ml-3">Twitter</span>
        </a>
        <a>
          <FontAwesomeIcon
            icon={faInstagram}
            style={{ color: "white", fontSize: "32px" }}
          />
          <span className="d-lg-none ml-3">Instagram</span>
        </a>
        <a>
          <FontAwesomeIcon
            icon={faFacebook}
            style={{ color: "white", fontSize: "32px" }}
          />
          <span className="d-lg-none ml-3">Facebook</span>
        </a>
      </div>
    </div>
    </footer>
  );
};

export default Footer