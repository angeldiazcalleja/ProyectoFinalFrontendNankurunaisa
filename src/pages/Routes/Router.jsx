import { Navigate, Route, Routes } from "react-router-dom";
import { MainView } from "../Main/MainView";
import { Palaos } from "../Palaos/Palaos";
import { Login } from "../Login/Login";
import Footer from "../../common/Footer/Footer";



export const Router = () => {


  return (
    <>
      <Routes>
      {location.pathname !== '/login' && <Footer/>} 
        <Route
          path="*"
          element={
            <>
              <Navigate to="/" />
            </>
          }
        />
        <Route
          path="/"
          element={
            <>
              <MainView />
            </>
          }
        />
          <Route
          path="/palaos"
          element={
            <>
              <Palaos />
            </>
          }
        />
        <Route
          path="/login"
          element={
            <>
             
              <Login />
              <Footer showFooter={false} />
            </>
          }
        />
       

      </Routes>
    </>
  );
};
