import "./Nankurunaisa.css";
import Img5 from "../../assets/img5.jpg";
import Img9 from "../../assets/img9.jpeg";

export const Nankurunaisa = () => {
  return (
    <>
      <div className="nankurunaisaContainer">
        <div className="textContainer">
          <div className="nankurunaisaTop">
            <span className="nankurunaisaTitle"> Nankurunaisa</span>
            <p className="nankurunaisaText">
              is more than just a travel company or lifestyle brand. It is a
              community of like-minded individuals seeking genuine connections,
              limitless freedom, and the desire to live an extraordinary life
              without constraints
            </p>
          </div>
          <div className="nankurunaisaBottom">
            <span className="nankurunaisaTitle2"> The Nankurunaisas</span>
            <p className="nankurunaisaText">
              We embody a global tribe, driven by the vision of uniting
              Nankurunaisas worldwide. Our shared journey involves creating
              unforgettable moments, exploring distinctive destinations, and
              embracing the simple joys of life. Nankurunaisa transcends the
              conventional boundaries of a travel company or lifestyle brand; it
              is a vibrant community fostering authentic connections and
              boundless freedom
            </p>
          </div>
        </div>

        <div className="imageContainer">
          <img src={Img5} alt="Logo" className="nankurunaisaImage" />
        </div>
      </div>
      <div className="nankurunaisaContainerBotton">
        <div className="imageContainerRight">
          <img src={Img9} alt="Logo" className="nankurunaisaImage" />
        </div>
        <div className="textContainer">
          <div className="nankurunaisaTop">
            <div className="wildLuxuryContainer">
              <span className="wildLuxuryTitle">Wild Luxury Retreat</span>
              <span className="wildLuxurySubtitle">Experiences,</span>
              <span className="wildLuxuryTailored">For The Adventurous</span>
              <span className="wildLuxuryAdventurous">Explorer Spirit</span>
            </div>
          </div>
          <div className="exploreButton">
            Explore All Destinations
          </div>
        </div>
      </div>
    </>
  );
};

export default Nankurunaisa;
