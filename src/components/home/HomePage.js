import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./HomePage.css";

export default class HomePage extends Component {
  componentDidMount() {
    if (localStorage.getItem("token") === null) {
      this.props.history.replace("/login");
    }
  }

  render() {
    const user = sessionStorage.getItem("username");
    const email = sessionStorage.getItem("email");
    return (
      <div className="root">
        <nav className="navbar-custom">
          <div className="container-fluid container-nav">
            <div className="d-flex">
              <img src="/images/logo2.png" className="logo-style" alt="" />
              <h1 className="navbar-brand mb-0 h1 navbar-heading">MailX</h1>
            </div>
            <div className="avatar-style">
              <button
                type="button"
                className="avatar-style"
                data-bs-toggle="dropdown"
                aria-expanded="false">
                <ion-icon name="person-circle"></ion-icon>
              </button>
              <div
                className="dropdown-menu p-4 text-muted"
                style={{ maxWidth: "200px" }}>
                <div className="dropdown-icon">
                  <ion-icon name="person-circle"></ion-icon>
                </div>
                <div className="dropdown-username">
                  <h6 className="mb-0">{user}</h6>
                </div>
                <div>
                  <h6 className="dropdown-email">{email}</h6>
                </div>
                <div className="logout-style">
                  <Link to="/logout" style={{ width: "100%" }}>
                    <button type="button" className="btn btn-danger w-100">
                      Logout
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </nav>
      </div>
    );
  }
}
