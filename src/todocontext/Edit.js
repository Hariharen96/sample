import React, { useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import Acard from "./Acard";
import { useGlobal } from "./Acontext";

const Edit = () => {
  const {
    name,
    email,
    setEmail,
    setName,
    editId,
    setEditId,
    setContacts,
    contacts,
    setIsEdit,
  } = useGlobal();

  const { id } = useParams();
  const history = useHistory();
  const edit = (e) => {
    e.preventDefault();
    if ((name || email) && editId) {
      setContacts(
        contacts.map((item) => {
          if (item.id === editId) {
            return { ...item, name: name, email: email };
          }
          return item;
        })
      );
    }
    history.push("/");
  };
  return (
    <div className="container">
      <form onSubmit={edit}>
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="text"
          name="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <button>Edit</button>
      </form>
      <Acard />
    </div>
  );
};

export default Edit;
