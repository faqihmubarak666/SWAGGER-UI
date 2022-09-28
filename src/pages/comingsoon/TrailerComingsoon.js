import React from "react";
import { Modal, Button } from "react-bootstrap";
import { connect } from "react-redux";
import "../../style/detailTrending.css";
import YouTube from "react-youtube";

const TrailerComingsoon = (props) => {
  const { show, resTrailer, onHide, trailerOnReady } = props;

  const opts = {
    height: "390",
    width: "765",
    playerVars: {
      // https://www.youtube.com/watch?v=
      autoplay: 1,
    },
  };

  return (
    <div>
      {resTrailer !== undefined ? (
        <Modal size="lg" show={show}>
          <Modal.Body>
            <YouTube
              videoId={resTrailer.key}
              opts={opts}
              onReady={trailerOnReady}
            />
          </Modal.Body>
          <Modal.Footer>
            <Button
              onClick={onHide}
              style={{
                backgroundColor: "cornflowerblue",
                display: "block",
                marginLeft: "auto",
                marginRight: "auto",
              }}
            >
              Close
            </Button>
          </Modal.Footer>
        </Modal>
      ) : (
        <Modal size="lg" show={show}>
          <Modal.Body className="text-center">
            <h3>TRAILER NON AVAILABLE</h3>
          </Modal.Body>
          <Modal.Footer>
            <Button
              onClick={onHide}
              style={{
                backgroundColor: "cornflowerblue",
                display: "block",
                marginLeft: "auto",
                marginRight: "auto",
              }}
            >
              Close
            </Button>
          </Modal.Footer>
        </Modal>
      )}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    resTrailer: state.rGetDataComingsoon.GetComingsoon.trailerComingsoonId,
  };
};

export default connect(mapStateToProps)(TrailerComingsoon);
