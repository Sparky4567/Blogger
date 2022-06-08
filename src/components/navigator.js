import React, { Component } from "react";
import swal from "sweetalert";

class NetworkNavigator extends Component {
  constructor(props) {
    super(props);
    this.state = {
      networkStatus: null,
    };
    this.networkStatus = this.props.status;
    this.statusCheck = this.statusCheck.bind(this);
  }

  swalFire(passedStatus) {
    swal(passedStatus);
  }

  statusCheck() {
    if (this.networkStatus === false) {
      this.swalFire({
        icon: "info",
        title: "Dėmesio",
        text: "Praradote interneto ryšį... Aplikacija veiks ir toliau, tačiau negausite naujausių pranešimų",
      });
    }
  }

  componentDidUpdate() {
    this.statusCheck();
  }

  render() {
    return <div></div>;
  }
}

export default NetworkNavigator;
