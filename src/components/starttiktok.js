import React, { Component } from "react";

class StartTiktok extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    let el = document.createElement("script");
    el.src = "https://www.tiktok.com/embed.js";
    el.defer = "defer";
    document.body.appendChild(el);
  }

  render() {
    return <div></div>;
  }
}

export default StartTiktok;
