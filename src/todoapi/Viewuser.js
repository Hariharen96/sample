import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Viewuser = (props) => {
  const data = props.location.state.view;
  const { id, name, username, email } = data;
  // const [user, setUser] = useState({
  //   name: "",
  //   username: "",
  //   email: "",
  // });

  // const { id } = useParams();

  // const loaddata = async () => {
  //   let result = await axios.get(`http://localhost:3003/users/${id}`);
  //   setUser(result.data);
  // };

  // useEffect(() => {
  //   loaddata();
  // }, []);

  return (
    <div className="list-group m-3">
      <a href="#" class="list-group-item list-group-item-action active">
        {id}
      </a>
      <a href="#" class="list-group-item list-group-item-action">
        {name}
      </a>
      <a href="#" class="list-group-item list-group-item-action">
        {username}
      </a>
      <a href="#" class="list-group-item list-group-item-action">
        {email}
      </a>
    </div>
  );
};

export default Viewuser;
