alert("Enter");

const btn=  document.getElementsByClassName("rgba");

btn[0].addEventListener('click',display);
function display() {
  var x = document.getElementsByClassName("search");
  var y = document.getElementsByClassName("center");

  x[0].setAttribute("style","visibility:visible;");
  y[0].setAttribute("style","");
}