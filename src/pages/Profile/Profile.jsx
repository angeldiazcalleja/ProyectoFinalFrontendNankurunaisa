import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { updateUserProfile } from "../../services/apiCalls";
import "./Profile.css";
import Inputs from "../../common/Input/Input";
import Appointments from "../Appointments/Appointments";

export const Profile = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((state) => state.user);
  const [editMode, setEditMode] = useState(false);
  const [currentPage, setCurrentPage] = useState("Profile");
  const { name, email, phone, role } = user.credentials;
  const [editedName, setEditedName] = useState(name);
  const [editedEmail, setEditedEmail] = useState(email);
  const [editedPhone, setEditedPhone] = useState(phone);
  const isAdmin = role === 'admin';




  useEffect(() => {
    setEditedName(name);
    setEditedEmail(email);
    setEditedPhone(phone);
  }, [name, email, phone, editMode]);

  const handleMenuItemClick = (menuItem) => {
    setCurrentPage(menuItem);
    navigate(`/profile/${menuItem.toLowerCase()}`);
  };

  const handleEditProfile = () => {
    setEditMode(!editMode);
  };

  const handleSaveChanges = async () => {
    try {
      console.log("Token:", user.token);

      await updateUserProfile(
        user.token,
        {
          name: editedName,
          email: editedEmail,
          phone: editedPhone,
        },
        user._id
      );

      dispatch(
        updateUserProfile({
          name: editedName,
          email: editedEmail,
          phone: editedPhone,
        })
      );

      setEditMode(false);
      navigate("/profile");
    } catch (error) {
      console.error("Error updating profile:", error.response.data);
    }
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

  const renderEditProfileForm = () => (
    <>
      <div className="infoChangeProfile">
        <p>Your Login email cant be changed</p>
        <p>Contact us for that modification</p>
      </div>
      <form className="inputContainer">
        <Inputs
          text="Name"
          type="text"
          name="name"
          value={editedName}
          handler={(e) => setEditedName(e.target.value)}
        />
        <Inputs
          text="Email"
          type="email"
          name="email"
          value={editedEmail}
          handler={(e) => setEditedEmail(e.target.value)}
          isDisabled={true}
        />
        <Inputs
          text="Phone"
          type="text"
          name="phone"
          value={editedPhone}
          handler={(e) => setEditedPhone(e.target.value)}
        />
      </form>
      <button
        className="buttonSaveChanges"
        type="button"
        onClick={handleSaveChanges}
      >
        Save Changes
      </button>
    </>
  );

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
              <button className="buttonEditProfile" onClick={handleEditProfile}>
                {editMode ? "Cancel" : "Edit Profile"}
              </button>
            </div>
            <div className="informationEditProfile">
              {editMode
                ? "Update your personal info"
                : "Your personal information"}
            </div>
            <div className="lineProfile"></div>
            {editMode ? renderEditProfileForm() : renderProfileInfo()}
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
