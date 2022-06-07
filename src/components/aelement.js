import React, { Component } from "react";
import { Link } from "react-router-dom";
class Aelement extends Component {
  constructor(props) {
    super(props);
    this.readMoreText = `Skaityti daugiau`;
    this.id = this.props.id;
    this.post = this.props.post;
  }

  render() {
    return (
      <Link
        to={{
          pathname: `/posts/${this.id}`,
        }}
        state={{ message: this.post }}
        data-post={this.post}
        className="btn btn-lg btn-dark postButton"
      >
        {this.readMoreText}
      </Link>
    );
  }
}

export default Aelement;
