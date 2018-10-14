FROM scratch
MAINTAINER Bilge <bilge@scriptfusion.com>

ADD	rootfs.tar.xz	/

COPY	ghost.js	            /usr/bin/ghost
COPY	config.production.json	/
COPY    MigratorConfig.js       /

# Include Ghost modules for knex support.
ENV	PATH		$PATH:/usr/lib/node_modules/ghost/node_modules/.bin
ENV	NODE_PATH	/usr/lib/node_modules
ENV	NODE_ENV	production

CMD	["ghost"]
