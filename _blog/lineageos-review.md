---
title: "LineageOS review"
date: 2025-04-18
tag: "software-review"
description: "A straightforward review of LineageOS"
---

A straightforward short term review of LineageOS (22.2) experience on an old Android tablet.
<!--more-->

> Abstract: For a minimal use case, LineageOS provides everything that you need without any extra bloat. Depending on the popularity of your device, it can keep it up to date with Android updates, making it more secure. The installation can get technical, but it is well documented. The design, featuring Material You, is clean and modern, providing an aesthetic look right out of the box. It features extra customizability compared to most OEM skins. It is inherently more private than stock Android as it ships without Google Apps by default, and it has some thoughtful security settings.

## Background
My motivations behind switching to an alternate OS were for the following reasons, in order:

1. **For fun**: To try out a FOSS operating system and tinker with the installation
2. **Philosophy**: To embrace the FOSS and minimalism philosophy
3. **Security**: Preventing known vulnerabilities of previous Android versions

I used the device sparsely and when I did, most of the time I either read e-books or watched YouTube videos. I concede that this is a very different experience than a daily-driver phone, which you can't afford to brick, or you want to have device integrity from the start. Keep this in mind when reading through the review, as it may not align with your prospective use case. At the [end of this post](#conclusion) I will explore some of the other reasons why you might want to use LineageOS.

### Why LineageOS and not its alternatives?
Because it is the most widely supported option, it covers the most devices ([Supported Devices (wiki.lineageos.org)](https://wiki.lineageos.org/devices/)), has the most active contributors, which means frequent updates, better documentation, more polished experience and longer lifespan. Additionally, it also includes sensible defaults that balance privacy and convenience.

[GrapheneOS](https://grapheneos.org/) and [CalyxOS](https://calyxos.org/) are some popular alternatives. I would only recommend them if you have one of their limited range of supported devices and value privacy as the outmost important parameter.

As for [/e/OS](https://e.foundation/e-os/) it is just a LineageOS fork with micro-G out of the box. De-googling is it's main selling point, however that is also present in the LineageOS system. It is also less customizable and doesn't feel as modern.

## Installation
The installation process was adequately documented with some room for improvement for certain tasks, regardless, with a bit of intuition you should be able to get a proper installation with no problems. Make sure to read *everything* in the instructions. For me, the installation wasn't troublesome and it took around 30 minutes, but depending on your technical expertise or your device, your mileage may vary.

## Setup
It was more straightforward than the regular Android experience, as it featured less steps, including those that push you unwanted apps or additional (anti-)privacy agreements. From the get-go you notice the clear inspiration of the Material design which provides a very clean and modern look.

It shipped with just 12 essential apps to get you started. If you want to download more apps you can. I didn't add the Google Apps/Services add-on so it didn't include an app store, however from its default browser you can install your favorite FOSS app repository APK such as [F-Droid](https://f-droid.org/), [Droid-ify](https://droidify.eu.org/) or [Aurora Store](https://auroraoss.com/aurora-store) to download all your other apps.

## Usage
![Home Screen](/src/assets/lineageos-homescreen.png){:width="100%"}

The Android 15 experience felt fresh after being stuck at the eleventh version. The UI feels snappy and responsive, although it was previously adequate. Being able to customize it further than stock options was also a plus.

It provides extra privacy options and one of the features that I appreciated the most was the ability to turn off the camera or microphone system-wide from the status bar menu. Even though I did not try it yet, it also supports relatively easy rooting with Magisk which let's you take control of the device to the next level.  

Regarding the battery life and performance, it felt similar. Unfortunately, I don't have any concrete evidence or benchmarks to demonstrate any change.

Surprisingly, the OS just... works. No bugs occurred and apps worked fine. If I used the device more often and with more apps, I would probably notice some errors. Regardless, I will update this section if any issues arise.

## Conclusion
In conclusion LineageOS is a straight-forward, privacy-respecting, extended-support mobile operating system. It offers support for the widest range of devices out of its alternatives, and it takes privacy into account. I would recommend it if you wanted to...

- ...update an old device
- ...enjoy a google-free experience
- ...care about privacy
- ...have greater control of your phone
- ...embrace FOSS philosophy
- ...install a new OS

LineageOS isn't revolutionary, but it provides a cleaner, leaner and more private experience.