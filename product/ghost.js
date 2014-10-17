#!/usr/bin/node

require('fs').symlinkSync('/usr/lib/node_modules/ghost/content', '/var/ghost');

require('ghost')({config: '/etc/ghost/config.js'}).then(function(ghost) {
    process.env.NANO_URL && (ghost.config.url = process.env.NANO_URL);

    ghost.start();
});
