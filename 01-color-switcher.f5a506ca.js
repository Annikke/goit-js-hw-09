!function(){var t,e=document.querySelector("button[data-start]"),n=document.querySelector("button[data-stop]"),a=document.querySelector("body");function d(){var t="#".concat(Math.floor(16777215*Math.random()).toString(16));a.style.backgroundColor=t}n.disabled=!0,e.addEventListener("click",(function(){e.disabled=!0,n.disabled=!1,t=setInterval(d,1e3)})),n.addEventListener("click",(function(){e.disabled=!1,n.disabled=!0,clearInterval(t)}))}();
//# sourceMappingURL=01-color-switcher.f5a506ca.js.map
