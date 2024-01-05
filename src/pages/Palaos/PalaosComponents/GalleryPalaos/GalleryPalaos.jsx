import "./GalleryPalaos.css";
import Img1 from "../../../../assets/Palaos/Img39.jpg";
import Img2 from "../../../../assets/Palaos/Img31.webp";
import Img3 from "../../../../assets/Palaos/Img38.jpg";
import { useState } from "react";

const GalleryPalaos = () => {
  const [isHovered1, setIsHovered1] = useState(false);
  const [isHovered2, setIsHovered2] = useState(false);
  const [isHovered3, setIsHovered3] = useState(false);

  return (
    <div className="gallery-containerPalaos">
      <div
        className="gallery-item"
        onMouseEnter={() => setIsHovered1(true)}
        onMouseLeave={() => setIsHovered1(false)}
      >
        <img src={Img1} alt="Resort Palaos" />
        <div className={`hover-text ${isHovered1 ? "visible" : ""}`}>
          The Nankurunaisa Experience Begins With The Finest Facilities Created,
          Designed, And Prepared To Make Your Stay Something You Will Never
          Forget.
        </div>
      </div>

      <div
        className="gallery-item"
        onMouseEnter={() => setIsHovered2(true)}
        onMouseLeave={() => setIsHovered2(false)}
      >
        <img src={Img2} alt="Dancer Palaos" />
        <div className={`hover-text ${isHovered2 ? "visible" : ""}`}>
          The Tradition And Culture Of Palaos Will Make You Resonate And Feel.
          Our Retreat Is In Symbiosis With The Local Community, Forming One Big
          Family.
        </div>
      </div>

      <div
        className="gallery-item"
        onMouseEnter={() => setIsHovered3(true)}
        onMouseLeave={() => setIsHovered3(false)}
      >
        <img src={Img3} alt="Food Palaos" />
        <div className={`hover-text ${isHovered3 ? "visible" : ""}`}>
          Indulge In The Finest Local Produce With Avant-Garde, Colorful, And
          Flavorful Gastronomy. Palaos Cuisine Will Transport You To A New
          Dimension Of Taste.
        </div>
      </div>
    </div>
  );
};

export default GalleryPalaos;
