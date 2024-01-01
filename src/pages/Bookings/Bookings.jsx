import { useState, useEffect } from 'react';
import { useSelector } from "react-redux";
import { userData } from "../userSlice";
import { getBookings } from '../../services/apiCalls'; 
import Img1 from "../../assets/Img1.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faForward } from "@fortawesome/free-solid-svg-icons";
import './Bookings.css';

export const Bookings = () => {
    const user = useSelector(userData);
    const adminToken = user.token;
  
    const [bookings, setBookings] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);
  
    useEffect(() => {
      const fetchBookings = async () => {
        try {
          const response = await getBookings(adminToken, currentPage);
          setBookings(response.bookings);
          setTotalPages(Math.ceil(response.total / 10));
        } catch (error) {
          console.error('Error fetching bookings:', error);
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
  