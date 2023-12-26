import InstagramPhoto from "../../common/InstagramPhoto/InstagramPhoto";
import Img1 from "../../assets/Instagram/Img1.jpg";
import Img2 from "../../assets/Instagram/Img2.jpg";
import Img3 from "../../assets/Instagram/Img3.jpg";
import Img4 from "../../assets/Instagram/Img4.jpg";
import Img5 from "../../assets/Instagram/Img5.jpg";
import Img6 from "../../assets/Instagram/Img6.jpg";
import Img7 from "../../assets/Instagram/Img7.jpg";
import "./Instagram.css";

export const Instagram = () => {
  const photos = [
    { src: Img1, alt: "Img" },
    { src: Img2, alt: "Img" },
    { src: Img3, alt: "Img" },
    { src: Img4, alt: "Img" },
    { src: Img5, alt: "Img" },
    { src: Img6, alt: "Img" },
    { src: Img7, alt: "Img" },
  ];

  return (
    <div className="principalContainer">
      <div className="instagramContainer">
        <div className="containerTitleInstagram">
          <span className="instagramTitle"> Instagram</span>
        </div>

        <div className="photosContainer">
          {photos.map((photo, index) => (
            <InstagramPhoto key={index} src={photo.src} alt={photo.alt} />
          ))}
        </div>
        <div className="instagramButton">
           Follow @Nankurunaisa
        </div>
      </div>
    </div>
  );
};
