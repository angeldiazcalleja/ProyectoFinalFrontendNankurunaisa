import InstagramPhoto from "../../../../common/InstagramPhoto/InstagramPhoto";
import Img1 from "../../../../assets/Boavista/Img72.webp";
import Img2 from "../../../../assets/Boavista/Img55.jpg";
import Img3 from "../../../../assets/Boavista/Img73.webp";
import Img4 from "../../../../assets/Boavista/Img74.jpg";
import Img5 from "../../../../assets/Boavista/Img75.jpeg";
import Img6 from "../../../../assets/Boavista/Img76.webp";
import Img7 from "../../../../assets/Boavista/Img57.jpg";
import "./InstagramBoaVista.css";

export const InstagramBoaVista = () => {
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
