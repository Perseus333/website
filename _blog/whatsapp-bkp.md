---
title: "Restoring WhatsApp with root"
date: 2025-12-17
tag: "android"
description: "A short tutorial on restoring the WhatsApp app with the original files"
---

# The Rant

> IMPORTANT: This method is not supported by WhatsApp, always ensure that you have your WhatsApp data backed up with official methods. Also, this method requires having root (admin privileges) in the old and new device.

> You can skip to the [Tutorial Section](#tutorial) directly.

A couple of months ago I installed PixelOS on my phone since I was getting tired of being stuck in Android 11 and it was the (unofficial) version that offered the highest Android version for my phone. It worked fine except for [some minor issues](xiaomi-led). Recently however, I became frustrated after encountering seemingly insurmountable obstacles regarding play integrity verification in some apps that I wanted to install. What I realized then is that if I couldn't benefit from having [spyware](https://www.scss.tcd.ie/Doug.Leith/pubs/cookies_identifiers_and_other_data.pdf) baked into the OS, why did I allow it? 

I wouldn't consider myself particularly wary of privacy, but it feels good to break free from the web of probably the most pervasive company in the world. I decided therefore that I would install a ROM that wouldn't include google in it, but also I wouldn't install GApps on it. I'm quite lucky that my current situation allows me to not require using a google product for my work, so it may not be an option for everyone. The option I chose was LineageOS mainly because I've had [positive experiences](lineageos-review) with it.

I know you're probably thinking of me as hypocritical right now by refusing to let myself slide into the convenience of mega corporations whilst making a tutorial to use a product from another of them. But as I've said, these companies have managed to become so ingrained into our societies, they have become a necessary evil if you want to communicate with people around you that don't have the interest or the time to escape convenience. 

This tutorial is particularly important for me, because had I known about it just a couple of months ago I wouldn't have lost more than 5 years of memories that I had entrusted to Meta. I believed that the official methods would work, yet to my dismay they didn't, and upon installing WhatsApp on a new ROM and attempting to recover the backup from Google Drive it failed. This time around I didn't want to end up with the same fate even though the stakes were a lot lower now. (And, also I couldn't because without GApps you cannot recover data from a Google Drive account :p )

*I had heard mythical tales that told legends about  this hidden directory, only accessible to those users of the highest level (which ironically are not users) that contained scrolls where scribed in them were the logs from all of the conversations ever spoken (by you and to you). And that in theory, if you had access to those scrolls (files), you could restore the order of the universe (just that app). And so, I decided to set sail on this dangerous journey with just the company of my trusty backup drive. (I honestly don't know what I have written).*

So yeah, if you have root you have access to the application data of WhatsApp and therefore if in the new system you also have root, you are able to just paste the old data in, and recover all of your old chats, since in there are reside all messages, encrypted, and the key to decrypt them.

This is not so much about the tutorial steps (which still may be useful to some of you) but rather about not trusting your own sensitive data, and your memories exclusively to some third parties. You should have some degree of ownership of your data, or else you're not in control of yourself, as by extension, memories are are part of you. This does not only apply to messages, but to family photos, e-mails, etc. (I'll make a post in a couple of days about that). I've always found that phones are one of the devices that you own the least, since you're heavily constrained, so take this also as yet another reason to root your phone (if you can afford potentially losing Play Integrity).

Anyways, that's my rant, below is how to regain control of your memories:

# Tutorial

1. Before formatting your phone or whatever, copy `/data/data/com.whatsapp` to an external folder. SD card, HDD, etc.
2. Once the new OS is installed, install WhatsApp and open it, but don't click anything. Close it, and force stop it from settings.
3. From the terminal, either `adb` or Termux, run the following command. You'll get some numbers, but two of them will be the same 5 digit numbers that start with 10. Write them down on a piece of paper. 
```sh
ls -ldn /data/data/com.whatsapp
```
4. Paste your backup directory of `com.whatsapp` directly into `/data/data`.
5. Run the following commands, where `UID`  is the number that you wrote down.
```sh
cd /data/data/
chown -R UID:UID com.whatsapp
chmod -R 770 com.whatsapp
```
6. Reboot the phone
7. Open WhatsApp again. You should see your messages right there.
8. You'll probably be logged out soon after. Perform the steps, grant the appropriate permissions, and when asked to restore from backup, decline. Once done, you should end up with your WhatsApp app good as new.
