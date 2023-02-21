import consumer from "channels/consumer"

let resetFunction;
let timer = 0;

consumer.subscriptions.create("AppearanceChannel", {
  initialized() {},

  connected() {
    // Called when the subscription is ready for use on the server
    console.log("Connected");
    resetFunction = () => this.resetTimer(this.uninstall);
    this.install();
    window.addEventListener("turbo:load", () => this.resetTimer());
  },

  disconnected() {
    // Called when the subscription has been terminated by the server
    console.log("Disconnected");
    this.uninstall();
  },

  rejected() {
    // Called when the subscription is rejected by the server
    console.log("Rejected");
    this.uninstall();
  },

  received(data) {
    // Called when there's incoming data on the websocket for this channel
  },

  online() {
    console.log("online");
    this.perform("online");
  },

  away() {
    console.log("away");
    this.perform("away");
  },

  offline() {
    console.log("offline");
    this.perform("offline");
  },

  install() {
    console.log("install");
    window.removeEventListener("load", resetFunction);
    window.removeEventListener("DOMContentLoaded", resetFunction);
    window.removeEventListener("click", resetFunction);
    window.removeEventListener("keydown", resetFunction);

    window.addEventListener("load", resetFunction);
    window.addEventListener("DOMContentLoaded", resetFunction);
    window.addEventListener("click", resetFunction);
    window.addEventListener("keydown", resetFunction);

    this.resetTimer()
  },

  uninstall() {
    const shouldRun = document.getElementById("appearance_channel");
    if (!shouldRun) {
      clearTimeout(timer);
      this.perform("offline");
    }
  },

  resetTimer() {
    this.uninstall();
    const shouldRun = document.getElementById("appearance_channel");
    if (!!shouldRun) {
      this.online();
      clearTimeout(timer);
      const timeInSeconds = 5;
      const milliseconds = 1000;
      const timeInMilliseconds = timeInSeconds * milliseconds;

      timer = setTimeout(this.away.bind(this), timeInMilliseconds);
      }
  },
});
