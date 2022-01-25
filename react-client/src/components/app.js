import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import "../../dist/styles.scss";
import $ from "jquery";
import Banner from "./bannerComponent/AppBanner";
import DataFactory from "../factory/data/musicData";
import Footer from "./footerComponent/Footers.js";
import Grid from "./gridComponent/ItemGrid.js";
import NavBar from "./navComponent/MainNav";
import SideBar from "./filterComponent/SideFilter";

class App extends Component {
  constructor() {
    super();
    this.state = {};
  }

  // initialize data
  setAppData() {
    let factory = new DataFactory();
    factory
      .getHits()
      .then((data) => {
        return data;
      })
      .catch((err) => {
        return err;
      });
  }

  componentWillMount() {
    this.setAppData();

    // default to showing all records
    this.setState({} );
  }

  componentDidMount() {
    $("#skeleton").fadeOut(250);
  }

  // TODO: handle filter
  filterHits(filters) {
    let matches = [];

    this.setState({ matches: matches });
  }

  // TODO: handle search
  searchHits(query) {
    let matches = [];

    this.setState({ matches: matches });
  }

  render() {
    return (
      <Router>
        <div>
          <NavBar onSearch={this.searchHits.bind(this)} />
          <Banner />
          <div className="row">
            <SideBar
              filterWithParams={this.filterHits.bind(this)}
              categories={[]}
              artists={[]}
            />
            <Grid query={this.state.query} matches={[]} />
          </div>
          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;
