---
title: "Orbit Simulator"
tags: ["programming", "C++"]
github: "https://github.com/Perseus333/Orbit-Simulator"
description: "A gravitational particle simulation in C++"
date: 2024-09-10
---

This was my second C++ project and I wanted to get with simulations with SDL2.

The simulation is simple yet customizable, albeit through the source file. It displays some particles on the screen which then, following some gravitational-like logic, get attracted and orbit each other. Although most of the time they just go flying into the void. 

The behaviours are pretty interesting, and although it took a lot of trial and error to get some values to work. This means that the values are completly arbitrary. I did this because normal values would just overflow and I didn't want to use numbers that big regardless, nor having to convert other values into doubles. 

The customization is pretty extensive given how little it does: You can tweak all constants, the display can show the particles velocity through color, you can make them leave a permanent trail, you can enclose the area so that they re-enter through the other end when exiting out of boundaries. You can even make them collide! (Pls don't try it's broken. Or try, and maybe create a pull request to fix it :D )

## What I learned

Still it was just an educational experiment with C++ and I actually learned a lot through it, like:

- The basics of classes and pointers
- The basics of SDL2
- That libraries are a PITA on Windows! :)
- If you are brave enough you don't need header files [^1]

---
[^1] Actually a guy created a pull request to fix the absolute mess that was organization of the code, but I ended up reverting it to show how bad the original was. Anyways, thanks ignabelizky! You are officially the first to ever create a pull request on any of my repos.
