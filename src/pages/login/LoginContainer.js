import React, { Component } from "react";
import FormLogin from "./FormLogin";
import swal from "sweetalert";
import { login, registerUser } from "../ServiceApi";
import FormRegister from "./FormRegister";

class LoginContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
      email: "",
      usernameError: "",
      passwordError: "",
      showModalCreate: false,
      movePage: false,
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
              movePage: !this.state.movePage,
            });

            swal("Login Success", "You clicked the button!", "success");
          } else {
            swal("Login Invalid4", "You clicked the button!", "error");
            // this.props.history?.push({
            //   pathname: "/",
            // });
          }
        })
        .catch((err) => {
          swal("Login Invalid5", "You clicked the button!", "error");
          // this.props.history?.push({
          //   pathname: "/",
          // });
        });
    }
  };

  createNewUser = () => {
    registerUser({
      email: this.state.email,
      username: this.state.username,
      password: this.state.password,
    })
      .then((response) => {
        console.log("result", response);
        if (
          this.state.email === "" ||
          this.state.username === "" ||
          this.state.password === ""
        ) {
          swal("Create New Account Failed !!!");
        } else {
          swal(
            "Create New Account Success",
            "You clicked the button!",
            "success"
          );
          this.loadData();
          this.handleShowModalCreate();
          this.setState({
            ...this.state,
            email: "",
            username: "",
            password: "",
          });
        }
      })
      .catch((err) => {
        swal(err);
      });
  };

  handleCreate = () => {
    this.setState({
      showModalCreate: !this.state.showModalCreate,
    });
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
          handleCreate={this.handleCreate}
          movePage={this.state.movePage}
        />

        <FormRegister
          email={this.state.email}
          username={this.state.username}
          password={this.state.password}
          show={this.state.showModalCreate}
          onHide={this.handleCreate}
          createNewUser={this.createNewUser}
          handleChangeInput={this.handleChangeInput}
        />
      </div>
    );
  }
}

export default LoginContainer;
