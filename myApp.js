const express = require('express');
const helmet = require('helmet');
const app = express();

//CÓDIGO PERSONAL

//Evitar la utilizacion de la cabecera 'X-Powered-By: Express'
app.use(helmet.hidePoweredBy());

//Evitar la utilizacion de iframes para ataques
app.use(helmet.frameguard({action: 'deny'}));

//Evitar ataques XSS
app.use(helmet.xssFilter());

//noSniff
app.use(helmet.noSniff());

//Prevencion para internet explorer()
app.use(helmet.ieNoOpen());













































//Codigo dado
module.exports = app;
const api = require('./server.js');
app.use(express.static('public'));
app.disable('strict-transport-security');
app.use('/_api', api);
app.get("/", function (request, response) {
  response.sendFile(__dirname + '/views/index.html');
});
let port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Your app is listening on port ${port}`);
});
