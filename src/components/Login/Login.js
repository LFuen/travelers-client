import React, { Component } from "react";
import AuthApiService from "../../services/auth-api-service";
import Context from "../../context/TravelersContext";
import Button from "../../helpers/Button";
import { LogSection, FadeForm } from "../../styled/Styled";

class Login extends Component {
  static defaultProps = {
    onLoginSuccess: () => {},
  };

  static contextType = Context;

  state = { error: null };
  firstInput = React.createRef();

  handleSubmit = (ev) => {
    ev.preventDefault();
    const { username, password } = ev.target;
    this.setState({
      error: null,
    });

    AuthApiService.postLogin({
      username: username.value,
      password: password.value,
    })
      .then((res) => {
        username.value = "";
        password.value = "";
        this.context.processLogin(res.authToken);
        this.props.onLoginSuccess({ username, password });
      })
      .catch((res) => {
        this.setState({ error: res.error });
      });
  };

  componentDidMount() {
    this.firstInput.current.focus();
  }

  render() {
    const { error } = this.state;
    return (
      <LogSection>
        <FadeForm onSubmit={this.handleSubmit}>
          <div role="alert">{error && <p>{error}</p>}</div>
          <label htmlFor="username">
            <span>Username</span>
          </label>
          <br />
          <input ref={this.firstInput} id="username" name="username" required />

          <label htmlFor="password">
            <br />
            Password
          </label>
          <br />
          <input id="password" name="password" type="password" required />

          <br />
          <Button type="submit">Login</Button>
        </FadeForm>
      </LogSection>
    );
  }
}

export default Login;
