import React, { Fragment, useState } from "react";
import "../css/editexperience.css";

const EditExperience = ({ personexperience }) => {
  const [person_experience, setPerson_experience] = useState(
    personexperience.person_experience
  );

  const updatePerson_experience = async (e) => {
    e.preventDefault();
    try {
      const body = { person_experience };
      const response = await fetch(
        `http://localhost:5000/personexperiences/${personexperience.personexperience_id}`,
        {
          method: "PUT",
          headers: { "Content-type": "application/json" },
          body: JSON.stringify(body),
        }
      );
      window.location = "/";
    } catch (err) {
      console.error(err.message);
    }
  };

  return (
    <Fragment>
      <button
        type="button"
        className="edit-button"
        data-toggle="modal"
        data-target={`#id${personexperience.personexperience_id}`}
      >
        Edit
      </button>

      <div className="modal" id={`id${personexperience.personexperience_id}`}>
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h4 className="modal-title" style={{ color: "black" }}>
                Edit experience
              </h4>
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                onClick={() =>
                  setPerson_experience(personexperience.person_experience)
                }
              >
                &times;
              </button>
            </div>

            <div className="modal-body">
              <textarea
                type="text"
                className="form-control"
                value={person_experience}
                onChange={(e) => setPerson_experience(e.target.value)}
              />
            </div>

            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-danger"
                data-dismiss="modal"
                onClick={(e) => updatePerson_experience(e)}
              >
                Edit
              </button>
              <button
                type="button"
                className="btn btn-danger"
                data-dismiss="modal"
                onClick={() =>
                  setPerson_experience(personexperience.person_experience)
                }
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default EditExperience;
