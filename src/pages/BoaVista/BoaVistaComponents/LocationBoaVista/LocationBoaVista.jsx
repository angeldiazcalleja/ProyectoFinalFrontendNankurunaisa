import "./LocationBoaVista.css";
import Img1 from "../../../../assets/Palaos/Img7.jpg"

export const LocationBoaVista = () => {
  return (
    <div className="locationBoaVistaContainer">
      <div className="locationInformation1">
        <div className="locationTitle1">
          <span className="locationTitleBoaVista"> Cabo Verde</span>
        </div>
        <div className="locationSubtitle1">
          <p className="locationSubtitleBoaVista">A Paradise On A Small Island</p>
        </div>
        <div className="locationText1">
        Immerse yourself in the enchanting beauty of Cabo Verde, where golden sands meet crystal-clear waters, and vibrant culture intertwines with lush landscapes. This Atlantic archipelago boasts sun-soaked beaches, rich biodiversity, and a warm, welcoming atmosphere. Explore charming villages, savor the local cuisine, and witness the lively rhythms of traditional music. Cabo Verde is not just a destination; it is an invitation to experience the vibrant tapestry of this tropical paradise.
        </div>
      </div>

      <div className="locationInformation2">
        <div className="locationTitle2BoaVista"> Boa Vista</div>
        <div className="locationText2">
        Discover the allure of Boa Vista, where pristine desert landscapes, dry forests, and volcanic terrain create a captivating backdrop. This island in Cabo Verde offers a unique blend of nature is wonders and cultural treasures. Traverse the undulating sand dunes of the Viana Desert, explore the mysteries of the dry forests in Serra Malagueta, and marvel at the volcanic earth beneath your feet. Boa Vista is rich cultural tapestry unfolds in its vibrant cuisine, filled with local flavors, and echoes in the rhythmic beats of traditional music. Immerse yourself in the artistry of local crafts, and let Boa Vista weave an unforgettable chapter into your travel story.
        </div>
      </div>
      <div className="aboutInformationLocation">
      <div className="aboutContainerLocation">
        <img src={Img1} alt="Background" className="AboutImageLocation" />
      </div>
    </div>
    </div>
  );
};

export default LocationBoaVista