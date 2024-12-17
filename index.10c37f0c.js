document.querySelectorAll("li").forEach(function(e){if(e.querySelector("ul")){var n=e.firstChild,t=document.createElement("span");n.parentNode.insertBefore(t,n),t.appendChild(n),t.addEventListener("click",function(n){n.stopPropagation();var t=e.querySelector("ul");t&&(t.style.display="none"===t.style.display?"block":"none")})}});
//# sourceMappingURL=index.10c37f0c.js.map
