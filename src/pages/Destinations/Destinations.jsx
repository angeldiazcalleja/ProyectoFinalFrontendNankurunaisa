import "./Destinations.css";
import Img28 from "../../assets/Destinations/Img19.jpg";
import Img44 from "../../assets/Img44.jpg";

const Destinations = () => {
  return (
    <>
      <div className="destinationsContainer">
        <div className="containerTitleDestinations">
          <span className="destinationsTitle">
            Explore Our Wild Destinations
          </span>
        </div>
        <div className="destinationImages">
          <img src={Img28} alt="Destination 1" className="destinationImage" />
          <img src={Img28} alt="Destination 2" className="destinationImage" />
          <img src={Img28} alt="Destination 3" className="destinationImage" />
        </div>
      </div>
      <div className="beachContainer">
      <div className="contentOverlayDestinations">
        <p className="aboutText1">
          Fill Your Life With Experiences, Not Things
        </p>
        <p className="aboutText2">Have Stories To Tell, Not Stuff To Show</p>
      </div>
      <img src={Img44} alt="Background" className="AboutImageDestinations" />
    </div>
    </>
  );
};

export default Destinations;
