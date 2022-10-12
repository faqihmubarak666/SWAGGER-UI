import React from "react";
import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";
import { useNavigate } from "react-router-dom";
const FormLogin = (props) => {
  const {
    username,
    password,
    handleChangeInput,
    loginUser,
    usernameError,
    passwordError,
    handleCreate,
  } = props;
  const navigate = useNavigate();

  return (
    <div className="bodyLogin">
      <div className="col-md-4 col-sm-12 mb-3">
        <div className="login-boxLogin">
          <Card border="success" className="body_cardLogin">
            <h1>Login</h1>
            <div className="emailErrorLogin">{usernameError}</div>
            <div className="textboxLogin">
              <i class="fa fa-user" aria-hidden="true"></i>
              <Form.Control
                name="username"
                type="username"
                value={username}
                placeholder="Enter username"
                onChange={(event) => handleChangeInput(event)}
              />
            </div>
            <div className="passwordErrorLogin">{passwordError}</div>
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

            <button
              class="btn btn-primary"
              type="button"
              className="btnLogin"
              onClick={() => {
                loginUser();
                navigate("/checklist");
              }}
            >
              Login
            </button>
            <h3>don't have account ?</h3>
            <button
              onClick={() => {
                handleCreate();
              }}
            >
              Register
            </button>
          </Card>
          <br />
        </div>
      </div>
    </div>
  );
};

export default FormLogin;
