import React from "react";
import { Card, Col, Container, Row, Image } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import "../../style/listTrending.css";
import { useNavigate } from "react-router-dom";
import Rotate from "react-reveal/Rotate";
import Moment from "react-moment";

const ListTrending = (props) => {
  const { dataTrending, detailTrending } = props;
  const navigate = useNavigate();

  return (
    <div className="trending">
      <Container>
        <br />
        <br />
        <h1 className="text-white">TRENDING MOVIE</h1>
        <Row>
          {dataTrending.map((res) => (
            <Col md={4} className="movieWrapper" id="trending">
              <Rotate bottom left>
                <Card
                  className="cardListTrending"
                  onClick={() => {
                    navigate("/detail-trending");
                    detailTrending(res.id);
                  }}
                >
                  <Image
                    src={`${process.env.REACT_APP_URL_IMAGE}${res.poster_path}`}
                    alt="Image Poster"
                    className="imagesTrending"
                  />
                  <div className="cardTitleTrending bg-dark">
                    <div className="p-3 m-2 text-white">
                      <Card.Title className="text-center">
                        {res.title ? res.title : res.name}
                      </Card.Title>
                      <Card.Text className="text-left">
                        Release Date :{" "}
                        {res.release_date ? (
                          <Moment format="DD/MM/YYYY">
                            {res.release_date}
                          </Moment>
                        ) : (
                          <Moment format="DD/MM/YYYY">
                            {res.first_air_date}
                          </Moment>
                        )}
                      </Card.Text>
                      <Card.Text className="text-left">
                        Rating : {res.vote_average}{" "}
                        <FontAwesomeIcon icon={faStar} className="iconRating" />
                      </Card.Text>
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

export default ListTrending;
