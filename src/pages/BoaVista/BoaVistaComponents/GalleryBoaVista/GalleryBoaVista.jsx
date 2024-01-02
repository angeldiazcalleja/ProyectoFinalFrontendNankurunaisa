import "./GalleryBoaVista.css";
import Img1 from "../../../../assets/BoaVista/Img4.jpg";
import Img2 from "../../../../assets/BoaVista/Img3.jpg";
import Img3 from "../../../../assets/BoaVista/Img5.webp";
import { useState } from "react";

const GalleryBoaVista = () => {
  const [isHovered1, setIsHovered1] = useState(false);
  const [isHovered2, setIsHovered2] = useState(false);
  const [isHovered3, setIsHovered3] = useState(false);

  return (
    <div className="gallery-container">
      <div
        className="gallery-item"
        onMouseEnter={() => setIsHovered1(true)}
        onMouseLeave={() => setIsHovered1(false)}
      >
        <img src={Img1} alt="Boa Vista Culture" />
        <div className={`hover-text ${isHovered1 ? "visible" : ""}`}>
          Explore Boa Vista, where you will be amazed by its
          rhythms and sounds. We have crafted a paradise where
          you will embark on an unforgettable journey.
        </div>
      </div>

      <div
        className="gallery-item"
        onMouseEnter={() => setIsHovered2(true)}
        onMouseLeave={() => setIsHovered2(false)}
      >
        <img src={Img2} alt="Architecture Boa Vista" />
        <div className={`hover-text ${isHovered2 ? "visible" : ""}`}>
          Immerse in the fascinating architecture of our resort, where
          every detail echoes the essence of rich Arabian tradition. From
          intricate geometric designs to majestic archways.
        </div>
      </div>

      <div
        className="gallery-item"
        onMouseEnter={() => setIsHovered3(true)}
        onMouseLeave={() => setIsHovered3(false)}
      >
        <img src={Img3} alt="Food Boa Vista" />
        <div className={`hover-text ${isHovered3 ? "visible" : ""}`}>
          On the Nankurunaisa journey, the local gastronomy takes center stage,
          featuring premium ingredients meticulously crafted to deliver an
          explosion of flavors.
        </div>
      </div>
    </div>
  );
};

export default GalleryBoaVista;
