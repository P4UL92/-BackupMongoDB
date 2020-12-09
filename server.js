const express = require("express");
const shell = require('shelljs')
const fs = require('fs')
const app = express();
const archiver = require('archiver');

app.use(express.urlencoded({ extended: true }));


app.get('/', function() {
  



});


const port = process.env.PORT || 3001;

app.listen(3000, "127.0.0.1", function() {

	

	var backupM = function backupMongoDB() {
		shell.exec('mongodump --host=127.0.0.1 --port=27017 --out=D:/backups/');

  const archive = archiver('zip', { zlib: { level: 9 }});
  const stream = fs.createWriteStream('D:/backups.zip');

  return new Promise((resolve, reject) => {
    archive
      .directory('D:/backups/', false)
      .on('error', err => reject(err))
      .pipe(stream)
    ;

    stream.on('close', () => resolve());
    archive.finalize();
  });

	};
	setInterval(backupM, 1000 * 15);
});