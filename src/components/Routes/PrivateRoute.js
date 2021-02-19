import React from "react";
import { Route, Redirect } from "react-router-dom";
import Context from "../../context/TravelersContext";

function PrivateRoute({ component, ...props }) {
  const Component = component;

  return (
    <Route
      {...props}
      render={(componentProps) => (
        <Context.Consumer>
          {(context) =>
            !!context.user.id ? (
              <Component {...componentProps} />
            ) : (
              <Redirect
                to={{
                  pathname: "/",
                  state: { from: componentProps.location },
                }}
              />
            )
          }
        </Context.Consumer>
      )}
    />
  );
}

export default PrivateRoute;
