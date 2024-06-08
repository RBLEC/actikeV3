
// UMAMI Tracking for BlecWeb
(function() {
  function loadUmamiScript(id) {
    var script = document.createElement("script");
    script.async = true;
    script.src = "https://umami.blecweb.synology.me/script.js";
    script.setAttribute("data-website-id", id);
    document.head.appendChild(script);
  }

  loadUmamiScript("86e35c44-7c65-4e71-a783-943d67ff4cdb");// site devveloppement
  loadUmamiScript("ebec147d-dcc7-438a-bb81-25ba47a8b446");
  loadUmamiScript("b78a6082-227e-4880-878e-93ca0c54f4f2");
});