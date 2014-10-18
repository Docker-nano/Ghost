FROM dockernano/node.js
MAINTAINER Bilge <bilge@scriptfusion.com>

RUN	echo ln -s /usr/lib/node_modules/ghost/content var/ghost >> buildroot/post_build.sh

COPY	in/buildroot.conf	/root/buildroot/.config
