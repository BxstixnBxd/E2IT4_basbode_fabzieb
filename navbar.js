fetch("navbar.html")
  .then(response => response.text())
  .then(data => {
    document.getElementById("navbar-wrapper").innerHTML = data;
  });