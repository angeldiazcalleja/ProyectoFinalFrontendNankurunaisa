import "./ActivitiesBoaVista.css";
import Img1 from "../../../../assets/Boavista/Img20.jpg";
import { Link } from "react-router-dom";

export const ActivitiesBoaVista = () => {
  return (
    <div className="activitiesBoaVista">
      <div className="activitiesContainerBoaVista">
        <div className="contentOverlayBoaVista">
          <p className="aboutTextBoaVista">
            Adrenaline Among the Land
          </p>
          <Link to="/activitiesboavista">
        <div className="activitiesBoaVistaButtom">
        See our Adventures
        </div>
        </Link>
        </div>
        <img src={Img1} alt="Background" className="AboutImageBoaVista" />
      </div>
    </div>
  );
};

export default ActivitiesBoaVista