import React, { Component } from "react";
import NavComponent from "./navcomponent";
import NetworkNavigator from "./navigator";

class VideosComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: null,
    };
    this.apiUrl = `https://twitterapi.artefaktas.workers.dev/api`;
    this.videoStyle = {
      width: 100 + `%`,
      height: 300 + `px`,
    };
  }

  componentDidMount() {
    const fetchLink = this.apiUrl;
    async function getData() {
      const res = await fetch(fetchLink);
      const jsonData = await res.json();
      return jsonData;
    }

    getData().then((res) => {
      this.setState({ data: res });
    });
  }

  render() {
    return (
      <div>
        {this.state.data !== null
          ? this.state.data.map((tweet, ind) => {
              if (tweet.extended_entities !== undefined) {
                if (tweet.extended_entities.media !== undefined) {
                  if (
                    tweet.extended_entities.media[0].video_info !== undefined
                  ) {
                    if (
                      tweet.extended_entities.media[0].video_info.variants !==
                      undefined
                    ) {
                      if (
                        tweet.extended_entities.media[0].video_info
                          .variants[1] !== undefined
                      ) {
                        console.log(tweet);
                        const contentType =
                          tweet.extended_entities.media[0].video_info
                            .variants[1].content_type;
                        const videoSrc =
                          tweet.extended_entities.media[0].video_info
                            .variants[1].url;
                        return (
                          <div className="col-lg-10 col-md-10 col-sm-12 col-xs-12 mx-auto align-items-center">
                            <div className="card my-4">
                              <div className="card-body">
                                <h4 className="card-title mb-4">
                                  {tweet.text}
                                </h4>
                                <p>
                                  <video
                                    style={this.videoStyle}
                                    controls
                                    key={ind}
                                    poster={
                                      tweet.extended_entities.media[0].media_url
                                    }
                                  >
                                    <source src={videoSrc} type={contentType} />
                                    Your browser does not support the video tag.
                                  </video>
                                </p>
                              </div>
                            </div>
                          </div>
                        );
                      }
                    }
                  }
                }
              }
            })
          : "Loading"}
        <NetworkNavigator />
        <NavComponent />
      </div>
    );
  }
}

export default VideosComponent;
