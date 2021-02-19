import React from "react";
import { Route, Redirect } from "react-router-dom";
import Context from "../../context/TravelersContext";

function PublicRoute({ component, ...props }) {
  const Component = component;

  return (
    <Route
      {...props}
      render={(componentProps) => (
        <Context.Consumer>
          {(context) =>
            !!context.user.id ? (
              <Redirect to={"/"} />
            ) : (
              <Component {...componentProps} />
            )
          }
        </Context.Consumer>
      )}
    />
  );
}

export default PublicRoute;
