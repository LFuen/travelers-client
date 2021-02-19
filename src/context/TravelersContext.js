import React, { Component } from "react";
import Token from "../services/token-service";

const Context = React.createContext({
  user: {},
  error: null,

  setError: () => {},
  clearError: () => {},

  processLogin: () => {},
  processLogout: () => {},

  setUser: () => {},
  addUser: () => {},
});

export class ContextProvider extends Component {
  constructor(props) {
    super(props);

    const state = {
      user: Token.parseAuthToken() || {},
      error: null,
    };

    const jwtPayload = Token.parseAuthToken();

    if (jwtPayload) {
      state.user = {
        id: jwtPayload.user_id,
        sub: jwtPayload.sub,
      };
    }
    this.state = state;
  }

  setError = (error) => {
    console.error(error);
    this.setState({ error });
  };
  clearError = () => {
    this.setState({ error: null });
  };
  setUser = (user) => {
    this.setState({ user });
  };

  processLogin = (authToken) => {
    Token.saveAuthToken(authToken);
    const jwtPayload = Token.parseAuthToken();

    this.setUser({
      id: jwtPayload.user_id,
      sub: jwtPayload.sub,
    });
  };
  processLogout = () => {
    Token.clearAuthToken();
    this.setUser({});
  };

  render() {
    const value = {
      user: this.state.user,
      error: this.state.error,
      setError: this.setError,
      clearError: this.clearError,
      setUser: this.setUser,
      processLogin: this.processLogin,
      processLogout: this.processLogout,
    };

    return (
      <Context.Provider value={value}>{this.props.children}</Context.Provider>
    );
  }
}

export default Context;
