/* eslint-disable react/prop-types */
import { useState, useRef, useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Villas.css";
import { carouselImagesVillas } from "../../../../common/Utils/indexVillas";

export const Villas = () => {
  const [sliderIndex, setSliderIndex] = useState(0);
  const sliderRef = useRef(null);

  useEffect(() => {
    const handleKeyPress = (event) => {
      if (event.key === "ArrowRight") {
        sliderRef.current.slickNext();
      } else if (event.key === "ArrowLeft") {
        sliderRef.current.slickPrev();
      }
    };

    window.addEventListener("keydown", handleKeyPress);

    return () => {
      window.removeEventListener("keydown", handleKeyPress);
    };
  }, []);

  const handleProgressBarClick = (event) => {
    const progressBar = event.currentTarget;
    const clickX = event.clientX - progressBar.getBoundingClientRect().left;
    const progressWidth = progressBar.clientWidth;
    const clickedPercentage = (clickX / progressWidth) * 100;
    const newIndex = Math.round((clickedPercentage / 100) * (carouselImagesVillas.length - 1));

    sliderRef.current.slickGoTo(newIndex);
  };

  const settings = {
    dots: false,
    infinite: true,
    speed: 750,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    centerMode: true,
    centerPadding: "0",
    beforeChange: (current, next) => {
      setSliderIndex(next);
    },
  };

  const ProgressBar = ({ index }) => {
    const progressWidth = (index / (carouselImagesVillas.length - 1)) * 100;

    return (
      <div className="progress-bar" onClick={handleProgressBarClick}>
        <div className="progress" style={{ width: `${progressWidth}%` }} />
      </div>
    );
  };

  return (
    <div className="carouselContainerVillas">
      <span className="carouselTitleVillas">Explore Our Facilities</span>
      <Slider ref={sliderRef} {...settings}>
        {carouselImagesVillas.map((image, index) => (
          <div key={index} className="slide-image">
            <img
              src={image.src}
              alt={`Slide ${index + 1}`}
              className="image-item"
              style={{
                height: `${image.height}em`,
                width: "100%",
              }}
            />
          </div>
        ))}
      </Slider>
      <ProgressBar index={sliderIndex} />
    </div>
  );
};

export default Villas;
