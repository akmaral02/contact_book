import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

const EditContact = ({ soloContact, getSoloContact, updateEditContact }) => {
  const params = useParams();

  useEffect(() => {
    getSoloContact(params.id);
  }, []);

  useEffect(() => {
    setName(soloContact.name);
    setSurname(soloContact.surname);
    setNumber(soloContact.number);
    setImage(soloContact.image);
  }, [soloContact]);

  let [name, setName] = useState(soloContact.name);
  let [surname, setSurname] = useState(soloContact.surname);
  let [number, setNumber] = useState(soloContact.number);
  let [image, setImage] = useState(soloContact.image);

  const navigate = useNavigate();

  function handleSave() {
    let obj = {
      name,
      surname,
      number,
      image,
    };
    updateEditContact(params.id, obj);
    navigate("/listContact");
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
          Save
        </button>
      </form>
    </div>
  );
};

export default EditContact;
