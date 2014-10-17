FROM dockernano/node.js
MAINTAINER Bilge <bilge@scriptfusion.com>

COPY	in/buildroot.conf	/root/buildroot/.config
