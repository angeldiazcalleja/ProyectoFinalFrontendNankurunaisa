import "./AboutPalaos.css";
import Img1 from "../../../../assets/Palaos/Img29.webp";
import { Link } from "react-router-dom";

export const AboutPalaos = () => {
  return (
    <div className="aboutInformationPalaos">
      <div className="aboutContainerPalaos">
        <div className="contentOverlayPalaos">
          <p className="aboutTextPalaos">
            Pura Vida In The Jungle
          </p>
          <Link to="/planningPalaos">
        <div className="planningPalaosButtom">
        Retreat Schedule
        </div>
        </Link>
        </div>
        <img src={Img1} alt="Background" className="AboutImagePalaos" />
      </div>
    </div>
  );
};

