import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import "./Profile.css";

import Appointments from "../Appointments/Appointments";

export const Profile = () => {
  const navigate = useNavigate();
  const user = useSelector((state) => state.user);
  const [currentPage, setCurrentPage] = useState("Profile");
  const { name, email, phone, role } = user.credentials;
  const isAdmin = role === 'admin';

  useEffect(() => {
  }, [name, email, phone]);

  const handleMenuItemClick = (menuItem) => {
    setCurrentPage(menuItem);
    navigate(`/profile/${menuItem.toLowerCase()}`);
  };

  const renderProfileInfo = () => {
    if (currentPage === "Profile") {
      return (
        <>
          <div className="inputContainer0">
            <div>
              <label className="labelProfile">Name</label>
              <p className="infoProfile">{name}</p>
            </div>
            <div>
              <label className="labelProfile">Role</label>
              <p className="infoProfile">{role}</p>
            </div>
          </div>
          <div className="inputContainer1">
            <div>
              <label className="labelProfile">Email</label>
              <p className="infoProfile">{email}</p>
            </div>
            <div>
              <label className="labelProfile">Phone</label>
              <p className="infoProfile">{phone}</p>
            </div>
          </div>
        </>
      );
    }
  };

  return (
    <div className="profileViewContainer">
      <div className="profileView">
        <div className="profileContainer">
          <div className="profileSidebar">
            <div
              className={`sidebarItem ${currentPage === "Profile" && "active"}`}
              onClick={() => handleMenuItemClick("Profile")}
            >
              <p className="sidebarText">|| Profile ||</p>
            </div>
          </div>
          <div className="profileContent">
            <div className="profileHeader">
              <p className="titleProfile">My Account</p>
            </div>
            <div className="informationEditProfile">
              {"Your personal information"}
            </div>
            <div className="lineProfile"></div>
            {renderProfileInfo()}
          </div>
        </div>
      </div>
      <div className="profileAppointments">
        {!isAdmin && <Appointments />}
      </div>
    </div>
  );
};

export default Profile;
