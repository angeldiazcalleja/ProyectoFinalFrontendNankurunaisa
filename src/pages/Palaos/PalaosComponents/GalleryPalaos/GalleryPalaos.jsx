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
    <div className="gallery-container">
      <div
        className="gallery-item"
        onMouseEnter={() => setIsHovered1(true)}
        onMouseLeave={() => setIsHovered1(false)}
      >
        <img src={Img1} alt="Resort Palaos" />
        <div className={`hover-text ${isHovered1 ? "visible" : ""}`}>
          The Nankurunaisa experience begins with the finest facilities created,
          designed, and prepared to make your stay something you will never
          forget.
        </div>
      </div>

      <div
        className="gallery-item"
        onMouseEnter={() => setIsHovered2(true)}
        onMouseLeave={() => setIsHovered2(false)}
      >
        <img src={Img2} alt="Dancer Palaos" />
        <div className={`hover-text ${isHovered2 ? "visible" : ""}`}>
          The tradition and culture of Palaos will make you resonate and feel.
          Our retreat is in symbiosis with the local community, forming one big
          family.
        </div>
      </div>

      <div
        className="gallery-item"
        onMouseEnter={() => setIsHovered3(true)}
        onMouseLeave={() => setIsHovered3(false)}
      >
        <img src={Img3} alt="Food Palaos" />
        <div className={`hover-text ${isHovered3 ? "visible" : ""}`}>
          Indulge in the finest local produce with avant-garde, colorful, and
          flavorful gastronomy. Palaos cuisine will transport you to a new
          dimension of taste.
        </div>
      </div>
    </div>
  );
};

export default GalleryPalaos;
