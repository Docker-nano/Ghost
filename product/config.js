// Documentation can be found at http://support.ghost.org/config/

module.exports = {
    production: {
        url: 'http://my-ghost-blog.com',
        mail: {
            transport: 'SMTP',
            options: {
                host: '172.17.42.1'
            }
        },
        database: {
            client: 'sqlite3',
            connection: {
                filename: '/var/ghost/data/ghost.db'
            },
            debug: false
        },

        server: {
            host: '0.0.0.0',
            port: '2368'
        }
    }
};
