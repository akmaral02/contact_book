import React, { useState } from "react";

const AddContact = ({ addNewContact, contact }) => {
  let [name, setName] = useState("");
  let [surname, setSurname] = useState("");
  let [number, setNumber] = useState("");
  let [image, setImage] = useState("");

  function handleSave(e) {
    e.preventDefault();
    let newContact = {
      name,
      surname,
      number,
      image,
    };
    addNewContact(newContact);
    setName("");
    setSurname("");
    setNumber("");
    setImage("");
  }

  return (
    <div className="container pt-5">
      <form>
        <div className="mb-3">
          <label for="name" className="form-label">
            Name
          </label>
          <input
            type="text"
            className="form-control"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>

        <div className="mb-3">
          <label for="surname" className="form-label">
            Surname
          </label>
          <input
            type="text"
            className="form-control"
            id="surname"
            value={surname}
            onChange={(e) => setSurname(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label for="phoneNumber" className="form-label">
            Phone Number
          </label>
          <input
            type="text"
            className="form-control"
            id="phoneNumber"
            value={number}
            onChange={(e) => setNumber(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label for="image" className="form-label">
            Link to Image
          </label>
          <input
            type="text"
            className="form-control"
            id="image"
            value={image}
            onChange={(e) => setImage(e.target.value)}
          />
        </div>
        <button type="submit" className="btn btn-primary" onClick={handleSave}>
          Add Contact
        </button>
      </form>
    </div>
  );
};

export default AddContact;
