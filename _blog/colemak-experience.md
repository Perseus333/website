---
title: "The Colemak Experience"
date: 2024-12-28
tag: "keyboards"
description: "assesing keyboard layouts"
---

Since around 26th of August 2023, I have been typing with the keys of my laptop jumbled around. What is it like typing with a non-qwerty layout? Are there any benefits? But most importantly: Is it worth it?

<!--more-->

> ***Abstract:*** Typing a non-qwerty layout feels more comfortable and satisfying to type. The learning curve is steep for the first days but with enough practice, the awkwardness can be reduced completely in a week or so. Anecdotally, I did experience greater typing speed improvement compared to qwerty. Therefore, I would consider that switching permanently to an alternate keyboard layout is worth it, although I would choose a modern, well-optimized keyboard.

## The revelation

I don't quite remember what was the thing that sparked my interest in alternative keyboard layouts, but it probably was a YouTube video. According to my YouTube history, the oldest mention to an alternate keyboard layout was ["how I went from 10 to 130WPM in 3 months"](https://www.youtube.com/watch?v=a2Nb9QVujgU) by Pinguefy.

I had heard that there were variations of the standard layout, like the French AZERTY, but never had given them a second thought, and thought that they were unnecessary. QWERTY worked fine. Right?

Well, after watching that video and a barrage of others during the following weeks, I started to realize that QWERTY wasn't so great.

## The Fragility of Rigidity

No one really knows exactly why QWERTY has the letters arranged like it does. Similarly, no one really knows why the Latin alphabet is ordered in the way that it is. Some say it placed the common letters far apart so that the typewriters wouldn't get jammed, whilst others say that it came from the morse code machines. Truth is that it had a lot of iterations before it came to the current design, and if you are interested about them, you can check them out here: [QWERTY [wikipedia.org]](https://en.wikipedia.org/wiki/QWERTY#History).

Ever since the final version was reached and popularized in 1878, the design hasn't changed much, as people have grown accustomed to it and refuse to replace it with anything else. However, this is one of the many cases where the most popular option isn't necessarily the best one. Even though some optimizations were made since the first alphabetical iteration, the keyboard still has many glaring issues. One of the best ways to see them is with a heatmap:

![qwerty-heatmap](/src/assets/qwerty-heatmap.webp){:width="100%"}

I don't know about you, but that doesn't scream "optimized" to me. The letters with the highest frequency don't appear to be assembled in any thoughtful order, how is this the global standard? If a thoughtful design were to be made, it would probably put the most used keys in the home row, to reduce the travel distances for the fingers.

But the heatmap just tells us that we might have to move our fingers further than we should, but the issues don't end there. Let's look into the most common same-finger bigrams (SFB) in qwerty, aka. the most common two-letter combinations that must be typed with the same finger. This, combined with the heatmap, can give us a good idea of the comfort of a keyboard layout. According to the [Keyboard Layout Stats [cyanophage.github.io]](https://cyanophage.github.io/#qwerty), qwerty has 4.39% SFB, with the most common being the `ed`, `ec` and `lo` combinations. That might seem like a low figure but later we'll see what has been achieved with modern layouts.

## My choice

I have got to admit that my research wasn't as thorough as it should have been, as in the end I only ended up considering 3 keyboard layouts:

- Workman
- Dvorak
- Colemak

Even though there were many more options out there, I was oblivious to them or considered them too experimental. After reading the [Workman Layout Philosophy [workmanlayout.org]](https://workmanlayout.org/), written in 2010, I was convinced, that this was better than the alternatives. It even said that Colemak was bad, and I was already pretty convinced that Dvorak was not optimal either. So, I went for workman. Using the [Microsoft Keyboard Layout Creator (MSKLC) [microsoft.com]](https://www.microsoft.com/en-us/download/details.aspx?id=102134), I put workman and started practicing.

The typing felt really nice with its smooth rolls, although it was also painfully slow due to my inexperience with the layout. I had been so invested into alternate keyboard layouts during the past week or so that I still searched for other resources, hoping that they would support my choice of going for the Workman layout, however, the more I looked the more I realized that this was far from perfection. That's when I discovered the Colemak Mod-DH layout.

## My (final) choice

The issues that were discussed in the Workman layout website from 2010 had already been solved in 2014 by Colemak-DH. A mod that specifically catered the concerns that OJ Bucao, the creator of the Workman layout, and many others had raised. It seemed like it was the modern Dvorak, and the more I investigated, the more I became convinced that this was the best choice. I even did some layout comparisons using SteveP's fork of the [Layout Analyzer [stevep99.github.io]](https://stevep99.github.io/keyboard-layout-analyzer/#/main), and the [Analyze Layouts [colemakmods.github.io]](https://colemakmods.github.io/mod-dh/analyze.html) tool. In both tests Colemak-DH came on top.

Now, looking in retrospect, what did I expect? I used the tests from SteveP, the creator of the Colemak-DH mod, and from the colemakmods github. Even though the results were probably realistic, they could have easily been biased.

Either way, back then I didn't realize and went for it. Although when placing the keys in MSKLC, I noticed that the `v` and `d` should be swapped. The original design was meant for orthogonal split keyboards, but I had an ISO keyboard. This meant that, I typed the `d` key, which is the `c` in the qwerty layout, with the middle finger, and the `v` key, which is the `v` key in qwerty with the index finger. `d` is far more common than `v`, in fact up to 4 times more common ([Letter Frequency [wikipedia.org]](https://en.wikipedia.org/wiki/Letter_frequency)).  That's why I decided to swap them, and thus became the current layout that I still use to this day.

## The initial experience

You need to keep in mind that I started this journey more than a year ago, and even though I documented some of it in some sparse notes, I don't remember that much about it.

I started learning the layout through [Colemak Academy [colemak.academy]](https://www.colemak.academy/), but I only used that until I knew more or less where the keys were, which took me around an afternoon to figure it out. The good thing about this website is that it has different levels in which you can learn the keys from groups at a time, which makes the transition much smoother. After, I felt confident enough with all keys, that I wouldn't confuse them for the qwerty alternatives, I decided to jump to [MonkeyType [monkeytype.com]](https://monkeytype.com/). There, I created a tag for my Colemak-dh journey, as I didn't want to reduce my comparatively fast speeds with qwerty.

I started training on 10 word tests, then 15 seconds, 30 seconds, and finally 60 seconds. I also did some [TypeRacer [typeracer.com]](https://play.typeracer.com/) quotes.

During the first 2 weeks I tryharded a lot, doing between 12-50 minutes of typing daily. In the end, after 50 days exactly and 18 hours of typing, I reached  100 WPM in the 60 second test.

I still have a screenshot of my initial typing progression of the first days, before I reached the 100 wpm milestone.

![Colemak MonkeyType Progression](/src/assets/colemak-monkeytype-progression.webp){:width="100%"}

However, not everything was fun and roses. At the time I had to do an assignment and used to my moderately fast speeds of 120 wpm, the 40 wpm that I had felt painfully slow. This is why I had to resort to Speech To Text from Word to write the bulk of my work.

Not only that, but some programs do not recognize the layout from MSKLC and so I had to use the previous qwerty keys for some programs, and the Colemak keys for others. This issue still bothers me to this day.

## The current experience

My current experience is very satisfactory.

I have also been practicing typing on and off since I've started, and I have now surpassed my previous qwerty speeds that I took years to reach. Now, after 1.4 years, I can type at 120 wpm comfortably for 60 seconds, and peak at 140 in MonkeyType. As for quotes, I can comfortably reach 100 wpm, and peak at 120 wpm.

Compared to my 120 wpm peak in MonkeyType and 80 wpm in quotes, it is an improvement.

Regardless, speed is not what matters for the alternate keyboards, but comfort. I actually enjoy typing and feel comfortable doing so, much more than when I used qwerty.

However, I can still type in qwerty, since the previous muscle memory hasn't erased completely. Sure, I need to look at the keyboard every now and then, but I still can type at ~80 wpm, which feels slow but tolerable.

## Was the change worth it?

I'd say it was 95% worth it.

It was great in all aspects, but I didn't REALLY need to do it. I still have some issues with some programs that I'm sure can be solved with some flashing software like qmk/via, but I can't bother. I also need to have qwerty as an alternate layout in case anyone wants to use my keyboard without typing jumbled letters, but this problem doesn't arise very often.

However, there are a couple of things that I would have done differently but I don't plan on doing because I just don't see that they would bring that much of a benefit in relation to the effort needed to implement them.

## What would I have done differently now?

### I would have chosen a different layout

Even in 2023 there were a lot of modern layouts that boasted improved stats over Colemak-dh. The difference may be hardly noticeable, but as a fan of ultra-optimization I probably would have gotten for them now. Since then, I have discovered that there are other more comprehensive layout evaluation tools, one of my favorite being: [Keyboard Layout Stats [cyanophage.github.io]](https://cyanophage.github.io/#qwerty). It includes probably almost all modern layouts, and it compares them more exhaustively than I've seen any other website do. For example, there you can see that modern layouts can achieve SFBs as low as 0.36%, which is ridiculously low compared to the 0.91% of colemak-dh and 4.39% of qwerty. Or achieve travel distances half of those with the qwerty layout. Truly impressive.

### I would have practiced qwerty more often

It really doesn't take that much effort to maintain a not-so-fast typing speed, and I would consider it worth it, especially when using other keyboards / computers that don't have your layout.

## Conclusion

[See abstract](#)

## Further reading

- [Keyboard Layout Stats [cyanophage.github.io]](https://cyanophage.github.io/#qwerty).
- [Analyze Layouts [colemakmods.github.io]](https://colemakmods.github.io/mod-dh/analyze.html)
- [Layout Analyzer [stevep99.github.io]](https://stevep99.github.io/keyboard-layout-analyzer/#/main)
- [Keyboard Layout Evaluation (outdated) [github.com]](https://github.com/bclnr/kb-layout-evaluation)
- [A guide to alt keyboard layouts [getreuer.info]](https://getreuer.info/posts/keyboards/alt-layouts/index.html#which-alt-keyboard-layout-should-i-learn)
- [Carpalx [mk.bcgsc.ca]](https://mk.bcgsc.ca/carpalx/)