import React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import "./Signin.css";
import Whatsapp from "../assets/WhatsApp.png";
import { Button, Card, CardContent } from "@mui/material";
import google from "../assets/Google.png";
import { signInWithPopup } from "firebase/auth";
import { auth, googleProvider } from "../firebase/setup";

function Signin() {
  const googleSignIn = async () => {
    try {
      await signInWithPopup(auth, googleProvider);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar
        position="static"
        sx={{ height: "230px", backgroundColor: "#24B977" }}
      >
        <Toolbar>
          <div className="nav-content">
            <img className="logo" src={Whatsapp} />
            <h3 className="title">WHATSAPP WEB</h3>
          </div>
          <Card className="box">
            <CardContent className="signin-card">
              <div>
                <h2 className="description">Use WHATSAPP on your computer</h2>
                <h5 className="steps"> 1. Open whatsapp on your computer</h5>
                <h5 className="steps"> 2. Signin with google account</h5>
                <h5 className="steps"> 3. Signin using phone number.</h5>
              </div>

              <div onClick={googleSignIn} className="signin-btn">
                <img className="google" src={google} />
              </div>
            </CardContent>
            <Button color="success">Signin with Phone number</Button>
          </Card>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default Signin;
