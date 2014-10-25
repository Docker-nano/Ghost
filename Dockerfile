FROM dockernano/node.js:latest
MAINTAINER Bilge <bilge@scriptfusion.com>

# Install and run patch to always compile native Node modules from source.
COPY	in/*.patch		/root/buildroot/patches/
RUN	patch -p0 -d buildroot -i ~/buildroot/patches/*

# Link Ghost content to memorable location during post_build.
RUN	echo ln -s /usr/lib/node_modules/ghost/content var/ghost >> buildroot/post_build.sh

COPY	in/buildroot.conf	/root/buildroot/.config
