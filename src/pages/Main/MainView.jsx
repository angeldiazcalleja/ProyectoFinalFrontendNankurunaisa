// import { Header } from "../../common/Header/Header";
import { About } from "../About/About";
import Carousel from "../Carousel/Carousel";

import Destinations from "../Destinations/Destinations";
import { Home } from "../Home/Home";
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
       
    </div>
  );
};
