import "./wellnessPalaosGallery.css";
import Img1 from "../../../../assets/Palaos/Img10.jpg";
import Img2 from "../../../../assets/Palaos/Img11.jpg";
import Img3 from "../../../../assets/Palaos/Img26.webp";
import Img4 from "../../../../assets/Palaos/Img25.webp";

export const WellnessPalaosGallery = () => {
  return (
    <>
      <div className="containerWellnessPalaosGallery">
        <div className="titleContainerWellnessPalaosGallery">
          <p className="titleWellnessPalaosGallery">Inner Health</p>
          <div className="lineWellnessPalaosGallery"></div>
        </div>
      </div>
      <div className="InformationWellnesPalaosGallery">
        <div className="titleInformationWellnessPalaosGallery">
          <p className="InformationWellnes1">
            Wellness & Fitness at Palaos Coral Arch
          </p>
        </div>
        <div className="titleInformationWellnessPalaosGallery2">
        <p className="aboutWellness">
            We blend indigenous elements such as melipona honey, coconut, and
            cacao, tailoring each treatment to cater to the specific
            requirements of our guests, aiming to attain a sense of harmony and
            overall well-being
          </p>
        </div>          
        
        <div className="descriptionWellmess">
          <div className="imagesContainerWellnessGallery1">
            <img src={Img1} alt="Wellness" className="leftImageWellness" />
          </div>
          <div className="imagesContainerWellnessGallery4">
            <img src={Img4} alt="Wellness" className="centerImageWellness" />
          </div>
          <div className="imagesContainerWellnessGallery3">
            <img src={Img3} alt="Wellness" className="centerImageWellness2" />
          </div>
          <div className="imagesContainerWellnessGallery2">
            <img src={Img2} alt="Wellness" className="rightImageWellness" />
          </div>
        </div>
      </div>
    </>
  );
};

export default WellnessPalaosGallery;


