const installBtn = document.getElementById("buttonInstall");
let deferredPrompt;

// Logic for installing the PWA

// event handler to the `beforeinstallprompt` event
window.addEventListener("beforeinstallprompt", (event) => {
  event.preventDefault();
  installBtn.style.visibility = "visible";
  installBtn.textContent = "Click the button to install!";
  deferredPrompt = event;

  // click event handler on the `butInstall` element
  installBtn.addEventListener("click", () => {
    deferredPrompt.prompt();
    installBtn.setAttribute("disabled", true);
    installBtn.textContent = "Installed!";
    deferredPrompt.userChoice.then((choiceResult) => {
      if (choiceResult.outcome === "accepted") {
        console.log("User accepted the install prompt");
      } else {
        console.log("User dismissed the install prompt");
      }
      deferredPrompt = null;
    });
  });
});

// handler for the `appinstalled` event
window.addEventListener("appinstalled", (event) => {
  butInstall.textContent = "Successfully installed!";
  console.log("👍", "appinstalled", event);
});
