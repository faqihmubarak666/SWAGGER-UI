import React, { Component } from "react";
import { Image, Container, Col, Row, Button, Card } from "react-bootstrap";
import { connect } from "react-redux";
import "../../style/detailTrending.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { getTrailerTrending } from "../ServiceApi";
import TrailerTrending from "./TrailerComingsoon";
import Moment from "react-moment";

class DetailComingsoon extends Component {
  constructor(props) {
    super(props);
    this.state = {
      resComingsoon: "",
      modalTrailer: false,
    };
  }

  trailerTrending = (id) => {
    getTrailerTrending(id).then((response) => {
      const result = response.results[0];
      console.log("trailer", result);
      this.props.GetTrailerTrendingId(result);
      this.setState({
        modalTrailer: !this.state.modalTrailer,
      });
    });
  };

  closeTrailer = () => {
    this.setState({
      ...this.state,
      modalTrailer: !this.state.modalTrailer,
    });
  };

  trailerOnReady = (event) => {
    event.target.playVideoAt(50);
  };

  render() {
    return (
      <div
        className="detailTrending"
        style={{
          backgroundImage: `url(${process.env.REACT_APP_URL_IMAGE}${this.props.resComingsoon.backdrop_path})`,
        }}
      >
        <Container className="boxDetailTrending">
          <Row>
            <Col sm={4}>
              <Image
                src={`${process.env.REACT_APP_URL_IMAGE}${this.props.resComingsoon.poster_path}`}
                className="posterDetail"
                alt="Poster"
              />
            </Col>
            <Col sm={8}>
              <Card.Title className="text-center" style={{ fontSize: "30px" }}>
                {this.props.resComingsoon.original_title}
              </Card.Title>

              <Card.Text style={{ fontSize: "20px" }}>
                Realease Date :{" "}
                <Moment format="DD/MM/YYYY">
                  {this.props.resComingsoon.release_date}
                </Moment>{" "}
                <FontAwesomeIcon icon={faStar} className="iconRating" />{" "}
                {this.props.resComingsoon.vote_average}
                <br />
                Genre :{" "}
                {this.props.resComingsoon.genres?.map(
                  (res, i) => `${i === 0 ? res.name : `, ${res.name}`} `
                )}
              </Card.Text>

              <Button
                onClick={() => {
                  this.trailerTrending(this.props.resComingsoon.id);
                }}
                style={{
                  display: "block",
                  marginLeft: "auto",
                  marginRight: "auto",
                }}
              >
                TRAILER
              </Button>

              <Card.Title className="text-center" style={{ fontSize: "30px" }}>
                Overview
              </Card.Title>

              <Card.Text style={{ fontSize: "20px" }}>
                {this.props.resComingsoon.overview}
              </Card.Text>
            </Col>
          </Row>
        </Container>
        <TrailerTrending
          show={this.state.modalTrailer}
          onHide={this.closeTrailer}
          trailerOnReady={this.trailerOnReady}
        />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    resComingsoon: state.rGetDataComingsoon.GetComingsoon.detailComingsoonId,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    GetTrailerTrendingId: (result) =>
      dispatch({ type: "GET_TRAILER_COMINGSOON", data: result }),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(DetailComingsoon);
