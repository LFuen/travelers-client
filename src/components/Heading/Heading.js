import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Logout, Header } from "../../styled/Styled";
import Token from "../../services/token-service";
import Context from "../../context/TravelersContext";
import SignUp from "../SignUp/SignUp";

class Heading extends Component {
  static contextType = Context;

  handleLogout = () => {
    this.context.processLogout();
  };

  renderLogout() {
    return (
      <div>
        <div>
          <span>{this.context.user.sub}</span>
        </div>
        <Link className="logout" onClick={this.handleLogout} to="/">
          <Logout>Logout</Logout>
        </Link>
      </div>
    );
  }

  renderLogin() {
    <SignUp />;
  }

  render() {
    return (
      <Header>
        {Token.hasAuthToken() ? this.renderLogout() : this.renderLogin()}
      </Header>
    );
  }
}

export default Heading;
