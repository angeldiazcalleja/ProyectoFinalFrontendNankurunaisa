import "./divePalaos.css";
import Img1 from "../../../../assets/Palaos/Img54.jpeg";
import Img2 from "../../../../assets/Palaos/Img55.jpg";
import Img3 from "../../../../assets/Palaos/Img57.jpg";
import Img4 from "../../../../assets/Palaos/Img1.jpg";
import Img5 from "../../../../assets/Palaos/Img2.jpg";
import Img6 from "../../../../assets/Palaos/Img56.webp";
import Img7 from "../../../../assets/Palaos/Img58.jpg";
import Img8 from "../../../../assets/Palaos/Img59.jpg";
import Img9 from "../../../../assets/Palaos/Img60.jpg";
import Img10 from "../../../../assets/Palaos/Img61.jpg";


export const DivePalaos = () => {


    const photos = [
        { src: Img4, alt: "Img" },
        { src: Img5, alt: "Img" },
        { src: Img6, alt: "Img" },
        { src: Img7, alt: "Img" },
        { src: Img8, alt: "Img" },
        { src: Img9, alt: "Img" },
        { src: Img10, alt: "Img" },
      ];
    

  return (
    <>
      <div className="home-containerDivePalaos">
        <div className="titleContainerDivePalaos">
          <p className="titleHomeDivePalaos">Dive Palaos</p>
          <div className="lineHomeDivePalaos"></div>
        </div>
      </div>
      <div className="InformationDivePalaos">
        <div className="titleInformationDivePalaos">
          <p className="InformationDive1">Color Hope: Coral Reef</p>
          <p className="InformationDive2">Regeneration In Palaos</p>
        </div>
        <div className="descriptionDive">
          <div className="imagesContainer">
            <img src={Img1} alt="Coral Reef 1" className="leftImage" />
          </div>
          <div className="imagesContainer">
            <img src={Img2} alt="Coral Reef 2" className="rightImage" />
          </div>
          <div className="textContainer1">
            <p>
              Just beneath the oceans surface, where the suns intense rays
              transition into a realm of life, dynamic coral reefs come to
              life—an intricate and precious ecosystem, renowned for its
              fragility and biodiversity. Apart from their awe-inspiring
              aesthetics, these environments actively signal the well-being of
              our oceans and serve as a vital sanctuary for myriad marine
              species.
            </p>
            <p>
              The Palau Reef, one of the largest reef systems in the world,
              stands majestically near our home, creating a deeply rooted
              connection to the world of coral reefs. Years ago, we decided to
              join the change by initiating our coral regeneration project.
            </p>
          </div>
          <div className="textContainer2">
            <p>
              Several years ago, as our admiration for the Palau Reef grew, we
              felt an undeniable responsibility to contribute to the
              conservation of this magnificent underwater realm. Motivated by a
              deep sense of environmental stewardship, our Director of Marine
              Conservation, Maria Rodriguez, spearheaded the inception of our
              coral regeneration project.
            </p>
            <p>
              Understanding the delicate balance of these ecosystems, Maria
              collaborated with marine biologists, environmentalists, and local
              communities to develop a comprehensive plan. The project aimed not
              only to restore coral health but also to raise awareness about the
              importance of preserving marine biodiversity.
            </p>
            <p>
              Our initiative garnered support from local businesses, government
              agencies, and passionate individuals who shared our commitment to
              the oceans. Through community outreach and educational programs,
              we sought to inspire a collective sense of responsibility for the
              well-being of our marine environments.
            </p>
          </div>
          <div className="imagesContainerBottom">
            <img src={Img3} alt="Coral Reef 3" className="centerImage" />
          </div>
          <div className="textContainer3">
            <p>
              Implementing cutting-edge coral propagation techniques and
              sustainable practices, the project became a beacon of hope for the
              Palau Reefss future. Over time, the once damaged coral colonies
              began to recover, attracting a resurgence of marine life and
              transforming the reef into a thriving ecosystem once more.
            </p>
            <p>
              As our coral regeneration project evolved, so did our
              understanding of the interconnectedness between human actions and
              the health of our oceans. Today, we continue our efforts,
              expanding the project to address broader environmental issues and
              collaborating with international organizations to promote global
              ocean conservation. Our journey serves as a testament to the
              transformative power of collective action and the enduring impact
              that dedicated individuals can have on the preservation of our
              planets natural wonders.
            </p>
          </div>
        </div>
        <div className="galleryDive">
        <div className="galleryContainerDive">
          <span className="diveGalleryTitle"> What To Expect</span>
        </div>

        <div className="photosGalleryContainer">
          {photos.map((photo, index) => (
            <img key={index} src={photo.src} alt={photo.alt} className="divePhoto" />
          ))}
        </div>
      </div>
      </div>
    </>
  );
};

export default DivePalaos;
