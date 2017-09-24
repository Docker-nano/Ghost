module.exports = {
    database: {
        client: 'sqlite3',
        connection: {
            filename: '/var/ghost/data/ghost.db'
        }
    },
    migrationPath: '/usr/lib/node_modules/ghost/core/server/data/migrations',
    currentVersion: require('/usr/lib/node_modules/ghost/core/server/utils/ghost-version.js').safe
};
