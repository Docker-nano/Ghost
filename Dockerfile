FROM scratch
MAINTAINER Bilge <bilge@scriptfusion.com>

ADD	rootfs.tar.xz	/

COPY	ghost.js	/usr/bin/ghost
COPY	config.js	/etc/ghost/

ENV	NODE_PATH	/usr/lib/node_modules
ENV	NODE_ENV	production

CMD	["/usr/bin/ghost"]
