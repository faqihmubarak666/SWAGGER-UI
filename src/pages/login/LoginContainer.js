import React, { Component } from "react";
import FormLogin from "./FormLogin";
import swal from "sweetalert";
import { login } from "../ServiceApi";

class LoginContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
      email: "",
      usernameError: "",
      passwordError: "",
      homePage: false,
      loading: false,
    };
  }

  handleChangeInput = (event) => {
    const name = event.target.name;
    this.setState({ ...this.state, [name]: event.target.value });
  };

  loginUser = () => {
    if (this.state.username === "" && this.state.password === "") {
      this.setState({
        usernameError: "Invalid username",
        passwordError: "Invalid password",
      });
      swal("Login Invalid1", "You clicked the button!", "error");
    } else if (this.state.username === "") {
      this.setState({
        usernameError: "Invalid username",
      });
      swal("Login Invalid2", "You clicked the button!", "error");
    } else if (this.state.password === "") {
      this.setState({
        passwordError: "Invalid password",
      });
      swal("Login Invalid3", "You clicked the button!", "error");
    } else {
      login({
        username: this.state.username,
        password: this.state.password,
      })
        .then((response) => {
          console.log("login", response);
          if (response.statusCode === 2110) {
            sessionStorage.setItem("token", response.data.token);
            this.props.history?.push({
              pathname: "/checklist",
            });

            this.setState({
              isLoaded: !this.state.isLoaded,
            });

            swal("Login Success", "You clicked the button!", "success");
          } else {
            swal("Login Invalid4", "You clicked the button!", "error");
            this.props.history?.push({
              pathname: "/",
            });
          }
        })
        .catch((err) => {
          swal("Login Invalid5", "You clicked the button!", "error");
          this.props.history?.push({
            pathname: "/",
          });
        });
    }
  };

  render() {
    return (
      <div>
        <FormLogin
          usernameError={this.state.usernameError}
          passwordError={this.state.passwordError}
          username={this.state.username}
          password={this.state.password}
          handleChangeInput={this.handleChangeInput}
          loginUser={this.loginUser}
        />
      </div>
    );
  }
}

export default LoginContainer;
