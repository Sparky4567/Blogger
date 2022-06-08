import React, { Component } from "react";
import { Link } from "react-router-dom";
import NetworkNavigator from "./navigator";
import { MDBBtn } from "mdb-react-ui-kit";
class PostComponent extends Component {
  constructor(props) {
    super(props);
    this.message = window.history.state.usr.message;
    this.goBack = `Grįžti į pagrindinį`;
  }

  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render() {
    return (
      <div className="col-lg-10 col-md-10 col-sm-12 col-xs-12 mx-auto align-items-center">
        <div className="card my-4" style={this.cardStyle}>
          <div className="card-body">
            <Link to={{ pathname: "/" }}>
              <MDBBtn className="btn btn-lg btn-dark postButton btn-rounded my-4">
                <i className="fa fa-home"></i> {this.goBack}
              </MDBBtn>
            </Link>
            <h4 className="card-title">{this.message.title.$t}</h4>
            <p
              className="card-text"
              dangerouslySetInnerHTML={{
                __html: this.message.content.$t,
              }}
            ></p>
            <Link to={{ pathname: "/" }}>
              <MDBBtn className="btn btn-lg btn-dark postButton btn-rounded my-4">
                <i className="fa fa-home"></i> {this.goBack}
              </MDBBtn>
            </Link>
          </div>
        </div>
        <NetworkNavigator status={window.navigator.onLine} />
      </div>
    );
  }
}

export default PostComponent;
