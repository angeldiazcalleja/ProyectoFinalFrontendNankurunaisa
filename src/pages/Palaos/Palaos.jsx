import "./Palaos.css";
import { AboutPalaos } from "./PalaosComponents/AboutPalaos/AboutPalaos";
import { CommitmentPalaos } from "./PalaosComponents/StoriesPalaos/CommitmentPalaos";
import GalleryPalaos from "./PalaosComponents/GalleryPalaos/GalleryPalaos";
import HomePalaos from "./PalaosComponents/HomePalaos/HomePalaos";

export const Palaos = () => {
  return (
    <>
    <div className="palaosView">
   
    <HomePalaos/>
    <GalleryPalaos/>
    <AboutPalaos/>
    <CommitmentPalaos/>



    </div>
    </>
  );
};


export default Palaos

