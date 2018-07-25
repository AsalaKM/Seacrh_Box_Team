var fs = require('fs');
var path = require('path');
function homePage(request, response) {
  response.writeHead(200, { "Content-Type": "text/html" });

  fs.readFile(path.join(__dirname, '..', 'public', 'index.html'), function (error, file) {
    if (error) {
      console.log(error);
      return;
    }
    response.end(file);
  });
}

function serveStatic(endpoint, response) {
  // type is get the type of file the request need
  const type = endpoint.split(".")[1];

  // extension is get ContentType  of file the request need
  let extension = {
    "css": "text/css",
    "js": "application/javascript",
    "jpeg":"image/jpeg"
    }
  response.writeHead(200, { "Content-Type": extension[type] });


  fs.readFile(path.join(__dirname, '..',endpoint), function (error, file) {
    if (error) {
      console.log(error);
      return;
    }response.end(file);
  });


}

function jsonFile(request, response) {

  response.writeHead(200, { "Content-Type": "application/json" });

  fs.readFile(path.join(__dirname , 'names.json'), function (error, file) {
    if (error) {
      console.log(error);
      return;
    }

    response.end(file);
  });
}
function err(request, response) {
  response.writeHead(404, { "Content-Type": "text/html" });

  fs.readFile(path.join(__dirname , '..', 'public', 'Error.html'), function (error, file) {
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
