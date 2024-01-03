import HomeBoaVista from "./BoaVistaComponents/HomeBoaVista/HomeBoaVista";
import "./BoaVista.css"
import BoaVistaInfo from "./BoaVistaComponents/BoaVistaInfo/BoaVistaInfo";
import GalleryBoaVista from "./BoaVistaComponents/GalleryBoaVista/GalleryBoaVista";
import AboutBoaVista from "./BoaVistaComponents/AboutBoaVista/AboutBoaVista";
import LocationBoaVista from "./BoaVistaComponents/LocationBoaVista/LocationBoaVista";
import CommitmentBoaVista from "./BoaVistaComponents/StoriesBoaVista/CommitmentBoaVista";
import CarouselBoaVista from "./BoaVistaComponents/CarouselBoaVista/CarouselBoaVista";
import ActivitiesBoaVista from "./BoaVistaComponents/ActivitiesBoaVista/ActivitiesBoaVista";

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
     <ActivitiesBoaVista/>

     
  
  
      </div>
      </>
    );
  };
  
  
  export default BoaVista
  