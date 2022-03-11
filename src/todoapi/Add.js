import axios from "axios";
import React, { useState } from "react";
import { useHistory } from "react-router-dom";

const Add = () => {
  const history = useHistory();
  const [user, setUser] = useState({
    name: "",
    username: "",
    email: "",
  });

  const { name, username, email } = user;

  const onInputChange = (e) => {
    setUser({ ...user, [e.target.name]: [e.target.value] });
  };
  const onSubmit = async (e) => {
    e.preventDefault();
    await axios.post("http://localhost:3003/users", user);
    history.push("/");
  };
  return (
    <>
      <div className="container">
        <h1>Add user</h1>
        <form onSubmit={(e) => onSubmit(e)}>
          <div class="form-group m-3">
            <input
              type="text"
              name="name"
              value={name}
              onChange={(e) => onInputChange(e)}
              className="form-control"
              placeholder="Enter Name"
            />
          </div>
          <div className="form-group m-3">
            <input
              type="text"
              className="form-control"
              name="username"
              value={username}
              onChange={(e) => onInputChange(e)}
              placeholder="Enter userName"
            />
          </div>
          <div class="form-group m-3">
            <input
              type="email"
              className="form-control"
              name="email"
              value={email}
              onChange={(e) => onInputChange(e)}
              placeholder="Enter email"
            />
          </div>

          <button type="submit" className="m-3 btn btn-primary">
            Submit
          </button>
        </form>
      </div>
    </>
  );
};

export default Add;
