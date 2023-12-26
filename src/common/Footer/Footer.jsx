import ImgFooter from "../../assets/ImgFooter.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTwitter,
  faFacebook,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";

import "./Footer.css";

export const Footer = () => {
  return (
    <div className="footerContainer">
      <div className="footerContainerImg">
        <img
          className="africanWomanFooter"
          src={ImgFooter}
          alt="African Woman"
        />
      </div>
      <div className="footerBottom">
        <div className="footerColumns">
          {/* Columna 1 - Information */}
          <div className="footerColumn">
            <span className="titleInformationFooter">Information</span>
            <p className="informationFooterTitle">About</p>
            <p className="informationFooterTitle">Press</p>
          </div>

          {/* Columna 2 - Legal */}
          <div className="footerColumn">
            <span className="titleLegalFooter">Legal</span>
            <p className="informationFootertitle">Terms & Conditions</p>
            <p className="informationFooterTitle">Privacy Legacy</p>
          </div>

          {/* Columna 3 - Follow Us */}
          <div className="footerColumn">
            <span className="followUsFooter">Follow Us</span>
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
        </div>
      </div>

      <div className="lineContactBottom"></div>
      <div className="footerBottom">
        <p className="footerBottomText">
          <span style={{ display: "block" }}>
            The content on this website is owned by us and our licensors.
          </span>
          <span style={{ display: "block" }}>
            Do not copy any content without our consent.
          </span>
          <span>
            Created por Ángel Díaz. If you want to see more projects,
            <a
              href="https://github.com/angeldiazcalleja"
              target="_blank"
              style={{ color: "#efb810", fontSize: "15px" }}
              rel="noopener noreferrer"
            >
              Visit my GitHub!
            </a>
          </span>
        </p>
      </div>
    </div>
  );
};
