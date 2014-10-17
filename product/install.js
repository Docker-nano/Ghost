var
    https = require('follow-redirects').https,
    fs = require('fs'),
    zip = require('adm-zip'),

    ghost = {
        source: {
            remote: 'https://github.com/TryGhost/Ghost/releases/download/0.5.2/Ghost-0.5.2.zip',
            local : 'ghost.zip'
        },
        destination: 'ghost'
    }
;

function download(url, dest, cb) {
    var file = fs.createWriteStream(dest);
    https.get(url, function(response) {
        response.pipe(file);
        file.on('finish', function() {
            file.close(cb);
        });
    }).on('error', function(e) {
        console.log('Download error: ' + e);
    });
}

function done() {
    console.log('done.');
}

process.stdout.write('Downloading ' + ghost.source.remote + '... ');
download(ghost.source.remote, ghost.source.local, function() {
    done();

    process.stdout.write('Extracting ' + ghost.source.local + '... ');
    new zip(ghost.source.local).extractAllTo(ghost.destination);
    done();

    fs.unlinkSync(ghost.source.local);
});
