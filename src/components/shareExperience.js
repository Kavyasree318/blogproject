import React, { useState } from "react";
import "../css/shareExperience.css";

const ShareExperience = () => {
  const [person_name, setPerson_name] = useState("");

  const [person_experience, setPerson_experience] = useState("");

  const onSubmitForm = async (e) => {
    e.preventDefault();
    try {
      const body = { person_name, person_experience };
      const response = await fetch("http://localhost:5000/personexperiences", {
        method: "POST",
        headers: { "Content-type": "application/json" },
        body: JSON.stringify(body),
      });

      window.location = "/";
      console.log(response);
    } catch (err) {
      console.error(err.message);
    }
  };

  return (
    <div className="share_experience">
      <form className="form" onSubmit={onSubmitForm}>
        <label>Name</label>
        <input
          type="text"
          className="form-control"
          value={person_name}
          onChange={(e) => setPerson_name(e.target.value)}
          required
        ></input>
        <label>Experience </label>
        <textarea
          type="text"
          className="form-control"
          value={person_experience}
          onChange={(e) => setPerson_experience(e.target.value)}
          required
        ></textarea>
        <button className="btn add-button">Add</button>
      </form>
    </div>
  );
};

export default ShareExperience;
