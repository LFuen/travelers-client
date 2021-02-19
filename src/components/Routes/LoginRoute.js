import React, { Component } from "react";
import Login from "../Login/Login";

class LoginRoute extends Component {
  static defaultProps = {
    history: {
      push: () => {},
    },
  };

  handleLoginSuccess = () => {
    const { history } = this.props;
    history.push("/Guides");
  };

  render() {
    return (
      <div className="login">
        <Login onLoginSuccess={this.handleLoginSuccess} />
      </div>
    );
  }
}

export default LoginRoute;
