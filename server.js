const express = require("express");
const shell = require('shelljs')
const app = express();
const archiver = require('archiver');

app.use(express.urlencoded({ extended: true }));


app.get('/', function() {
  

function zipDirectory(source, out) {
  const archive = archiver('zip', { zlib: { level: 9 }});
  const stream = fs.createWriteStream(out);

  return new Promise((resolve, reject) => {
    archive
      .directory(source, false)
      .on('error', err => reject(err))
      .pipe(stream)
    ;

    stream.on('close', () => resolve());
    archive.finalize();
  });
}

});


const port = process.env.PORT || 3001;

app.listen(3000, "127.0.0.1", function() {
	var backupM = function backupMongoDB() {
		shell.exec('mongodump --host=127.0.0.1 --port=27017 --out=D:/backups/');
		zipDirectory('D:/backups/', 'D:/backups.zip');
	}
	setInterval(backupM, 1000 * 15);
});