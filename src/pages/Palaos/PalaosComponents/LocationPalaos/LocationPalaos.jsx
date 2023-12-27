import "./LocationPalaos.css";
import Img1 from "../../../../assets/Palaos/Img27.webp"

export const LocationPalaos = () => {
  return (
    <div className="locationPalaosContainer">
      <div className="locationInformation1">
        <div className="locationTitle1">
          <span className="locationTitlePalaos"> Palaos</span>
        </div>
        <div className="locationSubtitle1">
          <p className="locationSubtitlePalaos">A Paradise On A Small Land</p>
        </div>
        <div className="locationText1">
          Discover the joy in the worlds most cheerful nation! Beyond the Pura
          Vida Lifestyle, numerous factors make this destination a must-visit on
          your dream list. Palaos is celebrated for its inviting climate,
          extraordinary biodiversity, and diverse wildlife. Featuring sun-kissed
          beaches, vibrant green forests, meandering rivers, and
          breathtaking waterfalls, it provides limitless possibilities for an
          adventurous and tropical getaway.
        </div>
      </div>

      <div className="locationInformation2">
        <div className="locationTitle2"> Soft Coral Arch</div>
        <div className="locationText2">
        Soft Coral Arch emanates a bohemian vibe, beckoning free-spirited individuals in search of a haven to feed their adventurous souls. Stroll along the dusty pathways, adorned with quaint cafes, vibrant surf shops, and artisanal boutiques, where time surrenders to the pursuit of creativity and connection. Each step immerses you in a kaleidoscope of colors, sounds, and scents that awaken the senses. Palm-fringed pristine beaches extend endlessly, caressed by turquoise waters that captivate both novice and seasoned surfers. Yet, Soft Coral Arch is more than a location; its a state of mind. A refuge where dreams flourish and passions ignite. Itss a place where the crashing waves and boundless horizons serve as a reminder that life is an adventure waiting to be explored.
        </div>
      </div>
      <div className="aboutInformationLocation">
      <div className="aboutContainerLocation">
        <div className="contentOverlayLocation">
          <p className="aboutTextLocation">
           Wellness
          </p>
        </div>
        <img src={Img1} alt="Background" className="AboutImageLocation" />
      </div>
    </div>
    </div>
  );
};
