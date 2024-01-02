/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useSelector, useDispatch } from "react-redux";
import { userData } from "../userSlice";
import { getBookings, createBooking } from "../../services/apiCalls";
import Img1 from "../../assets/Img1.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faForward } from "@fortawesome/free-solid-svg-icons";
import "./Bookings.css";
import { setBookings } from "../bookingSlice";

export const Bookings = () => {
  const user = useSelector(userData);
  const adminToken = user.token;
  const dispatch = useDispatch();

  const [bookings, setBookingsLocal] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [formData, setFormData] = useState({
    date: new Date(),
    customerId: "",
    destinationId: "",
    information: "",
    pay: "",
  });

  const handleInputChange = (e) => {
    if (e.target.name === "destinationId") {
      if (e.target.value.length === 24) {
        setFormData({ ...formData, [e.target.name]: e.target.value });
      }
    } else {
      setFormData({ ...formData, [e.target.name]: e.target.value });
    }
  };

  const handleDateChange = (date) => {
    setFormData({ ...formData, date });
  };

  const handleCreateBooking = async () => {
    try {
      const newBooking = await createBooking(formData, adminToken);
      setBookingsLocal([...bookings, newBooking]);
      setFormData({
        date: new Date(),
        customerId: "",
        destinationId: "",
        information: "",
        pay: "",
      });
      dispatch(setBookings([...bookings, newBooking]));
      console.log(
        "Bookings después de la actualización en handleCreateBooking:",
        bookings
      );
    } catch (error) {
      console.error("Error creating booking:", error);
    }
  };

  useEffect(() => {
    const fetchBookings = async () => {
      try {
        const response = await getBookings(adminToken, currentPage);
        console.log("Bookings obtenidos:", response.bookings);

        setBookingsLocal(response.bookings);
        console.log(
          "Bookings después de la actualización en useEffect:",
          bookings
        );

        setTotalPages(Math.ceil(response.total / 10));
      } catch (error) {
        console.error("Error fetching bookings:", error);
      }
    };

    fetchBookings();
  }, [adminToken, currentPage]);

  return (
    <>
      <div className="imgAdminMiddle">
        <img src={Img1} alt="Background" className="AboutImagePalaos" />
      </div>
      <div className="bookingsContainer">
        <p className="titleBookingsAdmin">|| Booking List ||</p>
        <div className="filterControls">
          <div className="lineFormBooking"></div>
          <div className="formRow">
            <div className="formColumn">
              <div className="inlineInputs">
              <div className="formColumn">
                <label className="labelForm" htmlFor="customerId">
                  CustomerId
                </label>
                <input
                  className="inputForm"
                  type="text"
                  name="customerId"
                  value={formData.customerId}
                  onChange={handleInputChange}
                  placeholder="Customer ID"
                />
                </div>
                 
                 <div className="formColumn">
                <label className="labelForm" htmlFor="destinationId">
                  DestinationId
                </label>
                
                <input
                  className="inputForm"
                  type="text"
                  name="destinationId"
                  value={formData.destinationId}
                  onChange={handleInputChange}
                  placeholder="Destination ID"
                />
                </div>
              </div>

              <div className="formColumn1">
                <label className="labelForm1" htmlFor="DatePicker">
                  Date
              </label>
              <DatePicker
                className="inputFormPicker"
                selected={formData.date}
                onChange={handleDateChange}
                dateFormat="dd/MM/yyyy"
              />
              </div>

              <div className="inlineInputs">
              <div className="formColumn">
                <label className="labelForm" htmlFor="DatePicker">
                  Information
              </label>
                <input
                  className="inputForm"
                  type="text"
                  name="information"
                  value={formData.information}
                  onChange={handleInputChange}
                  placeholder="Information"
                />
                </div>
                <div className="formColumn">
                <label className="labelForm" htmlFor="DatePicker">
                  Payment
              </label>
                <input
                  className="inputForm"
                  type="text"
                  name="pay"
                  value={formData.pay}
                  onChange={handleInputChange}
                  placeholder="Payment"
                />
                </div>
              </div>
              <button className="buttonForm" onClick={handleCreateBooking}>
                Create Booking
              </button>
            </div>
          </div>
        </div>

        <table className="tableContainer">
          <thead>
            <tr>
              <th>ID</th>
              <th>Date</th>
              <th>Customer ID</th>
              <th>Destination ID</th>
              <th>Information</th>
              <th>Payment</th>
            </tr>
          </thead>
          <tbody>
            {bookings.map((booking) => (
              <tr key={booking._id}>
                <td>{booking._id}</td>
                <td>{booking.date}</td>
                <td>{booking.customerId}</td>
                <td>{booking.destinationId}</td>
                <td>{booking.information}</td>
                <td>{booking.pay}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="paginationControls">
          <button
            className="buttonPageBooking"
            onClick={() =>
              setCurrentPage((prevPage) => Math.max(prevPage - 1, 1))
            }
            disabled={currentPage === 1}
          >
            <FontAwesomeIcon
              icon={faForward}
              rotation={180}
              style={{
                "--fa-primary-color": "#efb810",
                "--fa-secondary-color": "#efb810",
              }}
            />
          </button>
          <button
            className="buttonPageBooking1"
            onClick={() =>
              setCurrentPage((prevPage) => Math.min(prevPage + 1, totalPages))
            }
            disabled={currentPage === totalPages}
          >
            <FontAwesomeIcon icon={faForward} style={{ color: "white" }} />
          </button>
        </div>
      </div>
    </>
  );
};

export default Bookings;
