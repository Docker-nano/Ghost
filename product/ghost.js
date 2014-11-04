#!/usr/bin/node

require('ghost')({config: '/etc/ghost/config.js'}).then(function(ghost) {
    process.env.NANO_URL && ghost.config.set({url: process.env.NANO_URL});

    ghost.start();
});
