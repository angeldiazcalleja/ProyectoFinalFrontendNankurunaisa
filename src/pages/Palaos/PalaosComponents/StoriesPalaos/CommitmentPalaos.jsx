import "./CommitmentPalaos.css";
import Img1 from "../../../../assets/Palaos/Img1.jpg";
import Img2 from "../../../../assets/Palaos/Img3.jpg";

export const CommitmentPalaos = () => {
  return (
    <div className="commitmentContainer">
      <div className="topSection">
        <img src={Img1} alt="Top Image" className="topImage" />
        <div className="titleContainer">
          <p>Dive while you restore</p>
        </div>
        <div className="textContainerCommitment">
          <p>
            Our commitments define us, shape us, inspire us, and unite us for a
            good cause.{" "}
          </p>
          <p>Each coral is a story worth fighting for.</p>
        </div>
      </div>

      <div className="bottomSection">
        <img src={Img2} alt="Bottom Image" className="bottomImage" />
      </div>
      <div className="titleCommitment">
        <p>Coral Hope</p>
      </div>
      <div className="textContainerCommitmentBottom">
        <p>
          Learn more about how we restore and bring back to life the corals of
          Palaos.
        </p>
        <p>You will explore the marine world and its diversity.</p>
      </div>

      <div className="commitmentButton">Read Our Works</div>
    </div>
  );
};
