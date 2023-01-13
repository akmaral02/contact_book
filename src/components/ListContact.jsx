import React, { useEffect } from "react";
import { Link } from "react-router-dom";

const ListContact = ({
  getContacts,
  contact,
  deleteContact,
  getSoloContact,
}) => {
  useEffect(() => {
    getContacts();
  }, []);
  return (
    <div>
      <div className="container d-flex justify-content-between flex-wrap mt-5">
        {contact.map((item) => (
          <div key={item.id} class="card mb-3 mt-5 " style={{ width: "18rem" }}>
            <div class="row g-5 ">
              <div class="col-md-4">
                <img
                  src={`${item.image}`}
                  class="img-fluid rounded-start"
                  alt="..."
                  style={{
                    height: "100%",
                    objectFit: "contain",
                    mixBlendMode: "darken",
                  }}
                />
              </div>
              <div class="col-md-8">
                <div class="card-body">
                  <h5 class="card-title">{item.name}</h5>
                  <p class="card-text">{item.surname}</p>
                  <p class="card-text">
                    {item.number}
                    {/* <small class="text-muted">Last updated 3 mins ago</small> */}
                  </p>
                  <Link to={`/edit/${item.id}`}>
                    <button class="btn bg-primary">Edit</button>
                  </Link>
                  <button
                    class="btn bg-danger"
                    onClick={() => deleteContact(item.id)}
                  >
                    Delete
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ListContact;
