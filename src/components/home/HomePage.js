import axios from "axios";
import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./HomePage.css";

export default class HomePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      from: sessionStorage.getItem("email"),
      username: sessionStorage.getItem("username"),
      to: "",
      subject: "",
      body: "",
    };
  }
  componentDidMount() {
    if (localStorage.getItem("token") === null) {
      this.props.history.replace("/login");
    }
  }

  onHandleInputChange = (e) => {
    e.preventDefault();
    this.setState({ [e.target.name]: e.target.value });
  };

  onHandleClick = (e) => {
    axios
      .post("/send-mail", {
        from: this.state.from,
        to: this.state.to,
        subject: this.state.subject,
        body: this.state.body,
      })
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };

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
        <div className="form-container">
          <div className="form">
            <div className="input-group input-group-sm mb-3">
              <span className="input-group-text" id="inputGroup-sizing-sm">
                To
              </span>
              <input
                onChangeCapture={this.onHandleInputChange}
                type="text"
                name="to"
                className="form-control"
                aria-label="Sizing example input"
                aria-describedby="inputGroup-sizing-sm"
                autoComplete="true"
              />
            </div>
            <div className="input-group input-group-sm mb-3">
              <span className="input-group-text" id="inputGroup-sizing-sm">
                Subject
              </span>
              <input
                onChangeCapture={this.onHandleInputChange}
                type="text"
                name="subject"
                className="form-control"
                aria-label="Sizing example input"
                aria-describedby="inputGroup-sizing-sm"
              />
            </div>
            <div className="input-group input-group-sm mb-3">
              <span className="input-group-text" id="inputGroup-sizing-sm">
                Body
              </span>
              <textarea
                type="text"
                onChangeCapture={this.onHandleInputChange}
                name="body"
                rows={10}
                className="form-control"
                aria-label="Sizing example input"
                aria-describedby="inputGroup-sizing-sm"
              />
            </div>
            <div>
              <button
                type="button"
                className="btn btn-primary button"
                onClick={this.onHandleClick}>
                Send
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
