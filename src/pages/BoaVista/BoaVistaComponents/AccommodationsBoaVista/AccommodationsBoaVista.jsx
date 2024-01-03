import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "./AccommodationsBoaVista.css";
import Img1 from "../../../../assets/Boavista/Img62.jpg";
import Img2 from "../../../../assets/Boavista/Img63.jpg";
import Img3 from "../../../../assets/Boavista/Img38.webp";
import Img4 from "../../../../assets/Boavista/Img43.webp";
import Img5 from "../../../../assets/Boavista/Img45.webp";
import Img6 from "../../../../assets/Boavista/Img67.jpg";
import Img7 from "../../../../assets/Boavista/Img61.jpg";
import Img8 from "../../../../assets/Boavista/Img47.webp";

const AccommodationsBoaVista = () => {
  const imagesBlock1 = [Img1, Img3, Img4, Img5];
  const imagesBlock2 = [Img2, Img6, Img7, Img8];

  return (
    <>
      <div className="accommodationsHeaderTitle">
        <span className="boaVistaTitleAccommodation">Luxury Accommodations</span>
      </div>
      <div className="boaVistaInfoContainerAccommodation">
        <div className="carouselContainer">
          <Carousel
            className="boaVistaAccommodationImg1"
            infiniteLoop={true}
            showThumbs={false}
          >
            {imagesBlock1.map((image, index) => (
              <div key={index}>
                <img className="carouselImage" src={image} alt={`Accommodation 1 - ${index + 1}`} />
              </div>
            ))}
          </Carousel>
          <div className="boaVistaTitleBottom">
          <span className="boaVistaAccommodationSpanLeft">Maison Du Temple</span>
          <p className="boaVistaAccommodationTextLeft">
          Nestled within the lush gardens of the resort, this detached one-bedroom pavilion features a spacious private courtyard garden, an opulent master suite, and an authentic outdoor gazebo.
          </p>
          </div>
        </div>
        <div className="carouselContainer">
          <Carousel
            className="boaVistaAccommodationImg2"
            infiniteLoop={true}
            showThumbs={false}
          >
            {imagesBlock2.map((image, index) => (
              <div key={index}>
                <img className="carouselImage" src={image} alt={`Accommodation 2 - ${index + 1}`} />
              </div>
            ))}
          </Carousel>
          <div className="boaVistaTitleBottom">
          <span className="boaVistaAccommodationSpanRight">Maison </span>
          <p className="boaVistaAccommodationTextRight">
          Situated amid the scenic resort gardens, this independent one-bedroom pavilion boasts an expansive private courtyard garden, a lavish master suite, and an enchanting outdoor gazebo.
          </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default AccommodationsBoaVista;
