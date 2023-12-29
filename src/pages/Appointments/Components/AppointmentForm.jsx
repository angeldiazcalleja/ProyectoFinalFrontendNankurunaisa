/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */

import { jwtDecode } from "jwt-decode";
import "./AppointmentForm.css";

export const AppointmentForm = ({
  formData,
  setFormData,
  token,
  handleSaveChanges,
  appointment,
}) => {
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const decodeToken = jwtDecode(token);
  const isAdmin = token.role;

  return (
    <>
      <div className="formDate">
        <div className="lineForm"></div>
        <div className="formRow">
          <div className="formColumn">
            {isAdmin === "admin" ? (
              <>
                <label className="labelForm" htmlFor="customer">
                  Customer
                </label>
                <select
                  className="inputForm"
                  id="customerId"
                  name="customerId"
                  value={formData.customerId}
                  onChange={handleInputChange}
                >
                </select>
              </>
            ) : (
          
              <div style={{ marginBottom: "20px" }}>
                <label className="labelForm" htmlFor="customerId">
                  Id customer
                </label>
                <input
                  className="inputForm"
                  type="text"
                  id="customerId"
                  name="customerId"
                  value={decodeToken.customerId}
                  onChange={handleInputChange}
                  required
                />
              </div>
            )}
          </div>

          <div className="formColumn">
            <label className="labelForm" htmlFor="date">
              Date
            </label>
            <input
              className="inputForm"
              type="date"
              id="date"
              name="date"
              value={formData.date}
              onChange={handleInputChange}
              required
            />
          </div>
        </div>

        <div className="formRow">
          <div className="formColumn">
            <label className="labelForm" htmlFor="startTime">
              Start Time
            </label>
            <input
              className="inputForm"
              type="datetime-local"
              id="startTime"
              name="startTime"
              value={formData.startTime}
              onChange={handleInputChange}
              required
            />
          </div>

          <div className="formColumn">
            <label className="labelForm" htmlFor="endTime">
              End Time
            </label>
            <input
              className="inputForm"
              type="datetime-local"
              id="endTime"
              name="endTime"
              value={formData.endTime}
              onChange={handleInputChange}
              required
            />
          </div>
        </div>

        <div className="formRow">
          <div className="formColumn">
            <label className="labelForm" htmlFor="tattooArtist">
              Artist
            </label>
            <select
              className="inputForm"
              id="personalAssistantId"
              name="personalAssistantId"
              value={formData.personalAssistantId}
              onChange={handleInputChange}
            >
              <option value="6586e3e8d76d914ddfe9e8d2">Sophia</option>
              <option value="6586e1fdd76d914ddfe9e8cc">Sandra</option>
              <option value="6586e439d76d914ddfe9e8d5">Ethan</option>
            </select>
          </div>
        </div>
        <button className="buttonForm" onClick={handleSaveChanges}>
          {appointment ? "Save Changes" : "Send"}
        </button>
      </div>
    </>
  );
};

export default AppointmentForm;
