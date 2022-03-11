import { createContext, useContext, useState } from "react";

const AppContext = createContext();

const AppProvider = ({ children }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [contacts, setContacts] = useState([]);
  const [editId, setEditId] = useState(null);
  const [isEdit, setIsEdit] = useState(false);

  const addHandler = (contact) => {
    setContacts([...contacts, contact]);
  };
  const removeHandler = (id) => {
    const deleteId = contacts.filter((item) => item.id !== id);
    setContacts(deleteId);
  };

  const editHandler = (id) => {
    const specificItem = contacts.find((item) => item.id === id);
    setIsEdit(true);
    setEditId(id);
    setName(specificItem.name);
    setEmail(specificItem.email);
  };
  const values = {
    addHandler,
    contacts,
    removeHandler,
    name,
    email,
    setName,
    setEmail,
    editHandler,
    editId,
    setContacts,
  };

  return <AppContext.Provider value={values}>{children}</AppContext.Provider>;
};

export const useGlobal = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
