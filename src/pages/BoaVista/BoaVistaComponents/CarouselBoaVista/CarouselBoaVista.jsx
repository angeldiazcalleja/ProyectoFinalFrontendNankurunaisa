/* eslint-disable react/prop-types */
import { useState } from "react";
import { CSSTransition } from "react-transition-group";
import Img1 from "../../../../assets/Boavista/Img7.jpg";
import Img2 from "../../../../assets/Boavista/Img22.jpg";
import Img3 from "../../../../assets/Boavista/Img23.jpg";
import Img4 from "../../../../assets/Boavista/Img29.webp";
import Img5 from "../../../../assets/Boavista/Img31.webp";
import Img6 from "../../../../assets/Boavista/Img25.jpg";
import Img7 from "../../../../assets/Boavista/Img37.jpg";
import Img8 from "../../../../assets/Boavista/Img36.jpg";
import Img9 from "../../../../assets/Boavista/Img34.png";
import Img10 from "../../../../assets/Boavista/Img32.webp";
import "./CarouselBoaVista.css";


export const CarouselBoaVista = () => {
  const images = [Img1, Img2, Img3, Img4, Img5,Img6,Img7,Img8,Img9, Img10];
  const [active, setActive] = useState(0);

  const moveLeft = () => {
    const newActive = active - 1 < 0 ? images.length - 1 : active - 1;
    setActive(newActive);
  };

  const moveRight = () => {
    const newActive = (active + 1) % images.length;
    setActive(newActive);
  };


  const generateItems = () => {
    const renderedItems = [];
    for (let i = active - 2; i < active + 3; i++) {
      let index = i;
      if (i < 0) {
        index = images.length + i;
      } else if (i >= images.length) {
        index = i % images.length;
      }
      const level = active - i;
      renderedItems.push(
        <CSSTransition key={index} classNames="item" timeout={1000}>
          <Item src={images[index]} level={level} />
        </CSSTransition>
      );
    }
    return renderedItems;
  };

  return (
    <div className="noselect" style={{ height: '80em' }}>
      <div className="arrow arrow-left" onClick={moveLeft}>
        <i className="fi-arrow-left"></i>
      </div>
      <div className="carousel-items-container">{generateItems()}</div>
      <div className="arrow arrow-right" onClick={moveRight}>
        <i className="fi-arrow-right"></i>
      </div>
    </div>
  );
};



const Item = ({ src, level }) => {
  const className = `item level${level}`;
  
  return (
    <div className="carouselBoaVista">
  <img className={className} src={src} alt={`Carousel Item ${level}`} />
  </div>
  )
};

export default CarouselBoaVista;
