---
title: "Choosing a Linux distro"
date: 2025-06-12
tag: "linux"
description: "A practical guide to prevent distro-hopping"
---
This aims to be a practical and mostly rational guide on choosing Linux distributions.

There are but 2 properties that define whether a Linux distribution is suitable: Stability and Support. All the other distractions such as installation setup, package manager, default DE, etc. are negligible in comparison.

You can find a matrix at the end of the post.
<!--more-->
## Stability
Stability refers to 2 things which usually, but not necessarily are correlated: Release-cycle and safety. Both are related to how system updates are released.
Release cycle refers to the frequency and the manner by which the updates are published, whereas safety refers to how likely they are to bork your system or cause trouble when applying them.

### Release Cycle

There are 2 main types of release cycles, again with some exceptions: Rolling release and point release.

Rolling releases ship new updates for their libraries and packages in a non-concrete manner. On some distributions such as Arch, as soon as packages are released upstream, you can install it on your system; on others, such as Tumbleweed, there is a testing period before including them in the release.

Point releases on the other hand, are specific curated updates, that may take from several months, to several years to ship, but are made with the intention where all of their packages have been fully tested and don't have any major bugs.

Now, there are some hybrid distributions, most notably, Fedora, where they do a bit of both. Packages can be installed in a rolling manner if you so wish to, or you can wait for the big point releases. This is achieved because they release frequent updates within the main versions of the stable-point release.

### Safety

Safety is not quantifiable as it depends on the previous reputation and the current ways in which it is ensured.

Some distributions are notorious for sometimes breaking on updates, such as Arch-based distributions. This is a consequence of the nature of the updates as they don't get through any Quality Assurance (QA), and sometimes due to careless updates. On the opposite side there is Debian, with its 2 year point release, it ensures that 99% of the bugs are gone. Then again, that means always having outdated packages.

If you find that any of the extremes suit perfectly your needs, that's great, go for them; however most people will want something in between. With point-stable releases like those found in Ubuntu-based distributions or similar you will have a pretty smooth experience but the packages will be at most 6 months old instead of 2 years. If however, you were thinking that you need the rolling release but you don't want to sacrifice safety all that much, then consider Tumbleweed, which does some automated QA on packages before releasing them, making it safer at the cost of being 1 week behind Arch.

## Support

The second most important thing that you should take into account is the support that a distribution has. On Linux you will have issues, or will need to search some distribution specific resources, that's where support comes in. If you pick a distribution that has a user base of 10, and with 1 developer, good luck troubleshooting issues without modifying code. There are 2 main ways to get support which usually are proportional but not always: coders and users. Usually a larger count in any of them is positive.

### Codebase Support

As stated previously it's not optimal to rely on a small team for your OS. That's why you should probably choose a distribution that is backed up by an enterprise: think Ubuntu by Canonical, Fedora by RedHat and OpenSUSE by SUSE. You know for certain that if you pick a distribution made by them, it will receive support for years to come, whereas if you pick a niche distribution that is developed by a small team, who guarantees you that they will maintain it in the foreseeable future? Unless you're willing to switch eventually to another distribution or are willing to fix bugs yourself, I wouldn't recommend them.

### Community Support

The larger the user base, the easier it will be for you to find resources. You will have more people that are willing to help you, and more people that had the same problems as you and already solved it. This is not only for Reddit posts on r/linuxNoobs but it also means higher quality wikis, tutorials and guides.

### Hardware support

Software needs to run on hardware, and without proper hardware support and drivers you won't have a system to worry about if it breaks or not, because it might not even boot. To have proper hardware support you need both a large enough community so that they support your hardware components, and a large enough group of contributors to make them supported in the distribution. As a general rule of thumb, I'd say that the newer and more exotic that your device is, the more likely it is that you will need to run a faster release cycle distribution. If you're using old, well tested hardware, like an old Thinkpad, you're probably more than fine with Debian.

![distro-chart](/src/assets/linux-distro-chart.webp){:width="100%"}

## Bonus tips

- Don't pick a distribution just because it has a certain Desktop Environment, most distributions can install most desktop environments, so don't take it into account, ignore it.

- Package manages matter, but only to a certain degree: AUR, DNF and APT all have support for most packages, and if they don't, you can either build them yourself, or just install them as a flatpak most of the time, it's not the end of the world. Also, download speeds don't really differ that much unless you're updating Arch, every 10 seconds.

- Defaults shouldn't matter, it's Linux, not Windows. You can change every single configuration; if there are too many apps installed on your first boot, then uninstall them, if you're not happy with your DE, change it; if you want a different wallpaper change it (yes, that made me avoid Fedora, don't make the same mistake).

- Installation setup only happens once, even if you boot from the TTY, like in Arch, there are tutorials where you can copy paste what they write on screen and you'll end up having a working system, at most it will take you 30 minutes (unless you pick something like Linux From Scratch in which case, you already know what you're getting yourself into). So, I wouldn't even consider it.

- Immutability is a major property that fundamentally impacts how the system works, however, it should be noted that there are very few, well enough supported options as of writing this post. If you know that you need it, go for it, however if you're not sure my advice would be to avoid it.

- Systemd or not doesn't really matter. Sure, your boot may be faster, but what else really, and at what cost? Systemd is the standard, and only niche distributions don't rely on Systemd. If you choose to avoid it you're just shooting yourself on the foot for nothing. There are more important things to consider.
