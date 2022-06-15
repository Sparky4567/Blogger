import React, { Component } from "react";

class AdsenseComponent extends Component {
  constructor(props) {
    super(props);
    this.adsenseLink = `https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-7918415788327185`;
  }

  componentDidMount() {
    if (!window.adsbygoogle) {
      const el = document.createElement("script");
      el.src = this.adsenseLink;
      el.defer = `defer`;
      el.crossOrigin = `anonymous`;
      document.body.appendChild(el);
    }
  }

  render() {
    return <div></div>;
  }
}

export default AdsenseComponent;
