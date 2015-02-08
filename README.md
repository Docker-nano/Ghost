Nano Ghost
==========

[![Build status][Build image]][Build]

This is the [Docker Nano](https://github.com/Docker-nano) image for [Ghost](https://ghost.org) v0.5.8.

 * Docker Hub image: [`nano/ghost`][Docker Hub repo]
 * Size: ~64MB

Usage
-----

The site URL, IP and port can be customized when a container is run using a command similar to the following.

 * `docker run -dp 127.0.0.1:2368:2368 -e NANO_URL=http://www.example.com --name Ghost nano/ghost:latest`

If additional customization is required a configuration file can be mapped to `/etc/ghost/config.js` using volumes.
Use [`product/config.js`](https://github.com/Docker-nano/Ghost/blob/master/product/config.js) as a starting template.

 * `docker run -dp 127.0.0.1:2368:2368 -v /my/config.js:/etc/ghost/config.js --name Ghost nano/ghost:latest`

Ghost's content directory is mapped to `/var/ghost` and can be mirrored to the host using volumes.

Mail
----

Nano Ghost is configured to use a SMTP server running on the host and might work without any additional configuration
as long as the following requirements are met.

 * An MTA such as [Postfix](http://www.postfix.org) or [Exim](http://www.exim.org) is installed on the host.
 * The host MTA is bound to the `docker0` network interface.
 * The `docker0` network interface has the default IP of `172.17.42.1`.

If you're running a firewall don't forget to permit `docker0` traffic. For example, to allow all inbound traffic from
`docker0` with iptables, run `iptables -A INPUT -i docker0 -m comment --comment Docker -j ACCEPT`.

To use a different mail configuration supply a custom configuration as described in [usage](#usage).

  [Build]: http://travis-ci.org/Docker-nano/Ghost
  [Build image]: http://img.shields.io/travis/Docker-nano/Ghost.svg "Build status"
  [Docker Hub repo]: https://registry.hub.docker.com/u/nano/ghost/
