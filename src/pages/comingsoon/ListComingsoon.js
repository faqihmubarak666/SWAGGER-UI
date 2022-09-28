import React from "react";
import { Card, Col, Container, Row, Image } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import Rotate from "react-reveal/Rotate";
import "../../style/listComingsoon.css";

const ListComingsoon = (props) => {
  const { listComingsoon, detailComingsoon } = props;
  const navigate = useNavigate();
  return (
    <div className="comingsoon">
      <Container>
        <br />
        <br />
        <h1 className="text-white">COMING SOON...</h1>
        <Row>
          {listComingsoon.map((res) => (
            <Col md={4} className="movieWrapper" id="comingsoon">
              <Rotate bottom right>
                <Card
                  className="cardListComingsoon"
                  onClick={() => {
                    navigate("/detail-comingsoon");
                    detailComingsoon(res.id);
                  }}
                >
                  <Image
                    src={`${process.env.REACT_APP_URL_IMAGE}${res.poster_path}`}
                    alt="POSTER"
                    className="imagesComingsoon"
                  />
                  <div className="cardTitleComingsoon bg-dark">
                    <div className="p-2 m-1 text-white">
                      <Card.Title className="text-center">
                        {res.original_title}
                      </Card.Title>
                    </div>
                  </div>
                </Card>
              </Rotate>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default ListComingsoon;
