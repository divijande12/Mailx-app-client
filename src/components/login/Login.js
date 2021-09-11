import axios from "axios";
import React, { Component } from "react";
import GoogleLogin from "react-google-login";
import "./login.css";
import image from "../../assets/web-bg.png";

export default class Login extends Component {
  componentDidMount() {
    if (localStorage.getItem("token") !== null) {
      this.props.history.replace("/");
    }
  }
  responseGoogle = (response) => {
    console.log(response);
    const data = { tokenId: response.tokenId };
    axios
      .post("/api/auth/googlelogin", data)
      .then((res) => {
        localStorage.setItem("token", res.data.accessToken);
        sessionStorage.setItem("email", res.data.email);
        sessionStorage.setItem("username", res.data.username);
        this.props.history.replace("/");
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  errorGoogle = (response) => {
    console.log(response);
  };
  render() {
    return (
      <div className="row custom-row">
        <div
          className="col-md-6 custom-column"
          style={{
            backgroundImage: `url(${image})`,
          }}>
          <div style={{ textAlign: "center" }}>
            <img src="/images/logo2.png" className="img-style" alt="" />
            <div className="header-appname">
              Mail<span style={{ color: "#14588F" }}>X</span>
            </div>
            <div className="header-tagline">
              Send E-Mails to anyone anywhere.
            </div>
          </div>
        </div>
        <div
          className="col-md-6 custom-column"
          style={{ backgroundColor: "white" }}>
          <div>
            <div className="login-msg">Sign In to send E-mails</div>
            <div className="google-button-container">
              <GoogleLogin
                clientId="823234920920-jr3h8m5mb8ntf5apn38ipi6j1m2c6182.apps.googleusercontent.com"
                render={(renderProps) => (
                  <button
                    className="google-button-container"
                    onClick={renderProps.onClick}
                    disabled={renderProps.disabled}>
                    <ion-icon
                      name="logo-google"
                      style={{
                        margin: "0px 5px -2px 0px",
                        fontSize: "16px",
                        color: "white",
                      }}></ion-icon>
                    Login with Google
                  </button>
                )}
                buttonText="Login with Google"
                onSuccess={this.responseGoogle}
                onFailure={this.errorGoogle}
                cookiePolicy={"single_host_origin"}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
