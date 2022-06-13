import React, { Component } from "react";
import DesktopNav from "./desktopnav";
import NavComponent from "./navcomponent";
import TranslateComponent from "./translatecomponent";

class ContactComponent extends Component {
  constructor(props) {
    super(props);
    this.settings = {
      title: `Contacts`,
      email: `Email: admin@artefaktas.eu`,
      website: `Website: https://www.artefaktas.eu`,
    };
  }

  render() {
    return (
      <div>
        <DesktopNav />
        <TranslateComponent />
        <div className="col-lg-10 col-md-10 col-sm-12 col-xs-12 mx-auto align-items-center">
          <div className="card my-4">
            <div className="card-body">
              <h4 className="card-title">{this.settings.title}</h4>
              <p>{this.settings.email}</p>
              <p>{this.settings.website}</p>
            </div>
          </div>
        </div>
        <NavComponent />
      </div>
    );
  }
}

export default ContactComponent;
