import React, { Component } from "react";
import { MDBBtn } from "mdb-react-ui-kit";
import { Link } from "react-router-dom";
class NavComponent extends Component {
  constructor(props) {
    super(props);
    this.navStyle = {
      backgroundColor: `#333`,
    };
  }

  render() {
    return (
      <div className="container-fluid">
        <div
          style={this.navStyle}
          className="row fixed-bottom py-3 text-center flex-row flex-nowrap scrollable"
        >
          <div className="col-4">
            <Link to={{ pathname: "/" }}>
              <MDBBtn className="btn btn-lg btn-light">
                <i className="fa fa-home"></i>
              </MDBBtn>
            </Link>
          </div>
          <div className="col-4">
            <Link to={{ pathname: "/podcast" }}>
              <MDBBtn className="btn btn-lg btn-light">
                <i className="fa fa-music"></i>
              </MDBBtn>
            </Link>
          </div>
          <div className="col-4">
            <Link to={{ pathname: "/videos" }}>
              <MDBBtn className="btn btn-lg btn-light">
                <i className="fa fa-twitter"></i>
              </MDBBtn>
            </Link>
          </div>
          <div className="col-4">
            <Link to={{ pathname: "/tiktok" }}>
              <MDBBtn className="btn btn-lg btn-light">
                <i className="fa fa-video-camera"></i>
              </MDBBtn>
            </Link>
          </div>
          <div className="col-4">
            <Link to={{ pathname: "/contacts" }}>
              <MDBBtn className="btn btn-lg btn-light">
                <i className="fa fa-address-card"></i>
              </MDBBtn>
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

export default NavComponent;
