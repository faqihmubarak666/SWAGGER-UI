import React from "react";
import { Modal, Button } from "react-bootstrap";
import { connect } from "react-redux";
import "../../style/detailTrending.css";
import YouTube from "react-youtube";
import ResponsiveEmbed from "react-responsive-embed";

const TrailerTrending = (props) => {
  const { show, resTrailer, onHide, trailerOnReady } = props;

  const opts = {
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
            <ResponsiveEmbed allowFullScreen>
              <YouTube
                videoId={resTrailer.key}
                opts={opts}
                onReady={trailerOnReady}
              />
            </ResponsiveEmbed>
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
    resTrailer: state.rGetDataTrending.GetTrending.trailerTrendingId,
  };
};

export default connect(mapStateToProps)(TrailerTrending);
