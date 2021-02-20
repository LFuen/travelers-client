import React, { Component } from "react";
import { SignUpDiv, LogLink } from "../../styled/Styled";
import CreateButton from "../../helpers/CreateButton";
import AuthApiService from "../../services/auth-api-service";

class SignUp extends Component {
  static defaultProps = {
    onCreateSuccess: () => {},
  };

  state = { error: null };
  firstInput = React.createRef();

  handleSubmit = (ev) => {
    ev.preventDefault();

    const { username, password } = ev.target;

    AuthApiService.postUser({
      username: username.value,
      password: password.value,
    })
      .then((res) => {
        username.value = "";
        password.value = "";
        this.props.onCreateSuccess();
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
      <div>
        <SignUpDiv>
          <form onSubmit={this.handleSubmit}>
            <div role="alert">{error && <p>{error}</p>}</div>
            <h2>Create Account</h2>
            <label htmlFor="username">Username</label>
            <br />
            <input
              ref={this.firstInput}
              id="username"
              type="text"
              placeholder="Username"
              name="username"
              required
            />
            <br />
            <label htmlFor="password">Password</label>
            <br />
            <input
              id="password"
              type="password"
              placeholder="Password"
              name="password"
              required
            />
            <br />
            <CreateButton className="btn">Create</CreateButton>
            <br />
            <LogLink to="/Login">Already have an account?</LogLink>
          </form>
        </SignUpDiv>
      </div>
    );
  }
}

export default SignUp;
