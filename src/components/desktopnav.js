import React, { Component } from "react";

class DesktopNav extends Component {
  constructor(props) {
    super(props);
    this.settings = {
      homePageTitle: "Pagrindinis",
      homePageLink: "/",
      brandTitle: "Artefaktas Reader",
      podcastTitle: "Tinklalaidė",
      podcastLink: "/#/podcast",
      twitterTitle: "Twitter",
      twitterLink: "/#/videos",
      tiktokTitle: "Tiktok",
      tiktokLink: "/#/tiktok",
      contactsTitle: "Kontaktai",
      contactsLink: "/#/contacts",
    };
  }

  render() {
    return (
      <div className="row py-4 d-none d-md-block">
        <div className="col-lg-10 col-md-10 col-sm-12 col-xs-12 mx-auto align-items-center">
          <nav className="navbar navbar-expand-sm navbar-light bg-light">
            <a className="navbar-brand" href={this.settings.homePageLink}>
              {this.settings.brandTitle}
            </a>
            <button
              className="navbar-toggler d-lg-none"
              type="button"
              data-toggle="collapse"
              data-target="#collapsibleNavId"
              aria-controls="collapsibleNavId"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="collapsibleNavId">
              <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
                <li className="nav-item active">
                  <a className="nav-link" href={this.settings.homePageLink}>
                    {this.settings.homePageTitle}{" "}
                    <span className="sr-only">(current)</span>
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href={this.settings.podcastLink}>
                    {this.settings.podcastTitle}
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href={this.settings.twitterLink}>
                    {this.settings.twitterTitle}
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href={this.settings.tiktokLink}>
                    {this.settings.tiktokTitle}
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href={this.settings.contactsLink}>
                    {this.settings.contactsTitle}
                  </a>
                </li>
              </ul>
            </div>
          </nav>
        </div>
      </div>
    );
  }
}

export default DesktopNav;
