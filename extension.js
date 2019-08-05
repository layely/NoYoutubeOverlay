(function() {
  let styles = `
    .ytp-ce-element {
        visibility: hidden !important;
    }
    `;

  let styleSheet = document.createElement("style");
  styleSheet.type = "text/css";
  styleSheet.innerText = styles;
  document.head.appendChild(styleSheet);
})();
