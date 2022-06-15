import React, { Component } from "react";

class Banner extends Component {
  constructor(props) {
    super(props);
    this.message = `Some images are taken from pixabay.com, unsplash.com and pexels.com`;
    this.info = `Information`;
  }

  render() {
    return (
      <div>
        <div className="row my-4 py-4">
          <div className="col-lg-10 col-md-10 col-sm-12 col-xs-12 mx-auto align-items-center py-4 mb-4">
            <div className="card my-4">
              <div className="card-body">
                <h4 className="card-title">{this.info}</h4>
                <p className="card-text">{this.message}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Banner;
