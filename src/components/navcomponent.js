import React, { Component } from "react";

class NavComponent extends Component {
  constructor(props) {
    super(props);
    this.navStyle = {
      backgroundColor: `#333`,
      opacity: `0.7`,
      color: `white`,
    };
  }

  componentDidMount() {}

  render() {
    return (
      <div className="row text-center fixed-bottom" style={this.navStyle}>
        <div className="col-lg-4 col-md-4 col-sm-4 col-xs-4"></div>
        <div className="col-lg-4 col-md-4 col-sm-4 col-xs-4"></div>
        <div className="col-lg-4 col-md-4 col-sm-4 col-xs-4"></div>
      </div>
    );
  }
}

export default NavComponent;
