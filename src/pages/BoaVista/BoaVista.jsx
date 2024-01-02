import HomeBoaVista from "./BoaVistaComponents/HomeBoaVista/HomeBoaVista";
import "./BoaVista.css"
import BoaVistaInfo from "./BoaVistaComponents/BoaVistaInfo/BoaVistaInfo";

export const BoaVista = () => {
    return (
      <>
      <div className="boaVistaView">
     
     <HomeBoaVista/>
     <BoaVistaInfo/>
  
  
      </div>
      </>
    );
  };
  
  
  export default BoaVista
  