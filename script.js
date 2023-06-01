function resize(w, h, strin) {
  document.getElementById("u").textContent = "-:" + strin + ":-";
  document.getElementById("frame").height = h;
  document.getElementById("frame").width = w;
}

function boom() {
  var id = document.getElementById("link").value;
  if(!id)
  id="https://bing.com";
  document.getElementById("frame").src = id;
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}
