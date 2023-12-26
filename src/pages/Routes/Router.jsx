import { Navigate, Route, Routes } from "react-router-dom";
import { MainView } from "../Main/MainView";
import { Palaos } from "../Palaos/Palaos";
import { Login } from "../Login/Login";
import Footer from "../../common/Footer/Footer";
import { RegisterUser } from "../Register/Register";
import Header from "../../common/Header/Header";


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
              {/* <Footer showFooter={true} /> */}
              <Palaos />
            </>
          }
        />

        <Route
          path="/login"
          element={
            <>
              <Header />
              <Login />
              <Footer showFooter={false} />
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
