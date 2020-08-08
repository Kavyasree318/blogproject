import React, { Fragment, useEffect, useState } from "react";
import "../css/othersexperience.css";
import EditExperience from "./editExperience";
const OthersExperience = () => {
  const [personexperiences, setPersonexperiences] = useState([]);

  //delete personexperience

  const deletePersonexperience = async (id) => {
    try {
      const deletePersonexperience = await fetch(
        `http://localhost:5000/personexperiences/${id}`,
        {
          method: "DELETE",
        }
      );
      setPersonexperiences(
        personexperiences.filter(
          (personexperience) => personexperience.personexperience_id !== id
        )
      );
    } catch (err) {
      console.error(err.message);
    }
  };

  //get all experiences

  const getPersonexperiences = async () => {
    try {
      const response = await fetch("http://localhost:5000/personexperiences");
      const jsonData = await response.json();

      setPersonexperiences(jsonData);
    } catch (err) {
      console.error(err.message);
    }
  };

  useEffect(() => {
    getPersonexperiences();
  }, []);

  return (
    <Fragment>
      <div className="row">
        <table>
          <tbody>
            {personexperiences.map((personexperience) => (
              <tr
                className="single-experience"
                key={personexperience.personexperience_id}
              >
                <td>
                  {" "}
                  <h4>I am {personexperience.person_name}</h4>
                </td>
                <td>{personexperience.person_experience}</td>
                <td>
                  <EditExperience personexperience={personexperience} />
                </td>
                <td>
                  <button
                    className="delete-button"
                    onClick={() =>
                      deletePersonexperience(
                        personexperience.personexperience_id
                      )
                    }
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </Fragment>
  );
};

export default OthersExperience;
