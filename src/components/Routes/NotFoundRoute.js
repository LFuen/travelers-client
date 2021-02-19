import React from "react";
import { NotFoundSec } from "../../styled/Styled";
import lost from "../../images/lost.png";

function NotFoundRoute() {
  return (
    <NotFoundSec>
      <img src={lost} alt="Not Found" />
      <h2>404</h2>
      <p>Page Not Found</p>
    </NotFoundSec>
  );
}

export default NotFoundRoute;
