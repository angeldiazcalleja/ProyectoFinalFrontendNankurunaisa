/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { getAllUsers } from "../../services/apiCalls";
import { userData } from "../userSlice";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faForward } from "@fortawesome/free-solid-svg-icons";
import "./Admin.css";

const Admin = () => {
  const user = useSelector(userData);
  const adminToken = user.token;

  const [allUsers, setAllUsers] = useState([]);
  const [filteredUsers, setFilteredUsers] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [searchRole, setSearchRole] = useState("");
  const [sortOrder, setSortOrder] = useState("ASC");
  const [searchName, setSearchName] = useState(""); 

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const usersData = await getAllUsers(adminToken, currentPage);
        setAllUsers(usersData);
        setFilteredUsers(usersData);
      } catch (error) {
        console.error("Error fetching users:", error);
      }
    };

    fetchUsers();
  }, [adminToken, currentPage]);

  const applyFiltersAndSort = () => {
    const filteredAndSortedUsers = allUsers.filter((user) => {
      if (searchRole && user.role.toLowerCase() !== searchRole.toLowerCase()) {
        return false;
      }

      if (searchName && !user.name.toLowerCase().includes(searchName.toLowerCase())) {
        return false;
      }

      return true;
    });

    if (sortOrder === "ASC") {
      filteredAndSortedUsers.sort((a, b) => a.name.localeCompare(b.name));
    } else if (sortOrder === "DSC") {
      filteredAndSortedUsers.sort((a, b) => b.name.localeCompare(a.name));
    }

    setFilteredUsers(filteredAndSortedUsers);
  };

  useEffect(() => {
    applyFiltersAndSort();
  }, [searchRole, sortOrder, currentPage, searchName]);

  return (
    <>
      <div className="home-containerAdmin"> </div>
      <div className="titlePageAdmin">
        <p className="textPageAdmin">Every Effort Has Its Rewards</p>
      </div>
      <div className="adminContainer">
        <h2 className="titleAdmin"> || User List ||</h2>
        <div className="searchControls">
          <select
            className="selectUsers"
            value={searchRole}
            onChange={(e) => setSearchRole(e.target.value)}
          >
             <option className="textSelectuser" value="">
            All Roles
          </option>
          <option className="textSelectuser" value="customer">
            Customer
          </option>
          <option className="textSelectuser" value="personalAssistant">
            Personal Assistant
          </option>
          <option className="textSelectuser" value="admin">
            Admin
          </option>
          </select>
          <input
            type="text"
            className="inputSearchName"
            placeholder="Search by name"
            value={searchName}
            onChange={(e) => setSearchName(e.target.value)}
          />
          <select
            className="selectUsers1"
            value={sortOrder}
            onChange={(e) => setSortOrder(e.target.value)}
          >
             <option value="ASC">Ascending</option>
          <option value="DSC">Descending</option>
        </select>
        </div>

        <table className="userTable">
          <thead className="theadAdmin">
            <tr className="theadAdmin">
              <th>Name</th>
              <th>Email</th>
              <th>Role</th>
              <th>Phone</th>
            </tr>
          </thead>
          <tbody>
            {filteredUsers.map((user) => (
              <tr key={user._id}>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>{user.role}</td>
                <td>{user.phone}</td>
              </tr>
            ))}
          </tbody>
        </table>

        <button
          className="buttonPage"
          onClick={() => setCurrentPage(currentPage - 1)}
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
          className="buttonPage1"
          onClick={() => setCurrentPage(currentPage + 1)}
        >
          <FontAwesomeIcon icon={faForward} style={{ color: "white" }} />
        </button>
      </div>
    </>
  );
};

export default Admin;
