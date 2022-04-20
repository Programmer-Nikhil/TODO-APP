import React, { useState } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addUser } from "../redux/actions";

const AddUser = () => {
  let navigate = useNavigate();
  let dispatch = useDispatch();
  const [user, setUser] = useState({
    name: "",
    email: "",
    address: "",
    country: "",
  });

  const [error, setError] = useState("");

  const { name, address, email, country } = user;

  const handleInputChange = (e) => {
    let { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !address || !country || !email) {
      setError("Please enter all the details");
    } else {
      dispatch(addUser(user));
      navigate("/");
      setError("");
    }
  };

  return (
    <div>
      <Button
        variant="contained"
        color="secondary"
        style={{ width: "100px", marginTop: "20px" }}
        type="button"
        onClick={() => navigate("/")}
      >
        Go Back
      </Button>
      <h2>Add User</h2>
      {error && (
        <>
          <h4 style={{ color: "red" }}>{error}</h4>
        </>
      )}
      <Box
        component="form"
        sx={{
          "& .MuiTextField-root": { m: 1, width: "25ch" },
        }}
        noValidate
        autoComplete="off"
        onSubmit={handleSubmit}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            padding: 10,
          }}
        >
          <TextField
            id="standard-Name-input"
            label="Name"
            placeholder="Name"
            type="text"
            variant="standard"
            value={name}
            name="name"
            onChange={handleInputChange}
          />
          <TextField
            id="standard-address-input"
            label="Address"
            placeholder="Address"
            type="text"
            name="address"
            variant="standard"
            value={address}
            onChange={handleInputChange}
          />
          <TextField
            id="standard-email-input"
            label="Email"
            type="email"
            variant="standard"
            value={email}
            name="email"
            onChange={handleInputChange}
          />
          <TextField
            id="standard-country-input"
            label="Country"
            type="text"
            variant="standard"
            name="country"
            value={country}
            onChange={handleInputChange}
          />
          <br />
          <Button
            variant="contained"
            color="primary"
            style={{ width: "100px" }}
            type="submit"
          >
            Submit
          </Button>
        </div>
      </Box>
    </div>
  );
};

export default AddUser;
