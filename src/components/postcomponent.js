import React, { Component } from "react";
import { Link } from "react-router-dom";

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
      <div className="col-lg-10 col-md-10 col-sm-12 col-xs-12 mx-auto align-items-center">
        <div className="card my-4" style={this.cardStyle}>
          <div className="card-body">
            <Link className="btn btn-lg btn-dark my-4" to={{ pathname: "/" }}>
              Grįžti į pagrindinį
            </Link>
            <h4 className="card-title">{this.message.title.$t}</h4>
            <p
              className="card-text"
              dangerouslySetInnerHTML={{
                __html: this.message.content.$t,
              }}
            ></p>
            <Link className="btn btn-lg btn-dark my-4" to={{ pathname: "/" }}>
              Grįžti į pagrindinį
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

export default PostComponent;
