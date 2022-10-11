import React, { Component } from "react";
// import "../../login.css";
import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";

export default class FormLogin extends Component {
  render() {
    const {
      email,
      username,
      password,
      handleChangeInput,
      getDataUser,
      usernameError,
      passwordError,
      loading,
    } = this.props;
    return (
      <div className="bodyLogin">
        <div className="col-md-4 col-sm-12 mb-3">
          <div className="login-boxLogin">
            <Card border="success" className="body_cardLogin">
              <h1>REGISTER</h1>
              <div className="emailErrorLogin">{usernameError}</div>
              <div className="textboxLogin">
                <i class="fa fa-user" aria-hidden="true"></i>
                <Form.Control
                  name="email"
                  type="email"
                  value={email}
                  placeholder="Enter email"
                  onChange={(event) => handleChangeInput(event)}
                />
              </div>
              <div className="textboxLogin">
                <i className="fa fa-lock" aria-hidden="true"></i>
                <Form.Control
                  name="password"
                  type="Password"
                  value={password}
                  placeholder="Enter password"
                  onChange={(event) => handleChangeInput(event)}
                />
              </div>
              <div className="textboxLogin">
                <i className="fa fa-lock" aria-hidden="true"></i>
                <Form.Control
                  name="username"
                  type="username"
                  value={username}
                  placeholder="Enter username"
                  onChange={(event) => handleChangeInput(event)}
                />
              </div>

              <button
                class="btn btn-primary"
                type="button"
                className="btnLogin"
                disabled={loading}
                onClick={() => getDataUser()}
              >
                {loading ? (
                  <div class="spinner-border text-success" role="status"></div>
                ) : (
                  "login"
                )}
              </button>
            </Card>
            <br />
          </div>
        </div>
      </div>
    );
  }
}
