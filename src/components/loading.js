import React, { Component } from "react";
import NetworkNavigator from "./navigator";

class LoadingComponent extends Component {
  constructor(props) {
    super(props);
    this.message = this.props.message;
    this.spinnerStyle = {
      width: 10 + `rem`,
      height: 10 + `rem`,
    };
  }

  render() {
    return (
      <div className="col-lg-10 col-md-10 col-sm-12 col-xs-12 mx-auto align-items-center py-4 mb-4">
        <div className="card my-4">
          <div className="card-body">
            <div className="d-flex justify-content-center">
              {this.message !== "undefined" ? (
                <p>{this.message}</p>
              ) : (
                <div
                  className="spinner-grow text-warning"
                  style={this.spinnerStyle}
                  role="status"
                >
                  <span className="visually-hidden">...</span>
                </div>
              )}
            </div>
          </div>
        </div>
        <NetworkNavigator status={window.navigator.onLine} />
      </div>
    );
  }
}

export default LoadingComponent;
