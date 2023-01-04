import React, { Component } from "react";
import DesktopNav from "./desktopnav";
import LoadingComponent from "./loading";
import NavComponent from "./navcomponent";
import NetworkNavigator from "./navigator";
import StartTiktok from "./starttiktok";
import TranslateComponent from "./translatecomponent";

class TiktokComponent extends Component {
  constructor(props) {
    super(props);
    this.fetchLink = `https://tiktokapi.artefaktas.eu/api`;
    this.state = {
      tiktokdata: null,
      tiktokloaded: null,
    };
  }

  componentDidMount() {
    const fetchUrl = this.fetchLink;
    async function fetchTikTok() {
      const res = await fetch(fetchUrl);
      const jsonRes = await res.json();
      return jsonRes;
    }

    fetchTikTok().then((dat) => {
      this.setState({ tiktokdata: dat, tiktokloaded: true });
    });
  }

  render() {
    return (
      <div>
        <DesktopNav />
        <TranslateComponent />
        {this.state.tiktokdata !== null ? (
          this.state.tiktokdata.data !== undefined ? (
            this.state.tiktokdata.data.videos !== undefined ? (
              this.state.tiktokdata.data.videos.map((video, ind) => {
                return (
                  <div
                    className="col-lg-10 col-md-10 col-sm-12 col-xs-12 mx-auto align-items-center text-center"
                    key={ind}
                  >
                    <div className="card my-4">
                      <div className="card-body">
                        <h4 className="card-title mb-4">{video.title}</h4>
                        <p
                          dangerouslySetInnerHTML={{ __html: video.embed_html }}
                        ></p>
                      </div>
                    </div>
                  </div>
                );
              })
            ) : (
              ""
            )
          ) : (
            ""
          )
        ) : (
          <LoadingComponent />
        )}
        <NetworkNavigator />
        {this.state.tiktokloaded !== null ? <StartTiktok /> : ""}
        <NavComponent />
      </div>
    );
  }
}

export default TiktokComponent;
