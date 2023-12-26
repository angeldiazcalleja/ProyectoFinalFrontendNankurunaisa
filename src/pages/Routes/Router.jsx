import { Navigate, Route, Routes } from "react-router-dom";
import { MainView } from "../Main/MainView";
import { Palaos } from "../Palaos/Palaos";
import { Login } from "../Login/Login";
// import Header from "../../common/Header/Header";


export const Router = () => {
  return (
    <>
      <Routes>
        <Route
          path="*"
          element={
            <>
              {/* <Header showHeader={true} /> */}
              <Navigate to="/" />
            </>
          }
        />
        <Route
          path="/"
          element={
            <>
              {/* <Header showHeader={true} /> */}
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
            </>
          }
        />

      </Routes>
    </>
  );
};
