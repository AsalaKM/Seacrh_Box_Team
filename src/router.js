
var home = require('./function');


function handler (request, response) {
  var method = request.method;
  var endpoint = request.url;
  response.writeHead(200, {"Content-Type": "text/html"});

  if (endpoint === "/" ) {
  home.homePage(request,response);


}else if (endpoint.includes("public")) {
home.serveStatic(endpoint,response);


}else if (endpoint === "/file") {
home.jsonFile(request, response);
}else {
 home.err(request ,response)
}

}
module.exports = handler;
