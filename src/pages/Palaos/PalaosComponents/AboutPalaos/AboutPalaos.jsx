import "./AboutPalaos.css";
import Img1 from "../../../../assets/Palaos/Img29.webp";

export const AboutPalaos = () => {
  return (
    <div className="aboutInformationPalaos">
      <div className="aboutContainerPalaos">
        <div className="contentOverlayPalaos">
          <p className="aboutTextPalaos">
            Pura Vida In The Jungle
          </p>
        </div>
        <img src={Img1} alt="Background" className="AboutImagePalaos" />
      </div>
    </div>
  );
};

