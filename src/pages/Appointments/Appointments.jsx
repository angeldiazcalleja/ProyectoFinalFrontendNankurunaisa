/* eslint-disable no-unused-vars */
/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import {
  getAppointments,
  deleteAppointment,
  modifyAppointment,
  restoreDeletedAppointment,
} from "../../services/apiCalls.js";
import { useSelector } from "react-redux";
import { userData } from "../../pages/userSlice.js";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash, faEdit } from "@fortawesome/free-solid-svg-icons";
import { faUndo } from "@fortawesome/free-solid-svg-icons";
import AppointmentModal from "./Components/AppointmentModal.jsx";
import Pagination from "../Pagination/Pagination.jsx";
import "./Appointments.css";

export const Appointments = () => {
  const { token } = useSelector(userData);
  const [modalOpen, setModalOpen] = useState(false);
  const [allMyAppointments, setAllMyAppointments] = useState([]);
  const [selectedAppointment, setSelectedAppointment] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [totalAppointments, setTotalAppointments] = useState(0);

  const handleOpenModal = () => setModalOpen(true);
  const handleCloseModal = () => {
    setModalOpen(false);
    handleAppointmentList();
  };

  const handleAppointmentList = async (newPage = 1) => {
    try {
      const appointments = await getAppointments(token, newPage);
      setAllMyAppointments(appointments.appointments);
      setCurrentPage(newPage);
      setTotalAppointments(appointments.totalAppointments);
      setTotalPages(Math.ceil(appointments.totalAppointments / 10));
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    handleAppointmentList();
  }, []);

  const handleEdit = (appointmentId) => {
    setSelectedAppointment(appointmentId);
    handleOpenModal();
  };

  const handleDelete = async (appointmentId) => {
    if (
      !allMyAppointments.find(
        (appointment) => appointment._id === appointmentId
      )?.isDeleted
    ) {
      try {
        markAsDeletedLocally(appointmentId);
        await deleteAppointment(token, appointmentId);
        handleAppointmentList();
      } catch (error) {
        console.log(error);
      }
    }
  };

  const markAsDeletedLocally = (appointmentId) => {
    setAllMyAppointments((prevAppointments) =>
      prevAppointments.map((appointment) =>
        appointment._id === appointmentId
          ? { ...appointment, isDeleted: true }
          : appointment
      )
    );
  };

  const handleRestore = async (appointmentId) => {
    console.log('Restore button clicked for ID:', appointmentId);
    try {
      const appointmentToRestore = allMyAppointments.find(
        (appointment) => appointment._id === appointmentId
      );
  
      if (appointmentToRestore && appointmentToRestore.isDeleted) {
        await restoreDeletedAppointment(token, appointmentId);
        markAsRestoredLocally(appointmentId);
      }
    } catch (error) {
      console.log(error);
    }
  };
  

  const markAsRestoredLocally = (appointmentId) => {
    setAllMyAppointments((prevAppointments) =>
      prevAppointments.map((appointment) =>
        appointment._id === appointmentId && appointment.isDeleted
          ? { ...appointment, isDeleted: false }
          : appointment
      )
    );
  };
  const handleSaveChanges = async (appointmentId) => {
    const hasConflicts = checkForConflicts(appointmentId);

    if (hasConflicts) {
      console.error("Appointment conflicts with existing appointments.");
      return;
    }

    try {
      modifyAppointment(token, appointmentId)
        .then(() => handleCloseModal())
        .catch((error) => console.log(error));
      handleAppointmentList();
    } catch (error) {
      console.log(error);
    }
  };

  const checkForConflicts = (appointmentId) => {
    const editedAppointment = allMyAppointments.find(
      (appointment) => appointment._id === appointmentId
    );

    if (!editedAppointment) {
      return false;
    }

    const { date, startTime, endTime } = editedAppointment;

    const hasConflicts = allMyAppointments.some((existingAppointment) => {
      if (existingAppointment._id === appointmentId) {
        return false;
      }

      const existingStartTime = new Date(existingAppointment.startTime);
      const existingEndTime = new Date(existingAppointment.endTime);
      const newStartTime = new Date(startTime);
      const newEndTime = new Date(endTime);

      return (
        existingAppointment.date === date &&
        ((newStartTime >= existingStartTime &&
          newStartTime < existingEndTime) ||
          (newEndTime > existingStartTime && newEndTime <= existingEndTime) ||
          (newStartTime <= existingStartTime && newEndTime >= existingEndTime))
      );
    });

    return hasConflicts;
  };

  const handlePageChange = (newPage) => {
    handleAppointmentList(newPage);
  };

  return (
    <div className="appointmentContainer">
      <AppointmentModal
        open={modalOpen}
        handleClose={handleCloseModal}
        appointment={selectedAppointment}
        handleSaveChanges={handleSaveChanges}
      />
      {allMyAppointments ? (
        <div className="tableContainer">
          <table>
            <thead>
              <tr>
                <th>ID</th>
                <th>Customer</th>
                <th>PersonalAssistant</th>
                <th>Date</th>
                <th>Star Time</th>
                <th>End Time</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {allMyAppointments.map((e) => (
                <tr
                  key={e._id}
                  className={e.isDeleted ? "deletedRow" : ""}
                >
                  <td>{e._id}</td>
                  <td>{e.nameCustomer}</td>
                  <td>{e.namePersonalAssistant}</td>
                  <td>{e.date}</td>
                  <td>{e.startTime}</td>
                  <td>{e.endTime}</td>
                  <td>
                    <FontAwesomeIcon
                      icon={faEdit}
                      onClick={() => handleEdit(e)}
                      className={`action-iconEdit ${e.isDeleted ? "disabled" : ""}`}
                    />
                    <FontAwesomeIcon
                      icon={faTrash}
                      onClick={() => handleDelete(e._id)}
                      className={`action-iconDelete ${e.isDeleted ? "disabled" : ""}`}
                    />
                    <FontAwesomeIcon
                      icon={faUndo}
                      onClick={() => handleRestore(e._id)}
                      className={`action-iconRestore restore-icon ${
                        e.isDeleted ? "" : "disabled"
                      }`}
                    />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={handlePageChange}
          />
        </div>
      ) : (
        <p>There are no appointments available</p>
      )}
    </div>
  );
};

export default Appointments;
