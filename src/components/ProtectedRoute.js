import { Navigate, Outlet } from "react-router-dom";

const PrivateRoutes = () => {
  let token;

  if (localStorage.email === "") {
    token = false;
  } else {
    token = true;
  }

  let auth = { token };

  return auth.token ? (
    localStorage.login ? (
      <Outlet />
    ) : (
      <Navigate to="/login" />
    )
  ) : (
    <Navigate to="/login" />
  );
};

export default PrivateRoutes;
