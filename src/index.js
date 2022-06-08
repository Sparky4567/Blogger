import React from "react";
import ReactDOM from "react-dom/client";
import reportWebVitals from "./reportWebVitals";
import MaincComponent from "./components/maincomponent";
import PostComponent from "./components/postcomponent";
import { HashRouter, Route, Routes } from "react-router-dom";
import "mdb-react-ui-kit/dist/css/mdb.min.css";

const renderReactDom = () => {
  const root = ReactDOM.createRoot(document.getElementById("root"));
  root.render(
    <HashRouter>
      <Routes>
        <Route exact path="/" element={<MaincComponent />} />
        <Route path="/posts/:id" element={<PostComponent />} />
      </Routes>
    </HashRouter>
  );
};

if (window.cordova) {
  document.addEventListener(
    "deviceready",
    () => {
      renderReactDom();
    },
    false
  );
} else {
  renderReactDom();
}

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
