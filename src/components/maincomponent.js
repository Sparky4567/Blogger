import React, { Component } from "react";
import Aelement from "./aelement";
import LoadingComponent from "./loading";
import NavComponent from "./navcomponent";
import NetworkNavigator from "./navigator";
class MaincComponent extends Component {
  constructor(props) {
    super(props);
    this.fetchLink = "https://artefaktasnodeserver.herokuapp.com/posts";
    this.homeText = `Sugrįžti į pagrindinį`;
    this.caracLimit = 100;
    this.state = {
      data: null,
      selectedPost: null,
    };
    this.cardStyle = {
      width: 100 + "%",
    };
  }

  componentDidMount() {
    async function getData(passedParam) {
      const res = await fetch(passedParam);
      const jsonData = await res.json();
      return jsonData;
    }
    getData(this.fetchLink).then((dat) => {
      this.setState({ data: dat });
    });
  }

  render() {
    return (
      <div>
        {this.state.data !== null && this.state.data !== "" ? (
          this.state.data.map((post, index) => {
            return (
              <div className="row my-4 py-4" key={index}>
                <div
                  className="col-lg-10 col-md-10 col-sm-12 col-xs-12 mx-auto align-items-center"
                  key={index}
                >
                  <div className="card my-4" style={this.cardStyle}>
                    <div className="card-body">
                      <h4 className="card-title">{post.title}</h4>
                      <p
                        className="card-text"
                        dangerouslySetInnerHTML={{
                          __html: `${post.content.slice(
                            0,
                            this.caracLimit
                          )} ...`,
                        }}
                      ></p>
                      <Aelement id={post.id} post={post} />
                    </div>
                  </div>
                </div>
              </div>
            );
          })
        ) : (
          <LoadingComponent />
        )}
        <NetworkNavigator status={window.navigator.onLine} />
        <NavComponent />
      </div>
    );
  }
}

export default MaincComponent;
