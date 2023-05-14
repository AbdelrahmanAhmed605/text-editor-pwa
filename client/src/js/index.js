import { Workbox } from "workbox-window";
import Editor from "./editor";
import "./database";
import "../css/style.css";
import "./header";

const main = document.querySelector("#main");
main.innerHTML = "";

const loadSpinner = () => {
  const spinner = document.createElement("div");
  spinner.classList.add("spinner");
  spinner.innerHTML = `
  <div class="loading-container">
  <div class="loading-spinner" />
  </div>
  `;
  main.appendChild(spinner);
};

const editor = new Editor();

if (typeof editor === "undefined") {
  loadSpinner();
}

// Add logic for Hot Module Reloading
if (module.hot) {
  module.hot.accept((err) => {
    if (err) {
      console.error("Cannot apply HMR update.", err);
    }
  });
}

// Check if service workers are supported
if ("serviceWorker" in navigator) {
  // register workbox service worker
  const workboxSW = new Workbox("./service-worker.js");
  workboxSW.register();
} else {
  console.error("Service workers are not supported in this browser.");
}