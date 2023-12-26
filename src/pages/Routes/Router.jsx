import { Navigate, Route, Routes } from "react-router-dom";
import { MainView } from "../Main/MainView";
import { Palaos } from "../Palaos/Palaos";
import { Login } from "../Login/Login";
import Footer from "../../common/Footer/Footer";
import { RegisterUser } from "../Register/Register";



export const Router = () => {


  return (
    <>
      <Routes>
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
              <Footer showFooter={true} />
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
               <Footer showFooter={false} />
              <Login />
           
            </>
          }
        />
         <Route
          path="/register"
          element={
            <>
            <Footer showFooter={false} />
              <RegisterUser />
              
              
            </>
          }
        />
       

      </Routes>
    </>
  );
};
