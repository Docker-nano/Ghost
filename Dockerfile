FROM dockernano/node.js:6.9-LTS
MAINTAINER Bilge <bilge@scriptfusion.com>

COPY	in/buildroot.conf	/root/buildroot/.config
COPY	in/rootfs_overlay	/root/buildroot/rootfs_overlay

# Fix SQLite permission error when building as root.
RUN     echo 'unsafe-perm = true' > ~/.npmrc
