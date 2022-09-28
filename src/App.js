import React, { Component } from "react";
import NavigationBar from "./components/NavigationBar";
import "./style/landingPage.css";

class App extends Component {
  render() {
    return (
      <div>
        <div className="myBG">
          <NavigationBar />
        </div>
      </div>
    );
  }
}
export default App;
