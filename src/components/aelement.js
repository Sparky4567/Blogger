import React, { Component } from "react";
import { Link } from "react-router-dom";
import { MDBBtn } from "mdb-react-ui-kit";
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
      >
        <MDBBtn className="btn btn-lg btn-dark postButton btn-rounded">
          <i className="fa fa-file"></i> {this.readMoreText}
        </MDBBtn>
      </Link>
    );
  }
}

export default Aelement;
