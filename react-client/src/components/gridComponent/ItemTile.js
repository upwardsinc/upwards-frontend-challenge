import React, { Component } from "react";

class ItemTile extends Component {
  render() {
    return (
      <div className="">
        <div className="card mb-4 box-shadow">
          <h2 className="overlay">
            <p>Rock</p>
            <p>10 songs</p>
            <a
              target="_blank"
              href="https://music.apple.com/us/album/dee-gees-hail-satin-foo-fighters-live/1575914977?uo=2"
              className="btn btn-sm btn-outline-secondary"
            >
              $9.99 on iTunes
            </a>
          </h2>
          <img
            className="card-img-top"
            src="https://is2-ssl.mzstatic.com/image/thumb/Music125/v4/f8/ed/83/f8ed8330-50c0-db44-a92b-8cbddc8197db/886449425303.jpg/170x170bb.png"
            alt="Card image caption"
          />
          <div className="card-body">
            <p className="card-text">
              <strong className="trunc">
                Dee Gees / Hail Satin - Foo Fighters / Live - Foo Fighters
              </strong>
              <span className="trunc">Foo Fighters</span>
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default ItemTile;
