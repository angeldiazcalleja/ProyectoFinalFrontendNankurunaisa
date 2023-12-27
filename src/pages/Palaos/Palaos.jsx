import "./Palaos.css";
import { AboutPalaos } from "./PalaosComponents/AboutPalaos/AboutPalaos";
import { CommitmentPalaos } from "./PalaosComponents/StoriesPalaos/CommitmentPalaos";
import GalleryPalaos from "./PalaosComponents/GalleryPalaos/GalleryPalaos";
import HomePalaos from "./PalaosComponents/HomePalaos/HomePalaos";
import { LocationPalaos } from "./PalaosComponents/LocationPalaos/LocationPalaos";
import { WellnessPalaos } from "./PalaosComponents/WellnessPalaos/WellnessPalaos";
import Villas from "./PalaosComponents/Villas/Villas";


export const Palaos = () => {
  return (
    <>
    <div className="palaosView">
   
    <HomePalaos/>
    <GalleryPalaos/>
    <AboutPalaos/>
    <CommitmentPalaos/>
    <LocationPalaos/>
    <WellnessPalaos/>
    <Villas/>


    </div>
    </>
  );
};


export default Palaos

