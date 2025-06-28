---
title: "Canvas AuTOTP"
tags: ["add-on", "javascript"]
github: https://github.com/Perseus333/canvas-autotp
website: https://addons.mozilla.org/en-US/firefox/addon/canvas-autotp/
description: Automatic TOTP completion for Canvas
date: 2025-02-10
---
This was my second FireFox browser extension and the first one that I ported to chromium. Just like the [first one](/projects/auto-reader) it came from necessity.

## A story of dissatisfaction

In my university they use Canvas to log into the platform and as a security policy they enforce Multi Factor Authentication (MFA). They recommended using [Microsoft Authenticator](https://www.microsoft.com/es-es/security/mobile-authenticator-app) as the MFA solution. This app is meant to be installed on the phone, however, since I rarely use my phone I'd always store it in the bottom of my backpack and therefore it was a hassle that I had to repeat multiple times per day. This became annoying very quickly, so I had to look for a solution...

The first one I thought about was using an alternate MFA that I could use on my laptop and therefore didn't require my phone. After some research I found that [Ente Auth](https://ente.io/auth/) was decent, so I went with that. It worked fine, and it significantly reduced the time needed for the login. Nonetheless I still felt that it could be done much faster...

Ente Auth used the Time-based One Time Pin (TOTP) and I had used one as a browser extension in the past for other purposes: [totp-in-javascript](https://github.com/turistu/totp-in-javascript). Now, this was FAST. I just had to click the extension button, and then the COPY button, which would copy the TOTP. 2 clicks. It should have stopped there. But I still wasn't satisfied. I rarely use my mouse, and moving and clicking these two buttons was too much effort. In reality it wasn't but I still felt that it could be made even more efficient. The solution? A bespoke one.

What is faster than clicking 2 buttons? Clicking none! So my goal became to make it absolutely automatic.Thanks to the TOTP extension being OpenSource I could easily modify it to suit my needs. I grabbed the TOTP algorithm, and the UI from it and with a "couple" of tweaks it could detect the website automatically and fill in the code itself. Now that we were at it, I also made it click some of the buttons in the log in flow to make it even more seamless. This now meant that to log into my university's site I just had to click the "Sign In" button. PERFECTION, at last. Sure, I may have sacrificed the point of even having MFA, but hey I didn't ask for it in the first place. Sure, it also doesn't have any type of encryption and the "secrets" are stored in plain text in the local storage. And sure, it might still require a click, but I'm fine with that. I was finally satisfied.

After writing the extension and publishing it on both the Firefox and Chrome store (the latter requires you to pay $5 to make an account!) I shared it with my class in hopes that it would help someone. And it did to some. However, after speaking with it with some other classmates, they told me that they only get the login screen prompted once per device. If only that happened to me I could have better spent $5 and 11h of my time. But oh well.

## The functionality

The extension is very simple: Store the secret locally on the browser, borrow some black magic from [Turistu's TOTP](https://github.com/turistu/totp-in-javascript), place the TOTP where it needs to go and click some login flow buttons. That's it. If you want more information on how it works, you can see it in the [GitHub page](https://github.com/Perseus333/canvas-autotp).