---
title: "CLK"
tags: ["programming", "HTML/JS/CSS"]
github: "https://github.com/Perseus333/clk"
website: https://clk.perseuslynx.dev/
description: "A stopwatch. Minimalist. Efficient. Material Design."
date: 2025-09-23
---

Yet another fun practice project that turned out to be useful.

It's a stopwatch; it counts time.

More than anything this was a small project to practice design practices. I wanted to have a very constrained objective and I wanted to achieve it using the least amount of complexity possible. At the same time I also wanted it to be fast and aesthetic. It has a minuscule memory footprint and an even smaller CPU impact. It has an algorithm that allows it to count in milliseconds of precision yet only update every second. 

As for the design limitations, I wanted it to have no UI but it should be able to do everything that you expect from a stopwatch (except lapping). This was: play, pause and reset. Reset was easy, since it was meant to be seen from a web browser, they support refreshing the page, and therefore it would reset. Play pause is just a toggle and so, it can be activated with either a click or a press of the spacebar. To visualize if the clock is stopped, it changes the color of the background with a satisfying animation. In the future I might add functionality to also act as a timer, but doing that without UI will be trickier. For the colors, I got inspiration from the Material Design specification.


