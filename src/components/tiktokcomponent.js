import React, { Component } from "react";
import LoadingComponent from "./loading";
import NavComponent from "./navcomponent";
import NetworkNavigator from "./navigator";
import StartTiktok from "./starttiktok";

class TiktokComponent extends Component {
  constructor(props) {
    super(props);
    this.fetchLink = `https://artefaktasnodeserver.herokuapp.com/tiktokvideos`;
    this.state = {
      tiktokdata: null,
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
      this.setState({ tiktokdata: dat });
    });
  }

  render() {
    return (
      <div>
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
        <StartTiktok />
        <NavComponent />
      </div>
    );
  }
}

export default TiktokComponent;