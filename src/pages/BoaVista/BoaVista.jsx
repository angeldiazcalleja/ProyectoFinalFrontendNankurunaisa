import HomeBoaVista from "./BoaVistaComponents/HomeBoaVista/HomeBoaVista";
import "./BoaVista.css"
import BoaVistaInfo from "./BoaVistaComponents/BoaVistaInfo/BoaVistaInfo";
import GalleryBoaVista from "./BoaVistaComponents/GalleryBoaVista/GalleryBoaVista";
import AboutBoaVista from "./BoaVistaComponents/AboutBoaVista/AboutBoaVista";
import LocationBoaVista from "./BoaVistaComponents/LocationBoaVista/LocationBoaVista";
import CommitmentBoaVista from "./BoaVistaComponents/StoriesBoaVista/CommitmentBoaVista";
import CarouselBoaVista from "./BoaVistaComponents/CarouselBoaVista/CarouselBoaVista";

export const BoaVista = () => {
    return (
      <>
      <div className="boaVistaView">
     
     <HomeBoaVista/>
     <BoaVistaInfo/>
     <AboutBoaVista/>
     <LocationBoaVista/>
     <GalleryBoaVista/>
     <CommitmentBoaVista/>
     <CarouselBoaVista/>

     
  
  
      </div>
      </>
    );
  };
  
  
  export default BoaVista
  