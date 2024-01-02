import "./BoaVistaInfo.css";
import Img2 from "../../../../assets/Boavista/Img2.jpg";
import Img3 from "../../../../assets/Boavista/Img3.webp";

export const BoaVistaInfo = () => {
  return (
    <>
      <div className="boaVistaHeaderTitle">
      <span className="boaVistaTitle">
            An Island In The Sun
        </span>
      </div>
      <div className="boaVistaInfoContainer">
        <div>
          <img className="boaVistaImg1" src={Img3} alt="Resort Palaos" />
        </div>
        <div>
          <img className="boaVistaImg2" src={Img2} alt="Resort Palaos" />
        </div>
      </div>
      <div className="boaVistaInfoContainerText">
        <span className="boaVistaSpanLeft">Whats on at Boa Vista</span>
        <p className="boaVistaTextLeft">
          Capturing the citys vibrant cultural essence, Nankurunaisa
          collaborates with local artisans and creators, curating a diverse
          array of unique events, immersive activities, and in-depth
          experiences. This thoughtful program offers compelling reasons to
          revisit at various times throughout the year, ensuring each visit is
          distinct and memorable.
        </p>

        <span className="boaVistaSpanRight">Discover Boa Vista</span>
        <p className="boaVistaTextRight">
          Whether seeking experiences in Boa Vista itself, the Serra Malagueta
          or the Viana Desert, Nankurunaisa exclusive offers ensure the most
          memorable of stays.
        </p>
      </div>
    </>
  );
};

export default BoaVistaInfo;
