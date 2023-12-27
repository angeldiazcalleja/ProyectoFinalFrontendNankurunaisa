import PropTypes from "prop-types";
import instagramIcon from "../../assets/Instagram/iconoIG.png";
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
