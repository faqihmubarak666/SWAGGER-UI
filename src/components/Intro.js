import React, { Component } from "react";
import { Col, Container, Row, Button } from "react-bootstrap";
import TrendingContainer from "../pages/trending/TrendingContainer";
import ComingsoonContainer from "../pages/comingsoon/ComingsoonContainer";
import "../style/landingPage.css";

class Intro extends Component {
  render() {
    return (
      <>
        <div className="intro">
          <Container className="text-white text-center d-flex justify-content-center align-items-center ">
            <Row>
              <Col>
                <div className="tittle">NONTON GRATIS</div>
                <div className="tittle">TIDAK PAKAI KARCIS</div>
                <div className="introButton mt-4 text-center">
                  <Button variant="danger" href="#trending">
                    NONTON SEKARANG
                  </Button>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
        <div>
          <TrendingContainer />
        </div>
        <div>
          <ComingsoonContainer />
        </div>
      </>
    );
  }
}
export default Intro;
