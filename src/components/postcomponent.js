import React, { Component } from "react";
import NetworkNavigator from "./navigator";
import NavComponent from "./navcomponent";
class PostComponent extends Component {
  constructor(props) {
    super(props);
    this.message = window.history.state.usr.message;
  }

  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render() {
    return (
      <div className="col-lg-10 col-md-10 col-sm-12 col-xs-12 mx-auto align-items-center py-4">
        <div className="card my-4">
          <div className="card-body">
            <h4 className="card-title">{this.message.title.$t}</h4>
            <p
              className="card-text"
              dangerouslySetInnerHTML={{
                __html: this.message.content.$t,
              }}
            ></p>
          </div>
        </div>
        <NetworkNavigator status={window.navigator.onLine} />
        <NavComponent />
      </div>
    );
  }
}

export default PostComponent;
