import React from "react";
import { Route, Navigate } from "react-router-dom";

function PrivateRoute({ component: Component, ...restOfProps }) {
  const isAuthenticated = localStorage.getItem("isAuthenticated");
  console.log("this", isAuthenticated);

  return (
    <Route
      {...restOfProps}
      render={(props) =>
        false ? <Component {...props} /> : <Navigate to="/signin" />
      }
    />
  );
}

export default PrivateRoute;
