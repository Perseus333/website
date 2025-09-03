---
title: "A sane Nextcloud + Tailscale setup"
date: 2025-09-01
tag: "homelab"
description: "A simple guide and solution on how to set up Nexcloud All In One (AIO) with container-less (system-wide) Tailscale as Reverse Proxy without using Caddy"
---

A simple guide on how to set up a Nextcloud AIO docker container and serve it through a system-wide (non-containerized) Tailscale instance.

<!--more-->

The contents below are from a discussion I started on the Nextcloud AIO GitHub Repository: [Easy setup: Container-less Tailscale as reverse proxy #6817 (github.com)](https://github.com/nextcloud/all-in-one/discussions/6817). If you encounter any issues during setup, please comment or refer to the discussion.

---

Nextcloud All In One is a server solution for your files, calendars, docs and more, similar to a self-hosted Google suite. It's used by enterprises but it can also be used by individuals who want to self host their own files. To access it however, you will need a domain, and one of the most practical and secure solutions is to use Tailscale which will not open the domain to the internet and will also act as a reverse proxy for your server.


**Motivation**
This guide was created out of frustration for the lack of any general, simple, well documented guide for this setup. The most referenced one [^1], even in the official docs, complicates the process by containerizing Tailscale. While professional, it adds a lot of unnecessary complexity and potential errors that are avoidable for most users.

## 1. Configuring Tailscale Account

You will need to have a Tailnet setup, and Tailscale installed and running on both your client and your server. For a quick intro, see: [Tailscale quickstart (tailscale.com)](https://tailscale.com/kb/1017/install)

Once you have your Tailscale set up both on your server and your client, you need to enable the following configs in Tailscale from the [DNS Tab (tailscale.com)](https://login.tailscale.com/admin/dns):

1. Make sure Magic DNS is enabled
2. Enable HTTPS Certificates

## 2. Installing Nextcloud AIO

Go to the [Nextcloud AIO repository (github.com)](https://github.com/nextcloud/all-in-one/) and copy the contents of the `compose.yaml` file that you will find at the root folder of the project.

On your server, go to the directory where you will configure the Nextcloud AIO container and create a docker compose file (e.g: `~/docker/nextcloud/compose.yaml`). In there, paste the contents of the `compose.yaml` from their GitHub.

Inside that file, uncomment the environment section and the two properties shown below. Make sure to change `APACHE_IP_BINDING` from 127.0.0.1 to `0.0.0.0`.

```yaml
environment:
  APACHE_PORT: 11000
  APACHE_IP_BINDING: 0.0.0.0
```

In the `compose.yaml` directory, run the container with:

```
docker compose up --build --pull always --wait
```

## 3. Nextcloud Setup Wizard

On your client, which should be running Tailscale and having its DNS at `100.100.100.100` (or any other valid Tailscale IP), open your browser and paste in the Tailscale IP address of your server followed by port 8080: `100.117.158.69:8080`. You can get its IP from the [Tailscale dashboard (tailscale.com)](https://login.tailscale.com/admin/machines)

>[!tip]
> - Make sure that no other service is using port 8080 on your server
> - If you hit any DNS related issue, try running `resolvectl status` from the client, you should see Tailscale with "Default Route" as yes.

You should arrive at the Nextcloud setup page, there follow the Nextcloud instructions:

1. Copy the passphrase (and store it) 
2. Log in, and paste the passphrase 

> [!tip]
> If you want to use a custom Tailscale domain name, do it before submitting the domain on Nextcloud. Otherwise things will break, and you'll be better off restarting the containers from scratch.

It will ask you for the domain of your server, the easiest way to get it is by going to your [Tailscale Dashboard](https://login.tailscale.com/admin/machines) and copying its full domain. Click on the IP address, and copy the one that is formatted like: `machine.tail0a12b3.ts.net`, then paste it on the domain field.

>[!note]
> The Tailscale domain is a very convenient way of having a certified HTTPS domain that only you can access. We need to use a domain since Nextcloud  requires it.

Afterwards, continue the setup wizard: select your desired containers, set up the TZ, the backup location, and finally "Download and start containers".

## 4. Tailscale Serve

Meanwhile the containers are being set up for you by Nextcloud, go to your server and run the following command. Notice the `http://`.

```
tailscale serve --bg http://127.0.0.1:11000
```

If you're running Systemd it is a good idea to set this as a service on startup, so create the service pasting the following content into `/etc/systemd/system/tailscale-serve-nextcloud.service`:

```
[Unit]
Description=Serve Nextcloud backend through Tailscale
After=network.target

[Service]
ExecStart=/usr/bin/bash -c 'tailscale serve --bg http://127.0.0.1:11000'
Type=oneshot

[Install]
WantedBy=multi-user.target
```

And enable it and check that it's running

```
systemctl enable --now tailscale-serve-nextcloud.service
tailscale serve status
```

Once that is done, try opening the domain that you configured Nextcloud to run on, and you should see yourself in the login page!

## Troubleshooting

- `docker logs CONTAINER` might show some errors

- If you're having connectivity issues check: 
	- `docker ps` for docker exposed ports
	- `tailscale status` both on client and server (just in case)
	- `tailscale serve status` from the server
	- `dig DOMAIN` to see if the DNS resolves the domain
	- `curl -v ADRESS` from both client and server

- If you don't receive anything from the client in your browser but logs show no errors, and `curl` works both from the client and the server, check that your browser isn't overwriting your DNS and uses the system default. 

[^1]: [Tailscale (and Caddy as a sidecar) Reverse Proxy #5439 (github.com)](https://github.com/nextcloud/all-in-one/discussions/5439)
