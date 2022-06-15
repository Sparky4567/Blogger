import React, { Component } from "react";
import NetworkNavigator from "./navigator";
import NavComponent from "./navcomponent";
import StartTiktok from "./starttiktok";
import DesktopNav from "./desktopnav";
import TranslateComponent from "./translatecomponent";
import AdsenseComponent from "./adsense";

class PostComponent extends Component {
  constructor(props) {
    super(props);
    this.message = window.history.state.usr.message;
  }

  bionicPara() {
    const paragraphs = document.querySelectorAll(".card-text > p");

    paragraphs.forEach((element) => {
      const text = element.innerText;
      const words = text.split(" ");
      element.innerText = "";
      let newArray = [];
      for (let index = 0; index < words.length; index++) {
        const word = words[index];
        const wordLength = word.length;
        const firstWordHalf = word.slice(0, Math.floor(word.length / 2));
        const secondWordHalf = word.slice(
          Math.floor(word.length / 2),
          wordLength
        );
        const reconstructed = `<b>${firstWordHalf}</b>${secondWordHalf}`;
        newArray.push(reconstructed);
      }
      let textString = "";
      newArray.forEach((element, index) => {
        if (index == 0) {
          textString = textString + element;
        } else {
          textString = textString + ` ${element}`;
        }
      });
      const finalText = textString;
      element.innerHTML = "";
      element.innerHTML = finalText;
    });
  }

  bionicDiv() {
    const divs = document.querySelectorAll(".card-text > div");
    divs.forEach((element) => {
      const innerCode = String(element.innerHTML);
      if (!innerCode.includes(">")) {
        const text = element.innerText;
        const words = text.split(" ");
        element.innerText = "";
        let newArray = [];
        for (let index = 0; index < words.length; index++) {
          const word = words[index];
          const wordLength = word.length;
          const firstWordHalf = word.slice(0, Math.floor(word.length / 2));
          const secondWordHalf = word.slice(
            Math.floor(word.length / 2),
            wordLength
          );
          const reconstructed = `<b>${firstWordHalf}</b>${secondWordHalf}`;
          newArray.push(reconstructed);
        }
        let textString = "";
        newArray.forEach((element, index) => {
          if (index == 0) {
            textString = textString + element;
          } else {
            textString = textString + ` ${element}`;
          }
        });
        const finalText = textString;
        element.innerHTML = "";
        element.innerHTML = finalText;
      }
    });
  }

  componentDidMount() {
    window.scrollTo(0, 0);
    this.bionicPara();
    this.bionicDiv();
  }

  render() {
    return (
      <div>
        <DesktopNav />
        <TranslateComponent />
        <AdsenseComponent />
        <div className="col-lg-10 col-md-10 col-sm-12 col-xs-12 mx-auto align-items-center py-4 mb-4">
          <div className="card my-4">
            <div className="card-body">
              <h4 className="card-title my-4">{this.message.title}</h4>
              <p
                className="card-text"
                dangerouslySetInnerHTML={{
                  __html: this.message.content,
                }}
              ></p>
            </div>
          </div>
          <StartTiktok />
          <NetworkNavigator status={window.navigator.onLine} />
          <NavComponent />
        </div>
      </div>
    );
  }
}

export default PostComponent;
