import { useState, useEffect } from 'react';
import { useSelector } from "react-redux";
import { userData } from "../userSlice";
import { getBookings } from '../../services/apiCalls'; 
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
    <div className="bookingsContainer">
      <h2>Booking List</h2>
      <div className="filterControls">
      </div>
      <table>
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
              <td>{booking.destinationsId}</td>
              <td>{booking.information}</td>
              <td>{booking.pay}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="paginationControls">
        <button onClick={() => setCurrentPage((prevPage) => Math.max(prevPage - 1, 1))} disabled={currentPage === 1}>
          Previous Page
        </button>
        <span>Page {currentPage} of {totalPages}</span>
        <button onClick={() => setCurrentPage((prevPage) => Math.min(prevPage + 1, totalPages))} disabled={currentPage === totalPages}>
          Next Page
        </button>
      </div>
    </div>
  );
};

export default Bookings;
