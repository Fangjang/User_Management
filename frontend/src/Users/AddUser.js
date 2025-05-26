import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function AddUser() {

  let navigate = useNavigate();

  const [user, setUsers] = useState({
    name: "",
    username: "",
    email: "",
  });

  const { name, userName, email } = user;

  const onInputChange = (e) => {
    setUsers({ ...user, [e.target.name]: e.target.value });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    await axios.post("http://localhost:8080/user", user);
    navigate("/");
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
          <h2 className="text-center m-4">Register User</h2>
          <form onSubmit={(e) => onSubmit(e)}>
            <div className="mb-3">
              <label htmlFor="Name" className="form-label">
                Name
              </label>
              <input
                type={"text"}
                className="form-control"
                placeholder="Enter a Name"
                name="name"
                value={name}
                onChange={(e) => onInputChange(e)}
              />
            </div>

            <div className="mb-3">
              <label htmlFor="username" className="form-label">
                User Name
              </label>
              <input
                type={"text"}
                className="form-control"
                placeholder="Enter a User Name"
                name="userName"
                value={userName}
                onChange={(e) => onInputChange(e)}
              />
            </div>

            <div className="mb-3">
              <label htmlFor="email" className="form-label">
                Name
              </label>
              <input
                type={"text"}
                className="form-control"
                placeholder="Enter email"
                name="email"
                value={email}
                onChange={(e) => onInputChange(e)}
              />
            </div>

            <button type={"submit"} className="btn btn-outline-primary">
              Submit
            </button>
            <Link to="/" className="btn btn-outline-danger ms-3">
              Cancel
            </Link>
          </form>
        </div>
      </div>
    </div>
  );
}
