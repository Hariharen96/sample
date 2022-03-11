import React, { useState } from "react";

const Tadd = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [city, setCity] = useState("");
  const [phone, setPhone] = useState("");
  const [list, setList] = useState([]);
  const [editId, setEditId] = useState(null);
  const [isEdit, setIsEdit] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !email || !city || !phone) {
      alert("please enter your details");
    } else if ((name || email || city || phone) && isEdit) {
      setList(
        list.map((item) => {
          if (item.id === editId) {
            return {
              ...item,
              name: name,
              email: email,
              city: city,
              phone: phone,
            };
          }
          return item;
        })
      );
      setIsEdit(false);
      setEditId(null);
      setName("");
      setEmail("");
      setCity("");
      setPhone("");
    } else {
      const newItems = {
        id: Date.now(),
        name: name,
        email: email,
        city: city,
        phone: phone,
      };
      setList([...list, newItems]);
    }
  };

  const deletehandler = (id) => {
    const deleteId = list.filter((item) => item.id !== id);
    setList(deleteId);
  };

  const editHandler = (id) => {
    const editId = list.find((item) => item.id === id);
    setIsEdit(true);
    setEditId(id);
    setName(editId.name);
    setEmail(editId.email);
    setCity(editId.city);
    setPhone(editId.phone);
  };
  return (
    <div className="container">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={name}
          placeholder="Name"
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="text"
          value={email}
          placeholder="Email"
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="text"
          value={city}
          placeholder="city"
          onChange={(e) => setCity(e.target.value)}
        />
        <input
          type="number"
          value={phone}
          placeholder="phone"
          onChange={(e) => setPhone(e.target.value)}
        />
        <button type="submit">Submit</button>
      </form>
      <div className="card">
        {list.map((item) => {
          return (
            <div className="card-body">
              <p>
                {item.name} {item.email} {item.city} {item.phone}
              </p>
              <button onClick={() => editHandler(item.id)}>Edit</button>
              <button onClick={() => deletehandler(item.id)}>Delete</button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Tadd;
