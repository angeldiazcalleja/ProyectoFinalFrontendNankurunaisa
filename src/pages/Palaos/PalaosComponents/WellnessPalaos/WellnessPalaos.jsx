import "./WellnessPalaos.css";

export const WellnessPalaos = () => {
  return (
    <div className="wellnessPalaosContainer">
      <div className="wellnessTextContainer">
        <div className="wellnessTitleContainer">
            Our Wellness
        </div>
        <div className="lineWellness"></div>
        <p className="textWellness">
          We are firm believers that unlocking genuine self-expression originates
          from within, fostering the well-being of both body and mind. Stroll
          amidst our botanical garden, where we delve into the secrets of
          medicinal aromatic herbs. Explore our cacao and melipona honey huts,
          and immerse yourself in the rich tapestry of local traditions and
          practices rooted in Mayan culture.
        </p>
        <div className="wellnessGalleryButtom">
            Review More
        </div>
      </div>
      <div className="wellnessVideoContainer">
        <iframe
          loading="lazy"
          src="https://player.vimeo.com/video/643162676?background=1&amp;api=1&amp;player_id=vvvvimeoVideo-1"
          frameBorder="0"
          webkitallowfullscreen=""
          mozallowfullscreen=""
          allowFullScreen=""
          data-rocket-lazyload="fitvidscompatible"
          data-lazy-src="https://player.vimeo.com/video/643162676?background=1"
          data-ll-status="loaded"
          className="entered-lazyloaded"
          data-ready="true"
        ></iframe>
      </div>
    </div>
  );
};

export default WellnessPalaos;
