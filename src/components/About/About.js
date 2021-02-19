import React, { Component } from "react";
import { AboutDiv, AboutMain } from "../../styled/Styled";

class About extends Component {
  render() {
    return (
      <AboutMain>
        <h1>About</h1>
        <AboutDiv>
          <div className="about">
            <div className="paragraph">
              <p className="aboutPara">
                Travel!! It's a thing we all enjoy doing. Seeing new sites,
                tasting new foods, staying in places with killer views or with
                just somewhere with awesome perks.
              </p>

              <p className="aboutPara">
                Whether you want to plan your own trip or live vicariously
                through others and their shared travel stories, let Traveler
                help!
              </p>

              <p className="aboutPara">
                Browse posts by other travelers and decide which ones you like
                and which ones you want to save for later so you can put
                together your own trip later on, based on suggestions and
                reviews of others that have already experienced those places,
                sites, and food!
              </p>
            </div>
          </div>
        </AboutDiv>
      </AboutMain>
    );
  }
}

export default About;
