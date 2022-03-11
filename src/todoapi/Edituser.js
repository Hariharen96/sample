import axios from "axios";
import React, { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router-dom";

const Edituser = () => {
  const history = useHistory();
  const { id } = useParams();
  const [user, setUser] = useState({
    name: "",
    username: "",
    email: "",
  });

  const { name, username, email } = user;

  const onInputChange = (e) => {
    setUser({ ...user, [e.target.name]: [e.target.value] });
  };

  useEffect(() => {
    loaddata();
  }, []);

  const onSubmit = async (e) => {
    e.preventDefault();
    await axios.put(`http://localhost:3003/users/${id}`, user);
    history.push("/");
  };

  const loaddata = async () => {
    let result = await axios.get(`http://localhost:3003/users/${id}`);
    setUser(result.data);
  };

  return (
    <>
      <div className="container">
        <h1>Edit user</h1>
        <form onSubmit={(e) => onSubmit(e)}>
          <div className="form-group m-3">
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
          <div classname="form-group m-3">
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
            Edit
          </button>
        </form>
      </div>
    </>
  );
};

export default Edituser;
