import React from "react";
import { Link } from "react-router-dom";
import {
  LogButton,
  WelcomeP,
  WelcomeDiv,
  WelcomeButtons,
} from "../../styled/Styled";

const Welcome = () => {
  return (
    <div>
        <h1>Travelers</h1>
      <WelcomeP>
        <p>We, as human beings, love to travel.</p>
        <p>It's in our blood.</p>
        <p>
          Our nomadic ancestors had the right idea, sadly at the wrong time.
        </p>
        <p>
          <em>'Travelers'</em> is a place where we can come together and share
          our journey's with each other, and inspire or even fuel the traveling
          spirit that longs to break free within each of us.
        </p>
      </WelcomeP>
      <WelcomeDiv>
        <h1>Let's Go Somewhere</h1>
        <WelcomeButtons>
          <Link to="/SignUp">
            <LogButton>Sign Up</LogButton>
          </Link>
          <Link to="/Login">
            <LogButton>Login</LogButton>
          </Link>
        </WelcomeButtons>
      </WelcomeDiv>
    </div>
  );
};

export default Welcome;
