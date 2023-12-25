import "./Desert.css";
import Img3 from "../../assets/Img3.webp";

export const Desert = () => {
  return (
    <>
      <div className="desertContainer">
        <img className="desertImage" src={Img3} alt="desert Image" />
        <span className="desertTitle"> Nankurunaisa Moments</span>
        <p className="desertSubtitle">--Activities and Experiences--</p>
        <p className="activitiesText">
          En Nankurunaisa, We Offer Activities That Aim To Connect With
          Everything That Is Sometimes Difficult To Remember In Our Daily Lives.
        </p>
        <p className="activitiesText">
          We Seek To Help You Find The Path To Connect With What Truly Matters,
          Taking Care Of The Small Details.
        </p>
      </div>
    </>
  );
};
