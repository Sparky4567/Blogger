import React, { Component } from "react";
import DesktopNav from "./desktopnav";
import LoadingComponent from "./loading";
import NavComponent from "./navcomponent";
import NetworkNavigator from "./navigator";

class PodcastComponent extends Component {
  constructor(props) {
    super(props);
    this.apiUrl = `https://media.artefaktas.workers.dev/`;
    this.state = {
      data: null,
      anchor: null,
    };
    this.settings = {
      title: `Instagram vaizdo įrašai`,
      podcastTitle: `Artefaktas Podcast`,
      errorMessage: `Šiuo metu vaizdo įrašų nėra`,
      anchorError: `Interneto ryšio klaida`,
      zeroEpisodes: `Šiuo metu naujų epizodų nėra`,
    };
    this.embedStyle = `width:80%;display:block;margin-left:auto;margin-right:auto;`;
    this.embeLink = `https://anchor.fm/artefaktas/embed`;
    this.rssLink = `https://anchor.fm/s/6a273b60/podcast/rss`;
    this.imageLink = `https://d3t3ozftmdmh3i.cloudfront.net/production/podcast_uploaded/17709560/17709560-1630657386733-58d1db57ca9ae.jpg`;
    this.anchorLink = `https://anchor.fm/artefaktas`;
  }

  mainFunction() {
    fetch(this.rssLink)
      .then((d) => d.text())
      .then((str) => new window.DOMParser().parseFromString(str, "text/xml"))
      .then((data) => {
        let items = data.querySelectorAll("item");
        if (items.length) {
          this.setState({
            anchor: `<iframe src="${this.embeLink}" height="102px" style="${this.embedStyle}" frameborder="0" scrolling="no"></iframe>`,
          });
        } else {
          this.setState({
            anchor: `<br/><br/><h3>${this.settings.zeroEpisodes}</h3><br/><br/><img src="${this.imageLink}" style="${this.imageStyle}"></img>`,
          });
        }
      });
  }

  componentDidMount() {
    this.mainFunction();
    const fetchLink = this.apiUrl;
    async function getVideos() {
      const res = await fetch(fetchLink);
      const jsonData = await res.json();
      return jsonData;
    }

    getVideos().then((jsonData) => {
      this.setState({ data: jsonData.data });
    });
  }

  render() {
    return (
      <div>
        <DesktopNav />
        <div className="row my-4 py-4" key={0}>
          <div className="col-lg-10 col-md-10 col-sm-12 col-xs-12 mx-auto align-items-center">
            <div className="card my-4">
              <div className="card-body">
                <h2 className="card-title">{this.settings.podcastTitle}</h2>
                {this.state.anchor !== null ? (
                  <p
                    dangerouslySetInnerHTML={{ __html: this.state.anchor }}
                  ></p>
                ) : (
                  <LoadingComponent />
                )}
              </div>
            </div>
          </div>
        </div>
        <NavComponent />
        <NetworkNavigator />
      </div>
    );
  }
}

export default PodcastComponent;
