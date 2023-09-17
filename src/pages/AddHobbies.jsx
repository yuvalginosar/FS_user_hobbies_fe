import React, { useEffect, useState } from 'react';
import { Form, Button, Dropdown, Container } from 'react-bootstrap';
import {getUsers, addUserHobbies} from "../services/server";
import { useNavigate } from "react-router-dom";


function AddUserHobbies() {
  const [users, setUsers] = useState([]);
  const [selectedUser, setSelectedUser] = useState(null); 
  const [hobby, setHobby] = useState('');

  const navigate = useNavigate();

  useEffect(() => {
    async function fetchUsers() {
      try {
        const usersList = await getUsers();
        setUsers(usersList);
      } catch (error) {
        // setError('Error fetching users: ' + error.message);
      }
    }

    fetchUsers();
  }, []);

  const handleUserSelect = (user) => {
    setSelectedUser(user);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (selectedUser) {
        const data = {
          userId: selectedUser.id,
          hobby: hobby,
        };

        const response = await addUserHobbies(data);

        console.log('Hobby added successfully');

        setSelectedUser(null);
        setHobby('');
        navigate('/app')

      } else {
        console.error('Please select a user.'); 
      }
    } catch (error) {
      // setError('Error adding hobby: ' + error.message);
    }
  };

  return (
    <Container className="p-container">
      <h4 className="my-3">Add user's hobbies</h4>
      <Form onSubmit={handleSubmit}>
        <Form.Group>
          <Form.Label>Select User</Form.Label>
          <Dropdown>
            <Dropdown.Toggle variant="success" id="user-dropdown">
              {selectedUser ? selectedUser.first_name : 'Select a User'}
            </Dropdown.Toggle>
            <Dropdown.Menu>
              {users?.map((user) => (
                <Dropdown.Item
                  key={user.id}
                  onClick={() => handleUserSelect(user)} 
                >
                  {user.first_name}
                </Dropdown.Item>
              ))}
            </Dropdown.Menu>
          </Dropdown>
        </Form.Group>

        <Form.Group className="my-3">
          <Form.Label>Add Hobby</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter hobby"
            value={hobby}
            onChange={(e) => setHobby(e.target.value)}
          />
        </Form.Group>
        <Button variant="primary" type="submit">
          Add Hobby
        </Button>
      </Form>
    </Container>
  );
}

export default AddUserHobbies;
