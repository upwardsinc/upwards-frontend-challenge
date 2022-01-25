import React, { Component } from "react";
import ItemTile from "./ItemTile";
import Placeholder from "./Placeholder";

class Grid extends Component {
  render() {
    let skeleton = [];
    let counter = 9;
    while (counter--) {
      skeleton.push(<Placeholder />);
    }

    let title = this.props.query
      ? "Results for '" + this.props.query + "'"
      : "Current Top Hits";

    return (
      <div className="col-lg-9 col-sm-12 album bg-light">
        <div className="container">
          <div className="text-center row">
            <h3 className="grid-title">
              <strong>{title}</strong>
            </h3>
          </div>
          <div id="skeleton" className="row">
            {skeleton}
          </div>
          <div className="row">
            {<ItemTile />}
          </div>
        </div>
      </div>
    );
  }
}

export default Grid;
