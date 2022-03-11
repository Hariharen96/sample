import React from "react";
import { Link } from "react-router-dom";
import { useGlobal } from "./Acontext";

const Acard = () => {
  const { contacts, removeHandler, editHandler } = useGlobal();

  return (
    <div className="card">
      {contacts.map((item) => {
        return (
          <div className="card-body" key={item.id}>
            <p>{item.name}</p>
            <p>{item.email}</p>
            <button onClick={() => removeHandler(item.id)}>delete</button>
            <Link to={`/edit/${item.id}`}>
              <button onClick={() => editHandler(item.id)}>edit</button>
            </Link>
          </div>
        );
      })}
    </div>
  );
};

export default Acard;
