import { Navbar, Container, Nav } from "react-bootstrap";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Intro from "./Intro";
import DetailTrending from "../pages/trending/DetailTrending";
import DetailComingsoon from "../pages/comingsoon/DetailComingsoon";
import { connect } from "react-redux";

const NavigationBar = (props) => {
  const { showBar } = props;
  return (
    <div>
      <BrowserRouter>
        <Navbar variant="dark">
          <Container>
            <Navbar.Brand href="/">FMTY FILM</Navbar.Brand>
            <Nav>
              <Nav.Link href="#trending">{showBar ? "" : "TRENDING"}</Nav.Link>
              <Nav.Link href="#comingsoon">
                {showBar ? "" : "COMING SOON"}
              </Nav.Link>
            </Nav>
          </Container>
        </Navbar>
        <Routes>
          <Route path="/" exact element={<Intro />} />
          <Route path="/detail-trending" element={<DetailTrending />} />
          <Route path="/detail-comingsoon" element={<DetailComingsoon />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    showBar: state.rGetDataTrending.GetTrending.showBar,
  };
};

export default connect(mapStateToProps)(NavigationBar);
