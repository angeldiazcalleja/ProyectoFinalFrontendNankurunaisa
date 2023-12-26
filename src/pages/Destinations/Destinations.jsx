import  { useState } from "react";
import "./Destinations.css";
import Img28 from "../../assets/Destinations/Img19.jpg";
import Img1 from "../../assets/Destinations/Img22.jpg";
import Img2 from "../../assets/Destinations/Img20.jpg";
import Img44 from "../../assets/Img44.jpg";

const Destinations = () => {
  const [hovered1, setHovered1] = useState(false);
  const [hovered2, setHovered2] = useState(false);
  const [hovered3, setHovered3] = useState(false);

  return (
    <>
      <div className="destinationsContainer">
        <div className="containerTitleDestinations">
          <span className="destinationsTitle">
            Explore Our Wild Destinations
          </span>
        </div>
        <div className="destinationImages">
          <img
            src={Img1}
            alt="Destination 1"
            className={`destinationImage ${hovered1 ? "hovered" : ""}`}
            onMouseOver={() => setHovered1(true)}
            onMouseOut={() => setHovered1(false)}
            
          />
          <img
            src={Img2}
            alt="Destination 2"
            className={`destinationImage ${hovered2 ? "hovered" : ""}`}
            onMouseOver={() => setHovered2(true)}
            onMouseOut={() => setHovered2(false)}
          />
          <img
            src={Img28}
            alt="Destination 3"
            className={`destinationImage ${hovered3 ? "hovered" : ""}`}
            onMouseOver={() => setHovered3(true)}
            onMouseOut={() => setHovered3(false)}
          />
        </div>
      </div>

      <div className="contentOverlayDestinations">
          {hovered1 && <p className="destinationText1">Boa Vista</p>}
          {hovered2 && <p className="destinationText2">Svalgararor</p>}
          {hovered3 && <p className="destinationText3">Palaos</p>}
      </div>

      <div className="beachContainer">
        <div className="contentOverlayDestinationsBottom">
        <p className="aboutText1">
          Fill Your Life With Experiences, Not Things
        </p>
       <p className="aboutText2">Have Stories To Tell, Not Stuff To Show</p>
      </div>
        <img
          src={Img44}
          alt="Background"
          className="AboutImageDestinations"
        />
      </div>
    </>
  );
};

export default Destinations;
