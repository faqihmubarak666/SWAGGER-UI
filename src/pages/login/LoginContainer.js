import React, { Component } from "react";
import FormLogin from "./FormLogin";
import swal from "sweetalert";
import { login, registerUser } from "../ServiceApi";

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

  getDataUser = () => {
    if (this.state.username === "" && this.state.password === "") {
      this.setState({
        usernameInvalid: "Invalid username",
        passwordInvalid: "Invalid password",
      });
      swal("Login Invalid", "You clicked the button!", "error");
    } else if (this.state.username === "") {
      this.setState({
        usernameInvalid: "Invalid username",
      });
      swal("Login Invalid", "You clicked the button!", "error");
    } else if (this.state.password === "") {
      this.setState({
        passwordInvalid: "Invalid password",
      });
      swal("Login Invalid", "You clicked the button!", "error");
    } else {
      login({
        username: this.state.username,
        password: this.state.password,
      }).then((response) => {
        if (response.data.token !== undefined) {
          const data = response;
          this.props.GetAdmin(data);
          sessionStorage.setItem("token", response.data.token);
          this.props.history.push({
            pathname: "/checklist",
          });

          this.setState({
            isLoaded: !this.state.isLoaded,
          });

          swal("Login Success", "You clicked the button!", "success");
        }
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
          getDataUser={this.getDataUser}
        />
      </div>
    );
  }
}

export default LoginContainer;
