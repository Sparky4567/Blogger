import React, { Component } from "react";

class TranslateComponent extends Component {
  constructor(props) {
    super(props);
    this.scriptUrl = `https://translate.google.com/translate_a/element.js`;
    this.state = {
      loaded: null,
    };
  }

  addClass() {
    const box = document.querySelectorAll(".goog-te-combo")[0];
    box.classList.add("form-control");
    box.classList.add("form-control-lg");
  }

  googleTranslateElementInit() {
    setTimeout(() => {
      new window.google.translate.TranslateElement(
        { pageLanguage: "lt" },
        "google_translate_element"
      );
      this.addClass();
    }, 800);
  }

  componentDidMount() {
    let el = document.createElement("script");
    el.src = this.scriptUrl;
    document.body.appendChild(el);
    this.googleTranslateElementInit();
  }

  render() {
    return (
      <div className="row py-4">
        <div className="col-lg-10 col-md-10 col-sm-12 col-xs-12 mx-auto">
          <div id="google_translate_element"></div>
        </div>
      </div>
    );
  }
}

export default TranslateComponent;
