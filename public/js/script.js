function make_connection(url, cb) {
    var xhr = new XMLHttpRequest();
    let objct;
    xhr.onreadystatechange = function () {

        if (xhr.readyState == 4 && xhr.status == 200) {
            objct = JSON.parse(xhr.responseText);
            console.log(objct.projects);
            if (typeof cb == 'function')
                cb(objct);

        }

    }
    xhr.open("GET", url, true);
    xhr.send();

}

make_connection("/file",function (obj) {
  var inp = document.getElementById("search-inp");
  inp.addEventListener("input", function(){
  var newArr=  obj.filter(function (item) {
    // console.log(inp.value);
      return item.name.startsWith(inp.value.charAt(0).toUpperCase()+inp.value.slice(1));

    })
    // console.log(newArr);
    var list = document.getElementById("data");
    list.textContent="";
    newArr.map(function(item){
      // var data = document.getElementById("data");

      var items = document.createElement("option");
      // items.setAttribute("value",item)
      items.textContent = item.name;
      list.appendChild(items);
      console.log(items);
    })

  });
});
