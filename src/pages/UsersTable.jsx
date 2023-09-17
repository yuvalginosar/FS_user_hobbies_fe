import React, { useEffect, useState } from "react";
import { Button, Container, ListGroup, Table } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { getUsersWithHobbies, deleteUser } from "../services/server.js";
import { Trash3, PersonFillAdd } from "react-bootstrap-icons";
function UsersTable(props) {
  const navigate = useNavigate();
  const [users, setUsers] = useState([]);

  useEffect(() => {
    async function fetchUsers() {
      try {
        const usersList = await getUsersWithHobbies();
        setUsers(usersList);
      } catch (error) {
        // setError('Error fetching users: ' + error.message);
      }
    }

    fetchUsers();
  }, []);

  const handleDeleteUser = (user) => {
    deleteUser(user.id);
    setUsers((prevUsers) => prevUsers.filter((u) => u.id !== user.id));
  };

  const btnStyle = {
    backgroundColor: "white",
    color: "black",
  };

  function renderUserTable() {
    return (
      <div>
        <Table striped hover>
          <thead>
            <tr>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Address</th>
              <th>Phone Number</th>
              <th>Hobbies</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {users?.map((user) => (
              <tr key={user.id}>
                <td> {user.first_name}</td>
                <td> {user.last_name}</td>
                <td> {user.address}</td>
                <td> {user.phone_number}</td>
                <td> {user.hobbies.join(", ")}</td>
                <td>
                  <Trash3
                    onClick={() => handleDeleteUser(user)}
                    style={{ cursor: "pointer" }}
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </Table>

        <Button
          className="my-2 mx-2"
          style={btnStyle}
          onClick={() => navigate("/app/add-user")}
        >
          add User <PersonFillAdd />
        </Button>

        <Button
          className="my-2"
          style={btnStyle}
          onClick={() => navigate("/app/add-hobby")}
        >
          add hobby <PersonFillAdd />
        </Button>
      </div>
    );
  }
  return (
    <Container>
      <h4>Users Index</h4>
      {renderUserTable()}
    </Container>
  );
}

export default UsersTable;
