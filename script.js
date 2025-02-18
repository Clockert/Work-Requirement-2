var saturnImage = document.querySelector("img");
saturnImage.onmouseover = function () {
  var modal = document.getElementById("myModal");
  modal.style.display = "block";
};

var closeBtn = document.getElementsByClassName("close")[0];
closeBtn.onclick = function () {
  var modal = document.getElementById("myModal");
  modal.style.display = "none";
};

window.onclick = function (event) {
  var modal = document.getElementById("myModal");
  if (event.target == modal) {
    modal.style.display = "none";
  }
};
