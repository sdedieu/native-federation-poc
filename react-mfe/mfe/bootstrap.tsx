import React from "react";
import ReactDOM from "react-dom";
import { App } from "./app";

class MfeReact extends HTMLElement {
  connectedCallback() {
    ReactDOM.render(
      <React.StrictMode>
        <App />
      </React.StrictMode>,
      this
    );
  }
}

customElements.define("mfe-react-web-component", MfeReact);

export function Mfe() {
  return <mfe-react-web-component></mfe-react-web-component>;
}
