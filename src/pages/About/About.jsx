import "./About.css";
import Img13 from "../../assets/img13.jpg";

export const About = () => {
  return (
    <div className="aboutInformation">
      <div className="aboutContainer">
        <div className="contentOverlay">
          <p className="aboutText">
            With An Unwavering Commitment To Nature And The Environment,
            Nankurunaisa Invites You To Discover Exceptional Retreats In
            Luxurious And Laid-Back Destinations Around The World. We Blend Our
            Devotion To Adventure, Yoga, Meditation, Gastronomy, And Holistic
            Well-Being, Creating Unique Experiences That Celebrate The
            Connection With Nature And Inner Balance. Explore With Us, Where
            Each Getaway Is An Opportunity To Nurture Body, Mind, And Spirit.
          </p>
          <button className="aboutButton">Read More About Us</button>
        </div>
        <img src={Img13} alt="Background" className="AboutImage" />
      </div>
    </div>
  );
};
