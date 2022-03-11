import React, { useState } from "react";
import Acard from "./Acard";
import { useGlobal } from "./Acontext";

const AList = () => {
  const { addHandler, name, email, setEmail, setName } = useGlobal();

  const add = (e) => {
    e.preventDefault();
    addHandler({ id: Date.now(), name, email });
  };
  return (
    <div className="container">
      <form onSubmit={add}>
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
        <button>Submit</button>
      </form>
      <Acard />
    </div>
  );
};

export default AList;
