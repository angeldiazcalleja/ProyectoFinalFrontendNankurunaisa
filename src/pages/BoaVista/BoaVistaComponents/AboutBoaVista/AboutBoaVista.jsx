import "./AboutBoaVista.css";
import Img1 from "../../../../assets/Boavista/Img6.jpg";
import { Link } from "react-router-dom";

export const AboutBoaVista = () => {
  return (
    <div className="aboutInformationBoaVista">
      <div className="aboutContainerBoaVista">
        <div className="contentOverlayBoaVista">
          <p className="aboutTextBoaVista">
            Living Nature at Boa Vista
          </p>
          <Link to="/planningPalaos">
        <div className="planningBoaVistaButtom">
        Retreat Schedule
        </div>
        </Link>
        </div>
        <img src={Img1} alt="Background" className="AboutImageBoaVista" />
      </div>
    </div>
  );
};

export default AboutBoaVista