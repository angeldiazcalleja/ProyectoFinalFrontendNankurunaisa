// import { Header } from "../../common/Header/Header";
import { Home } from "../Home/Home";
import "./MainView.css";

export const MainView = () => {
  return (
    <div className="principalView">
      {/* <Header showHeader={true} /> */}

      <div id="home">
        <Home />
      </div>
    </div>
  );
};
