import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link, Route, Routes } from "react-router-dom";
import AddContact from "./components/AddContact";
import { Button } from "react-bootstrap";
import axios from "axios";
import { useState } from "react";
import ListContact from "./components/ListContact";
import EditContact from "./components/EditContact";

function App() {
  let API = "  http://localhost:8000/contacts";
  let [contact, setContact] = useState([]);
  const [soloContact, setSoloContact] = useState({
    name: "",
    surname: "",
    number: "",
    image: "",
  });

  function addNewContact(newContact) {
    axios.post(API, newContact);
  }

  async function getContacts() {
    const { data } = await axios.get(API);
    setContact(data);
  }

  async function deleteContact(id) {
    await axios.delete(`${API}/${id}`);
    getContacts();
  }

  async function getSoloContact(id) {
    let { data } = await axios.get(`${API}/${id}`);
    setSoloContact(data);
  }

  async function updateEditContact(id, editedContact) {
    await axios.patch(`${API}/${id}`, editedContact);
    getContacts();
  }

  return (
    <div className="App">
      {/* <Link to="/addContact"></Link> */}
      <Link to="/addContact">
        <button class=" btn btn-outline-info ms-3">Add New Contact</button>
      </Link>
      <Link to="/listContact">
        <button class=" btn btn-outline-info ms-3">List</button>
      </Link>

      <Routes>
        <Route
          path="/listContact"
          element={
            <ListContact
              getContacts={getContacts}
              contact={contact}
              deleteContact={deleteContact}
              soloContact={soloContact}
              getSoloContact={getSoloContact}
              updateEditContact={updateEditContact}
            />
          }
        />
        <Route
          path="/addContact"
          element={
            <AddContact addNewContact={addNewContact} contact={contact} />
          }
        />
        <Route
          path="/edit/:id"
          element={
            <EditContact
              soloContact={soloContact}
              getSoloContact={getSoloContact}
              updateEditContact={updateEditContact}
            />
          }
        />
      </Routes>
    </div>
  );
}

export default App;
