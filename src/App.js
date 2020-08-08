import React, { Fragment, Component } from "react";
import ShareExperience from "./components/shareExperience";
import OthersExperience from "./components/othersExperience";
import "./css/app.css";
import Img from "./images/back_image";

class App extends Component {
  state = {
    visible_experience: true,
    visible: true,
  };

  render() {
    return (
      <Fragment>
        <div className="container">
          <h5>Share your wounderful experience with us :) :)</h5>
          <img src={Img} alt="background_image" className="image" />
          <div className="text-container">
            <p className="text">Live, travel, Food, Adventure, Bliss </p>
            {this.state.visible_experience ? (
              <div>
                <div className="button">
                  <button
                    type="button"
                    className="btn experience-button"
                    onClick={() => {
                      this.setState({ visible_experience: false });
                    }}
                  >
                    Share your Experience
                  </button>
                </div>
              </div>
            ) : (
              <div>
                <ShareExperience />
              </div>
            )}
          </div>
          {this.state.visible ? (
            <button
              type="button"
              className="btn othersexperience-button"
              onClick={() => {
                this.setState({ visible: false });
              }}
            >
              view others experiences
            </button>
          ) : (
            <div>
              <OthersExperience />
            </div>
          )}
        </div>
      </Fragment>
    );
  }
}

export default App;
