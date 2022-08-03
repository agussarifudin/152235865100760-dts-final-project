import { AppBar, Box, Button, Toolbar, Typography } from "@mui/material";
import { signOut } from "firebase/auth";
import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { auth } from "../config/firebase";

const NavBar = () => {
  const navigate = useNavigate();

  const onLogout = () => {
    signOut(auth)
      .then(() => {
        localStorage.setItem("email", "");
        localStorage.setItem("login", false);
        navigate("/login");
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const onHome = () => {
    signOut(auth)
      .then(() => {
        localStorage.setItem("email", "");
        localStorage.setItem("login", false);
        navigate("/home");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const [login] = useState(localStorage.getItem("login"));
  return (
    <Box>
      <AppBar position="static" style={{ background: "#2E3B55" }}>
        <Toolbar>
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, textAlign: "left" }}
          >
            Spaceflight News
          </Typography>
          {login === "true" ? (
            <>
              <h5 style={{ paddingRight: 20 }}>
                Selamat datang {localStorage.email}
              </h5>

              <Button color="inherit" onClick={onLogout}>
                Logout
              </Button>
            </>
          ) : (
            <>
              <Button color="inherit" onClick={onLogout}>
                Login
              </Button>
              <Button color="inherit" onClick={onHome}>
                Find News
              </Button>
            </>
          )}
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default NavBar;
