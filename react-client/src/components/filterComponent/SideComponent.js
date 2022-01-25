import React, { Component } from "react";

class SideComponent extends Component {
  constructor() {
    super();
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {

  }

  render() {
    let filterLinks = [];

    filterLinks.push(
        <li className="sidebar-brand">
          <a href="#" onClick={this.handleClick}>
            AC/DC (10)
          </a>
        </li>
    );

    return (
        <div>
          <h4 className="sidebar-title">{this.props.title}</h4>
          {filterLinks}
        </div>
    );
  }
}

export default SideComponent;
