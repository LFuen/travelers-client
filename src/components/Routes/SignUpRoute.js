import React, { Component } from "react";
import SignUp from "../SignUp/SignUp";

class SignUpRoute extends Component {
  static defaultProps = {
    history: {
      push: () => {},
    },
  };
  handleRegistrationSuccess = () => {
    const { history } = this.props;
    history.push("/Login");
  };

  render() {
    return (
      <div>
        <SignUp onCreateSuccess={this.handleRegistrationSuccess} />
      </div>
    );
  }
}

export default SignUpRoute;
