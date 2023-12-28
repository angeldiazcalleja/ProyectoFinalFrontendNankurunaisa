import "./wellnessPalaosGallery.css";
import Img1 from "../../../../assets/Palaos/Img10.jpg";
import Img2 from "../../../../assets/Palaos/Img11.jpg";
import Img3 from "../../../../assets/Palaos/Img26.webp";
import Img4 from "../../../../assets/Palaos/Img25.webp";
import Img5 from "../../../../assets/Palaos/Img63.jpg";
import Img6 from "../../../../assets/Palaos/Img67bis.webp";
import Img7 from "../../../../assets/Palaos/Img68.jpg";
import Img8 from "../../../../assets/Palaos/Img66.jpg";

export const WellnessPalaosGallery = () => {
  return (
    <>
      <div className="containerWellnessPalaosGallery">
        <div className="titleContainerWellnessPalaosGallery">
          <p className="titleWellnessPalaosGallery">Inner Health</p>
          <div className="lineWellnessPalaosGallery"></div>
        </div>
      </div>
      <div className="InformationWellnesPalaosGallery">
        <div className="titleInformationWellnessPalaosGallery">
          <p className="InformationWellnes1">
            Wellness & Fitness at Palaos Coral Arch
          </p>
        </div>
        <div className="titleInformationWellnessPalaosGallery2">
          <p className="aboutWellness">
            We blend indigenous elements such as melipona honey, coconut, and
            cacao, tailoring each treatment to cater to the specific
            requirements of our guests, aiming to attain a sense of harmony and
            overall well-being
          </p>
        </div>

        <div className="descriptionWellmess">
          <div className="imagesContainerWellnessGallery1">
            <img src={Img1} alt="Wellness" className="leftImageWellness" />
          </div>
          <div className="imagesContainerWellnessGallery4">
            <img src={Img4} alt="Wellness" className="centerImageWellness" />
          </div>
          <div className="imagesContainerWellnessGallery3">
            <img src={Img3} alt="Wellness" className="centerImageWellness2" />
          </div>
          <div className="imagesContainerWellnessGallery2">
            <img src={Img2} alt="Wellness" className="rightImageWellness" />
          </div>
        </div>
        <div className="textContainerWellnessGallery">
          <p>
            In the embrace of our yoga sanctuary, immerse yourself in the
            transformative journey of self-discovery and well-being. Our
            holistic approach to yoga and meditation extends beyond physical
            postures, guiding you to explore the profound connection between
            mind, body, and spirit.
          </p>
          <p>
            Through the ancient art of yoga, we invite you to embark on a voyage
            of self-renewal and inner exploration. Our experienced instructors
            curate practices that go beyond the mere stretching of limbs they
            delve into the essence of mindfulness, breathing, and meditation,
            fostering a profound connection with the present moment.
          </p>
        </div>
        <div className="descriptionWellnessBottom">
          <div className="imagesContainerWellnessGallery1Bottom">
            <img
              src={Img5}
              alt="Wellness"
              className="leftImageWellnessBottom"
            />
          </div>
          <div className="imagesContainerWellnessGallery4Bottom">
            <img
              src={Img6}
              alt="Wellness"
              className="centerImageWellnesBottom"
            />
          </div>
          <div className="imagesContainerWellnessGallery3Bottom">
            <img
              src={Img7}
              alt="Wellness"
              className="centerImageWellness2Bottom"
            />
          </div>
          <div className="imagesContainerWellnessGallery2Bottom">
            <img
              src={Img8}
              alt="Wellness"
              className="rightImageWellnessBottom"
            />
          </div>
        </div>
        <div className="textContainerWellnessGallery2">
          <p>
            As you gracefully move through the yoga postures, you will witness
            not only the physical benefits but also the awakening of mental
            clarity and emotional harmony. Each breath becomes a conscious
            dance, weaving a tapestry of serenity and resilience. The yoga mat
            becomes a sacred space, a canvas where the soul paints its journey
            towards balance and self-realization.
          </p>
          <p>
            Our carefully crafted yoga and meditation sessions cater to
            practitioners of all levels, from beginners seeking a foundation to
            experienced yogis deepening their practice. The goal is not just
            physical fitness but a holistic rejuvenation that permeates every
            aspect of your being.
          </p>
        </div>
      </div>
    </>
  );
};

export default WellnessPalaosGallery;
