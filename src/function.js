var fs = require('fs');
var path = require('path');

function homePage(request, response) {
  response.writeHead(200, { "Content-Type": "text/html" });

  fs.readFile(__dirname + '/../public/index.html', function (error, file) {
    if (error) {
      console.log(error);
      return;
    }

    response.end(file);
  });
}

function serveStatic(endpoint, response) {
  console.log("Hi");
  const type = endpoint.split(".")[1];
  let extension = {
    "css": "text/css",
    "js": "application/javascript"

  }
  response.writeHead(200, { "Content-Type": extension[type] });
  //const extension2=(type != html) ? '' : type;
  //console.log(type)

  fs.readFile(path.join(__dirname, '..', endpoint), function (error, file) {
    if (error) {
      console.log(error);
      return;
    }

    response.end(file);
  });
}

function jsonFile(request, response) {

  response.writeHead(200, { "Content-Type": "application/json" });

  fs.readFile(__dirname + '/names.json', function (error, file) {
    if (error) {
      console.log(error);
      return;
    }

    response.end(file);
  });
}

function err(request, response) {
  response.writeHead(404, { "Content-Type": "text/html" });

  fs.readFile(__dirname + '/../public/Error.html', function (error, file) {
    if (error) {
      console.log(error);
      return;
    }

    response.end(file);
  });
}


module.exports = {
  homePage,
  serveStatic,
  jsonFile,
  err
}
