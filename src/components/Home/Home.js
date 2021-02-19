import React, { Component } from "react";
import { Link } from "react-router-dom";
import { CreateButton, ShowGuide, HomeDiv } from "../../styled/Styled";

class Home extends Component {
  render() {
    return (
      <HomeDiv>
        <p>Welcome back, fellow vagabond</p>
        <Link to="/Guides">
          <ShowGuide>Guides</ShowGuide>
        </Link>
        <br />
        <Link to="/GuideForm">
          <CreateButton>Create Guide</CreateButton>
        </Link>
      </HomeDiv>
    );
  }
}

export default Home;
