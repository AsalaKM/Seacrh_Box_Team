

const btnStart=  document.getElementsByClassName("rgba");

btnStart[0].addEventListener('click',display);
function display() {
  var search = document.getElementsByClassName("search");
  var searchbtn = document.getElementsByClassName("search-btn");
  search[0].setAttribute("style","visibility:visible;");
  searchbtn[0].setAttribute("style","visibility:hidden;");
}

const btnEnd=  document.getElementsByClassName("end");

btnEnd[0].addEventListener('click',undoDisplay);
function undoDisplay() {
  var search = document.getElementsByClassName("search");
  var searchbtn = document.getElementsByClassName("search-btn");

  search[0].setAttribute("style","visibility:hidden;");
  searchbtn[0].setAttribute("style","visibility:visible;");
}