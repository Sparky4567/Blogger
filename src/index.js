import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import MaincComponent from "./components/maincomponent";
import PostComponent from "./components/postcomponent";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
const renderReactDom = () => {
  const root = ReactDOM.createRoot(document.getElementById("root"));
  root.render(
    <Router>
      <Routes>
        <Route exact path="/" element={<MaincComponent />} />
        <Route path="/posts/:id" element={<PostComponent />} />
      </Routes>
    </Router>
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
