(()=>{var t,e=document.getElementById("buttonInstall");window.addEventListener("beforeinstallprompt",(function(n){n.preventDefault(),e.style.visibility="visible",e.textContent="Click the button to install!",t=n,e.addEventListener("click",(function(){t.prompt(),e.setAttribute("disabled",!0),e.textContent="Installed!",t.userChoice.then((function(e){"accepted"===e.outcome?console.log("User accepted the install prompt"):console.log("User dismissed the install prompt"),t=null}))}))})),window.addEventListener("appinstalled",(function(t){butInstall.textContent="Successfully installed!",console.log("👍","appinstalled",t)}))})();