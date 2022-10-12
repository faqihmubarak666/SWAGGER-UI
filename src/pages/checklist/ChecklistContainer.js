import React, { Component } from "react";
import { getAllChecklist, createName, deleteName } from "../ServiceApi";
import ChecklistTable from "./ChecklistTable";
import CreatName from "./CreatName";
import swal from "sweetalert";

class ChecklistContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dataChecklist: [],
      name: "",
      showModalCreate: false,
    };
  }

  componentDidMount() {
    this.loadData();
  }

  loadData = () => {
    getAllChecklist().then((response) => {
      const result = response.data;
      console.log("data", result);
      this.setState({
        ...this.state,
        dataChecklist: result,
      });
    });
  };

  createNewName = () => {
    createName({
      name: this.state.name,
    })
      .then((response) => {
        if (this.state.name === "") {
          swal("Create New Category Failed !!!");
        } else {
          swal(
            "Create New Category Success",
            "You clicked the button!",
            "success"
          );
          this.loadData();
          this.handleShowModalCreate();
          this.setState({
            ...this.state,
            name: "",
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

  handleChangeInput = (event) => {
    const name = event.target.name;
    this.setState({ ...this.state, [name]: event.target.value });
  };

  handleDeleteName = (id) => {
    swal({
      title: "Are you sure?",
      text: "Once deleted, you will not be able to recover this imaginary file!",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    }).then((willDelete) => {
      if (willDelete) {
        swal("Poof! Your imaginary file has been deleted!", {
          icon: "success",
        });
        deleteName(id).then((response) => {
          if (response.code === 200) {
            this.loadData();
            swal(
              "Delete Category Success",
              "You clicked the button!",
              "success"
            );
          }
        });
      } else {
        swal("Your imaginary file is safe!");
      }
    });
  };

  render() {
    return (
      <div>
        <ChecklistTable
          dataChecklist={this.state.dataChecklist}
          handleCreate={this.handleCreate}
          isLoaded={this.state.isLoaded}
          handleDeleteName={this.handleDeleteName}
        />
        <CreatName
          createNewName={this.createNewName}
          name={this.state.name}
          show={this.state.showModalCreate}
          onHide={this.handleCreate}
          handleChangeInput={this.handleChangeInput}
        />
      </div>
    );
  }
}

export default ChecklistContainer;
