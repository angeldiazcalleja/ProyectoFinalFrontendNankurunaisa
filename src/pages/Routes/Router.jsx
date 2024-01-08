import { Navigate, Route, Routes } from "react-router-dom";
import { MainView } from "../Main/MainView";
import { Palaos } from "../Palaos/Palaos";
import { Login } from "../Login/Login";
import Footer from "../../common/Footer/Footer";
import { RegisterUser } from "../Register/Register";
import Header from "../../common/Header/Header";
import Profile from "../Profile/Profile";
import { DivePalaos } from "../Palaos/PalaosComponents/DivePalaos/DivePalaos";
import WellnessPalaosGallery from "../Palaos/PalaosComponents/WellnessPalaosGallery/WellnessPalaosGallery";
import Admin from "../Admin/Admin";
import Appointments from "../Appointments/Appointments";
import { PlanningPalaos } from "../Palaos/PalaosComponents/PlanningPalaos/PlanningPalaos";
import { BoaVista } from "../BoaVista/BoaVista";
import ActivitiesGalleryBoaVista from "../BoaVista/BoaVistaComponents/ActivitiesGalleryBoaVista/ActivitiesGalleryBoaVista";

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
          path="/activitiesboaVista"
          element={
            <>
              <ActivitiesGalleryBoaVista/>
            </>
          }
        />

        <Route
          path="/boavista"
          element={
            <>
              <BoaVista />
            </>
          }
        />
        <Route
          path="/appointments"
          element={
            <>
              <Appointments />
            </>
          }
        />

        <Route
          path="/divepalaos"
          element={
            <>
              <Footer showFooter={false} />
              <DivePalaos />
            </>
          }
        />
        <Route
          path="/planningpalaos"
          element={
            <>
              <Footer showFooter={false} />
              <PlanningPalaos />
            </>
          }
        />

        <Route
          path="/wellnesspalaosgallery"
          element={
            <>
              <Footer showFooter={false} />
              <WellnessPalaosGallery />
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
        <Route
          path="/admin"
          element={
            <>
              <Footer showFooter={false} />
              <Admin />
            </>
          }
        />
        <Route
          path="/profile"
          element={
            <>
              <Header />
              <Profile />
              <Footer showFooter={false} />
            </>
          }
        />
      </Routes>
    </>
  );
};
