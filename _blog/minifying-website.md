---
title: "Minifying this website"
date: 2025-10-08
tag: "meta"
description: "The process of reducing the size of my website from 800 to 80 KB"
---

This is going to be a very small devlog, but it might include some useful info to some that are looking to save their visitor's bandwith or joining one of the presigious SMALL_BYTE_SIZE clubs.

The other day I was looking up some people's blogs (it's quite fun), and I came around the [250KB Club](https://250kb.club) website. Curious by how they measured it, I found out that the [512KB Club](https://512kb.club) used [Cloudflare's URL Scan](https://radar.cloudflare.com/scan). Upon [examining my website](https://radar.cloudflare.com/scan/310b2d7c-3e0d-454f-b322-f19f30ff5fa4/summary) I found out that it was quite horrible. Even though I tried some optimization techniques such as using .webp images, the size of the homepage alone was almost 1MB; half of which came from the Monaspace Font that I had in .ttf format. Below is a breakdown of the top 5 offenders:

| Resource      | Size (in KB) |
| ------------- | ------------ |
| Monaspace.ttf | 602.38       |
| banner.webp   | 118.76       |
| IBM_VGA.ttf   | 25.66        |
| pfp.webp      | 11.55        |
| index.html    | 6.85         |

## Optimizing the fonts

As you can see, not very optimal. However, this allowed me to see the biggest issue: The fonts. After some research I found that fonts stored in the WOFF2 format are, from my experience ~3x more compact than TTF. That was a nice increase, however, I learned it after discovering that you could trim down the character selection for the fonts. That is, removing all of the unicode characters that you won't use. For my usecases I'm perfectly fine just using the [basic latin](https://en.wikipedia.org/wiki/List_of_Unicode_characters#Basic_Latin). That reduced the size by a factor of 4 the file size. In the end, my 600 KB monaspace font was converted into a much more manageable 48K, which tracks with the 12x increase from both methods.

## Compressing the images

Up until now, I thought I was doing pretty ok with my images. I was using .webp fairly standardly (mainly because it was easier to script with Jekyll) and when I converted the images in GIMP I selected the 0.75 quality slider. Turns out it wasn't so great.

After not so much luck with using websites for it, I decided that I would run a shell script for it. And that's how I came up with [compress.fish](https://gist.github.com/Perseus333/8a161ffa160b0d2f6c2fd3c9756b1568), which leverages Magisk to compress the images exactly how I want to. Now, after adding my new images to the `src/assets/uncompressed/` I ran `compress.fish` and the lighter images would be replaced at `src/assets/`. There was just one problem, the images were very blurry, of course. In some of my images, readability of graphs or labels is important so I couldn't leave it like this. 

## Creating my first jekyll plugin

If you're myself, then you've probably read my guide on how to make [your first Jekyll plugin](/blog/jekyll-first-plugin) that I made almost a year ago. And no, I didn't take 1 year to write this plugin, I just gave up on the previous one. So, even though I knew about the basics about Jekyll plugins, and their structure I still didn't know a lot about Ruby. As I developed this, one year after the guide, I realized how what I once thought was a pretty decent guide, was at times confusing even to myself.

Anyways, my goal was to make a jekyll plugin that would wrap the images (\<img\>) all throughout my website with a link tag (\<a\>) that would redirect to the original uncompressed image. I did some reasearch but I couldn't find any plugin that did this the way that I wanted to, so if you're interested in having this in your website, feel free to use it and/or modify it to suit your needs, it's under the MIT licence.

Since I was for all intents and purposes new to Ruby it took me wayy longer than it should to write a sub 100 line Ruby program to do that... But it was fun. I added an option so that you could specify the location of the uncompressed images and that was it!

In the future I do plan to add a feature to compress the images the same way that the `compress.fish` script does, but that's stuff for another day.

## The final results

So, was spending ~5 hours trying to figure out how to reduce images worth it? Well YES! By a lot, but actually not so much... Below is the table with the comparison of the top 5 resources and their previous values:

| Resource      | Original Size (in KB) | New Size (in KB) |
| ------------- | --------------------- | ---------------- |
| Monaspace.ttf | 602.38                | 44.21            |
| banner.webp   | 118.76                | 6.52             |
| IBM_VGA.ttf   | 25.66                 | 1.99             |
| pfp.webp      | 11.55                 | 3.69             |
| index.html    | 6.85                  | 6.78             |

Not too shabby. According to [the new Cloudflare URL scan](https://radar.cloudflare.com/scan/b672fbb4-18eb-4563-85ee-f64915dbed33/network), the size is 83 KB! Now I can finally enter the [100KB club](https://www.100kb.club/)... Oh wait, the server is down (521).

Even though it has been reduced quite substantially, HALF of the size comes from the monaspace font, which I could change by a much lighter one, or even with just `monospace` but I don't care *that* much. Plus it looks neat. Another small optimization that I did was finally converting my profile picture into an SVG that I recolored myself. It was just a 5 KB decrease but having an SVG is soo much cooler. If you're wondering why I didn't minify the CSS or the JS so that it would weigh even less, it's for readability. I would like my website to be able to be reverse-engineered, and minification obstructs that.

As for what I'll improve in the future, I don't know yet. Probably speed optimizations like longer chaching TTL or pre-loading images. Maybe even going for the 100% google lighthouse. Who knows. 

You can subscribe to [my RRS feed](http://localhost:4000/feed/blog.xml) to get updated.