---
title: "Guide to the Internet & Networking"
date: 2025-08-12
tag: "networking"
description: "A 1000 word guide to the internet"
---

> This guide goes top down, so you should be able to stop at any point and have an understanding to some degree.

## Big Picture

The _internet_ is a global computer _network_[^1] made of many local networks.

The websites you visit are stored in a _server_[^2] elsewhere on the planet, each time you visit them, you request their contents and the server delivers it. The _World Wide Web_ (WWW), where websites are hosted is a sub-section of the internet.

## IP Protocol

_IP addresses_ identify network interfaces (devices), and they're similar to home addresses. When visiting a domain, you must first know what is the IP address of its server. _Domain Name Servers_ (DNS) tell you that. You receive the IP of your website from _Recursive DNS_ which query other DNS recursively until they reach the _Authoritative DNS_, which knows the IP address of the website. This result is cached both in your device and in your router.

IPv4 addresses can express up to 4.29 billion IP addresses (2^32), however, IPv6 goes up to 3.4×10³⁸. IPv6 is newer and meant to tackle the limited addresses in IPv4 globally. In this guide, IPv4 will be assumed, but they are very similar.

## Map of the Internet

Your home network also uses IP addresses and they are managed through a _router_. It assigns a local IP address to each device using _DHCP_,[^3] but it also does _Network Address Translation_ (NAT), where it relays all of them through a single public IP that has been assigned by your ISP. In the case of fiber-optic communication, all of the requests are then handled to your _Optical Network Terminal_ (ONT) which converts digital signals into light.[^4] The _Internet Service Provider_ (ISP), is the one you pay your internet bills to, and they forward your request to the _internet backbones_, which are companies that handle the fiber-optic cables under the ocean and such. From there, the process is somewhat symmetrical, until it reaches the server, where it gets processed, and returns to you not necessarily through the same path. Since the internet is a web of independent networks, each hop decides where it's best to route the traffic. 

![visualization of the internet](/src/assets/internet-guide/internet-map.svg)

## Local

Your device and your router have a _Network Interface Card_ (NIC) that gives them network capabilities, which has a unique hardware identifier called a _MAC address_.[^5] Inside of your _Local Area network_ (LAN), aka, home network, MAC addresses are used to identify the physical devices and they are resolved through the _Address Resolution Protocol_ (ARP). Once the MAC has been resolved, the IP protocol may be used to send the data. It can be sent over with radio waves (Wi-Fi) or cables (Ethernet), the latter being much faster.

LANs may feature multiple _sub-networks_ (subnets) for different purposes to segment the traffic for convenience or security, since traffic between subnets can be easily restricted. Of the 32 bits of an IP address, a chosen amount is reserved for the subnet and the rest is to specify the devices (hosts) of each subnet. Although subnets are isolated networks, they can be managed through the same router.

![IP breakdown of a typical Class C home network](/src/assets/internet-guide/subnets.svg)

## Packets

All data is sent in _packets_. Like letters, they contain the message and metadata (_headers_) like destination or size. Packets are sent and received by applications through _sockets_, a logical abstraction represented as a combination of an IP address and a _port_. Each IP address may have multiple logical doors (ports) which deliver or expect a specific type of content and serve to match it to the proper application. The packet specifies in its transport header the port through which the data is being sent (source) and at which port it's intended to arrive at (destination). For instance, when web browsing, your Operating System[^6] chooses an open port to send the request from, but it requests the website on port 443 of the server.

Packets can be encoded in many ways (protocols), between IPs usually _TCP_ or _UDP_ are used. TCP is very reliable as it performs multiple back and forth "connections" to ensure that the packet has arrived safely. UDP doesn't and is therefore faster (and lighter[^7]), which makes it suitable for real time applications, like video-streaming or gaming.

![Simplified headers of a packet](/src/assets/internet-guide/layers.svg)

## HTTP

_HyperText Transfer Protocol_ (HTTP) is the language used for requesting and serving web pages. Methods like GET and POST are used by the client[^8] to request or send information. A status code by the server will be sent in response, like 200 if successful, or 404 if not found. 

_HTTPS_ is a more secure and widely used version of HTTP that adds additional Security by using _TLS_. This enables encrypted communication between the client and the server.

TLS (and its predecesor _SSL_) use certificates to both authenticate the site, and encrypt the traffic. The server sends its certificate to the client, which includes a signature from a trusted _Certificate Authority_ (CA). The signature is matched with the public key from the CA pre-installed in the client. If it matches, the client knows that the IP address corresponds to the requested domain. 

The encryption is usually done with the _Diffie-Hellman_ (DH) key exchange, where public keys are shared unencrypted to independently agree on a shared key, called _session key_. Sharing a key, _symmetric encryption_, is more efficient and faster for data transfer than the _asymmetric encryption_ used during the TLS handshake.

![Diagram of TCP + TLS 1.3 Handshake](/src/assets/internet-guide/TLS.svg)

## Other Components

_Firewalls_, used mainly for security purposes, restrict network traffic matching the packet and its headers against predefined rules.

_Proxy servers_ are a middleman that sits between you and the end server. _Forward Proxies_ work for the client, managing _outgoing_ client requests to the server, whereas _Reverse Proxies_ work for the server, dealing with _incoming_ client requests to the server. Forward proxies may be used to hide your IP and Reverse Proxies are usually used for managing the loads on each server.

_VPNs_ (Virtual Private Networks) act like a sort of forward proxy that encrypts your data when you talk to them by establishing encrypted connections between you and the VPN.

## Tools to Learn with

- Wireshark
- `traceroute`
- `nmcli`
- `dig`
- `ifconfig`
- `arp`

[^1]: A network is a collection of computers that can communicate with each other using the same language (protocol).
[^2]: A server is a (powerful) computer that performs tasks 24/7
[^3]: DHCP automates assigning (leasing) IP addresses to devices. Leasing addresses allows address reuse in networks with many transitory clients..
[^4]: In the case of cable, a modem is used in place of the ONT. In home networks, the ONT/modem and the router are usually inside the same physical device.
[^5]: They are usually permanent, but they can be changed using MAC randomization software.
[^6]: Operating System. E.g: Windows, MacOS, Linux
[^7]: Due to TCP headers having much more information to store.
[^8]: Client to refers to the end user in the context of client-server communication.

