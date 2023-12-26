// import PropTypes from "prop-types";

// const InstagramPhoto = ({ src, alt }) => {
//   return (
//     <div className="instagramPhoto">
//       <img src={src} alt={alt} />
//     </div>
//   );
// };

// InstagramPhoto.propTypes = {
//   src: PropTypes.string.isRequired,
//   alt: PropTypes.string.isRequired,
// };

// export default InstagramPhoto;




import PropTypes from "prop-types";
import instagramIcon from "../../assets/Instagram/iconoIG.png"; // Reemplaza con la ruta correcta de tu icono
import "./InstagramPhoto.css";

const InstagramPhoto = ({ src, alt }) => {
  return (
    <div className="instagramPhoto">
      <img src={src} alt={alt} />
      <div className="instagramOverlay">
        <img src={instagramIcon} alt="Instagram" />
      </div>
    </div>
  );
};

InstagramPhoto.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
};

export default InstagramPhoto;
