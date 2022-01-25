import React, { Component } from "react";

class FooterItem extends Component {
  render() {
    return (
      <li>
        <a className="text-muted" href={this.props.line.href}>
          {this.props.line.value}
        </a>
      </li>
    );
  }
}

export default FooterItem;
