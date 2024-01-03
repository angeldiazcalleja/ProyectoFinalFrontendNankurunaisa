import "./ActivitiesGalleryBoaVista.css";
import Img1 from "../../../../assets/Boavista/Img9.jpg";
import Img2 from "../../../../assets/Boavista/Img35.jpg";
import Img3 from "../../../../assets/Boavista/Img52.webp";
import Img4 from "../../../../assets/Boavista/Img51.avif";
import Img5 from "../../../../assets/Boavista/Img53.jpg";
import Img6 from "../../../../assets/Boavista/Img48.jpg";
import Img7 from "../../../../assets/Boavista/Img50.jpg";
import Img8 from "../../../../assets/Boavista/Img54.jpg";
import ImageWithText from "../../../../common/ImageText/ImageText";

export const ActivitiesGalleryBoaVista = () => {
  return (
    <>
      <div className="home-containerBoaVistaGallery">
        <div className="titleContainerBoaVistaGallery">
          <p className="titleHomeBoaVistaGallery">Feel the Adrenaline</p>
          <div className="lineHomeBoaVistaGallery"></div>
        </div>
      </div>

      <div className="containerGalleryBoaVista">
        <div className="galleryContainer">
          <div className="lineStudioGallery"></div>
          <div className="titleGallery">The adventure is an attitude</div>
          <div className="lineStudioGallery"></div>
          <div className="topRow">
            <img src={Img1} alt="Image 1" className="galleryImage1" />
            <img src={Img2} alt="Image 2" className="galleryImage1" />
            <img src={Img3} alt="Image 3" className="galleryImage1" />
          </div>

          <div className="middleRow">
            <div className="leftColumn">
              <img src={Img4} alt="Image 4" className="galleryImage2" />
              <img src={Img5} alt="Image 5" className="galleryImage2" />
            </div>

            <div className="centerColumn">
              <ImageWithText
                imageSrc={Img6}
                altText="Image 6"
                text="Enjoy an adventure through the desert atop a kart as the sun sets until it disappears. You'll be able to traverse the dunes formed by the wind.
              If you can dream it, we can do it."
              />
            </div>

            <div className="rightColumn">
              <img src={Img7} alt="Image 1" className="galleryImage4" />
              <img src={Img8} alt="Image 2" className="galleryImage4" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ActivitiesGalleryBoaVista;
