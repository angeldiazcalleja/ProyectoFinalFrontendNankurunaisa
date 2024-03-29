import { About } from "../About/About";
import Carousel from "../Carousel/Carousel";
import { Desert } from "../Desert/Desert";
import Destinations from "../Destinations/Destinations";
import { Home } from "../Home/Home";
import { Instagram } from "../Instagram/Instagram";
import Nankurunaisa from "../Nankurunaisa/Nankurunaisa";
import "./MainView.css";

export const MainView = () => {
  return (
    <div className="principalView">

        <Home />
        <Nankurunaisa/>
        <About/>
        <Destinations/>
        <Carousel/>
        <Desert/>
        <Instagram/>
       
    </div>
  );
};
