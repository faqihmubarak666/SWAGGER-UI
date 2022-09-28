import React, { Component } from "react";
import { getComingsoon, getDetailComingsoon } from "../ServiceApi";
import ListComingsoon from "./ListComingsoon";
import { connect } from "react-redux";

class ComingsoonContainer extends Component {
  componentDidMount() {
    this.loadData();
  }

  loadData = () => {
    getComingsoon().then((res) => {
      const result = res.results;
      this.props.GetComingsoon(result);
    });
  };

  detailComingsoon = (id) => {
    getDetailComingsoon(id).then((response) => {
      const result = response;
      this.props.GetDetailComingsoonId(result);
      this.props.Showbar(true);
    });
  };

  render() {
    return (
      <div>
        <ListComingsoon
          listComingsoon={this.props.listComingsoon}
          detailComingsoon={this.detailComingsoon}
        />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    listComingsoon: state.rGetDataComingsoon.GetComingsoon.dataComingsoon,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    GetComingsoon: (result) =>
      dispatch({ type: "GET_COMINGSOON", data: result }),
    GetDetailComingsoonId: (result) =>
      dispatch({ type: "GET_DETAIL_COMINGSOON", data: result }),
    Showbar: (result) => dispatch({ type: "SHOWBAR", data: result }),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ComingsoonContainer);
