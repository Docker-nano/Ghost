#!/usr/bin/node

require('ghost')().then(function(ghost) {
    if (process.env.NANO_URL) {
        console.log('Settings blog URL to: "' + process.env.NANO_URL  + '"...');
        ghost.config.set('url', process.env.NANO_URL);
    }

    console.log('Starting Ghost...');
    ghost.start();
});
