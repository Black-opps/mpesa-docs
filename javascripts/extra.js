// Initialize Mermaid
document.addEventListener("DOMContentLoaded", function () {
  if (typeof mermaid !== "undefined") {
    mermaid.initialize({
      startOnLoad: true,
      theme: "dark",
      securityLevel: "loose",
      flowchart: {
        useMaxWidth: true,
        htmlLabels: true,
        curve: "basis",
      },
    });
    mermaid.contentLoaded();
  }
});
