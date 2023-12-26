import "./Palaos.css";
import { AboutPalaos } from "./PalaosComponents/AboutPalaos/AboutPalaos";
import GalleryPalaos from "./PalaosComponents/GalleryPalaos/GalleryPalaos";
import HomePalaos from "./PalaosComponents/HomePalaos/HomePalaos";

export const Palaos = () => {
  return (
    <>
    <div className="palaosView">
   
    <HomePalaos/>
    <GalleryPalaos/>
    <AboutPalaos/>



    </div>
    </>
  );
};


export default Palaos

