Nano Ghost
==========

[![Build status][Build image]][Build]

This is the [Docker Nano](https://github.com/Docker-nano) image for [Ghost](https://ghost.org) v
running on Node.js v.

 * Docker Hub image: [`nano/ghost`][Docker Hub repo]
 * Size: MB

Usage
-----

The site URL, IP and port can be customized when a container is run using a command similar to the following.

 * `docker run -dp 127.0.0.1:2368:2368 -e NANO_URL=http://www.example.com --name Ghost nano/ghost:latest`

If additional customization is required a configuration file can be mapped to `/etc/ghost/config.json` using volumes.
Use [`product/config.production.json`](https://github.com/Docker-nano/Ghost/blob/master/product/config.production.json)
as a starting template.

 * `docker run -dp 127.0.0.1:2368:2368 -v /my/config.json:/etc/ghost/config.json --name Ghost nano/ghost:latest`

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

  [Build]: https://dev.azure.com/Docker-nano/Ghost/_build/latest?definitionId=2
  [Build image]: https://dev.azure.com/Docker-nano/Ghost/_apis/build/status/Docker-nano.Ghost "Build status"
  [Docker Hub repo]: https://registry.hub.docker.com/u/nano/ghost
