const express = require("express");
const shell = require('shelljs')
const app = express();

app.use(express.urlencoded({ extended: true }));


app.get('/', function() {
  


});


const port = process.env.PORT || 3000;

app.listen(3000, "127.0.0.1", function() {
shell.exec('echo ok')
});