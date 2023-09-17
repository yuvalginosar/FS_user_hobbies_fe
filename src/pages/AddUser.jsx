import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button, Form, Container, Spinner } from "react-bootstrap";
import {addNewUser} from "../services/server";


function AddUser(){
    const navigate = useNavigate();
    const [isLoading, setIsLoading] = useState(false);

    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [address, setAddress] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");

    async function onAddUser(){
        setIsLoading(true)
        const userDetails = {
            // id, 
            firstName, lastName, address, phoneNumber
        };
        try {
            const response = await addNewUser(userDetails)
            setIsLoading(false)
            setFirstName("")
            setLastName("")
            setAddress("")
            setPhoneNumber("")
            navigate('/app')
        } catch (error) {
            
        }
    }
    return (
        <Container className="p-container">
          <h4 className="my-3 headline">Add new user</h4>
          <Form className="c-form">
            
           

            <Form.Group className="my-3" controlId="formBasicEmail">
              <Form.Label>First Name</Form.Label>
              <Form.Control
                type="text"
                required={true}
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
              />
            </Form.Group>

            <Form.Group className="my-3" controlId="formBasicEmail">
              <Form.Label>Last Name</Form.Label>
              <Form.Control
                type="text"
                required={true}
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
              />
            </Form.Group>

            <Form.Group className="my-3" controlId="formBasicEmail">
              <Form.Label>Address</Form.Label>
              <Form.Control
                type="text"
                required={true}
                value={address}
                onChange={(e) => setAddress(e.target.value)}
              />
            </Form.Group>

            <Form.Group className="my-3" controlId="formBasicEmail">
              <Form.Label>Phone Number</Form.Label>
              <Form.Control
                type="number"
                required={true}
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
              />
            </Form.Group>
    
    
            <Button
              className="my-3"
              variant="outline-secondary"
              onClick={onAddUser}
              style={{ width: "100%", hover: "pointer" }}
            >
              {isLoading && (
                <Spinner
                  as="span"
                  animation="grow"
                  size="sm"
                  role="status"
                  aria-hidden="true"
                />
              )}
              Add {firstName} {lastName}
            </Button>
          </Form>
        </Container>
      );
    }
    
    export default AddUser;