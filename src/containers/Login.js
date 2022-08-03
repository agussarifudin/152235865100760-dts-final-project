import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import * as React from "react";
import { Link, useNavigate } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../config/firebase";
import NavBar from "../components/Navbar";
import Swal from "sweetalert2";

const Login = () => {
  const navigate = useNavigate();
  const handleSubmit = (event) => {
    localStorage.setItem("login", false);
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const email = data.get("email");
    const password = data.get("password");

    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        console.log(userCredential.user.providerData[0].uid);
        localStorage.setItem("email", userCredential.user.providerData[0].uid);
        localStorage.setItem("login", true);
        // ...
        navigate("/");
      })
      .catch((error) => {
        console.log(error.code);
        console.log(error.message);
        Swal.fire({
          title: `${error.code}`,
          text: `${error.message}`,
          icon: "error",
          confirmButtonColor: "#0080BB",
        });

        // ..
      });
  };

  return (
    <>
      <NavBar />
      <Container
        component="main"
        maxWidth="xs"
        style={{
          background: "linear-gradient(to bottom, #99ccff 0%, #66ffff 100%)",
          borderRadius: 20,
          height: 400,
        }}
      >
        <Box
          sx={{
            mt: 10,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          <Box
            component="form"
            onSubmit={handleSubmit}
            noValidate
            sx={{ mt: 1 }}
          >
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign In
            </Button>

            <Grid container>
              <Grid item>
                <Link to="/register">{"Don't have an account? Sign Up"}</Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
    </>
  );
};

export default Login;
