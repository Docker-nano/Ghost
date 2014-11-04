FROM dockernano/node.js:latest
MAINTAINER Bilge <bilge@scriptfusion.com>

COPY	in/buildroot.conf	/root/buildroot/.config
COPY	in/rootfs_overlay	/root/buildroot/rootfs_overlay

# Apply Buildroot patches.
COPY	in/patches		/root/buildroot/patches
RUN	cd buildroot && for patch in patches/*; do patch -p0 -i "$patch"; done
