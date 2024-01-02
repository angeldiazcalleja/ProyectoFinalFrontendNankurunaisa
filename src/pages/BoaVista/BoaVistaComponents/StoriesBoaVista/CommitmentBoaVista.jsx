import "./CommitmentBoaVista.css";
import Img1 from "../../../../assets/Boavista/Img27.jpg";
import Img2 from "../../../../assets/Boavista/Img28.jpg";
import { Link } from "react-router-dom";

export const CommitmentBoaVista = () => {
  return (
    <div className="commitmentContainer">
      <div className="topSection">
        <img src={Img1} alt="Top Image" className="topImage" />
        <div className="titleContainer">
          <p>Reforest your soul</p>
        </div>
        <div className="textContainerCommitment">
          <p className="textRightBoa">
            Our commitments define us, shape us, inspire us, and unite us for a
            good cause.
          </p>
          <p className="textRightBoa">The earth gives back to us everything we create</p>
        </div>
      </div>

      <div className="bottomSection">
        <img src={Img2} alt="Bottom Image" className="bottomImage" />
      </div>
      <div className="titleCommitment">
        <p>Green Horizon</p>
      </div>
      <div className="textContainerCommitmentBottom">
        <p>
        Learn more about how we reforest and bring life back to the jungles of Boa Vista
        </p>
        <p>You will explore the jungle world, its fauna and its diversity.</p>
      </div>
      <Link to="/divepalaos">
      <div className="commitmentButton">See Our Works</div>
      </Link>
    </div>
  );
};

export default CommitmentBoaVista
