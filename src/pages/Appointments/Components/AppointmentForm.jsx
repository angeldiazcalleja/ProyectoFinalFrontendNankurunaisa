/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */

import { jwtDecode } from "jwt-decode";
import { createAppointment } from "../../../services/apiCalls.js";
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
  const handleCreateAppointment = async () => {
    const customerId =
      isAdmin === "admin" ? formData.customerId : decodeToken._id;
    const newAppointment = { ...formData, customerId };

    try {
      await createAppointment(newAppointment, token);
    } catch (error) {
      console.error("Error al crear la cita:", error);
    }
  };

  return (
    <>
      <div className="formDate">
        <div className="lineForm"></div>
        <div className="formRow">
          <div className="formColumn">
            {decodeToken.role === "admin" ? (
              <>
                <label className="labelForm" htmlFor="customer">
                  Name Customer
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
              </>
            ) : (
              <div style={{ marginBottom: "20px" }}>
                <label className="labelForm" htmlFor="customerId">
                  Name Customer
                </label>
                <input
                  className="inputForm"
                  type="text"
                  id="customerId"
                  name="customerId"
                  value={decodeToken.name}
                  onChange={handleInputChange}
                  readOnly
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
              Personal Assistant
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
        <button className="buttonForm" onClick={handleCreateAppointment}>
          {appointment ? "Save Changes" : "Send"}
        </button>
      </div>
    </>
  );
};

export default AppointmentForm;
