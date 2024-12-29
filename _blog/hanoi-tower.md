---
title: "Hanoi & sum of powers"
date: 2024-10-26
tag: "math"
description: "create equations empirically"
katex: True
---

In this mini-essay I want to cover some interesting formulas relating the sum of the powers and how they relate to the Tower of Hanoi problem.

<!--more-->

## Backstory

This all started a year or so ago during a math class when me and my friend were analyzing the amount of moves necessary to solve a Tower of Hanoi. We noticed analytically that the amount of moves requiered to solve a tower were this:

| n of pieces (n) | movements needed (M) |
| --------------- | -------------------- |
| 0               | 0                    |
| 1               | 1                    |
| 2               | 3                    |
| 3               | 7                    |
| 4               | 15                   |
| 5               | 31                   |
| 6               | 63                   |
| ...             | ...                  |

After having more trouble than what I'd like to admit we finally found (someone told us) that this followed the pattern of:

$$
M(n) = 2^n-1
$$

The interesting thing is that this can be converted into this series:

$$
M(n)=\sum_{k=0}^{n-1}2^k
$$

## Expanding to other bases

As we stated above, we know that:

$$
2^n-1 = \sum_{k=0}^{n-1}2^k
$$

But that is boring, and besides it only works with binary base. Wouldn't it be nice if we could have a similar expression but for any base? But how? I don't know enough math to write a proof to expand this for other bases. So, what do we do?

**Analyze it analytically.**

How I go about doing this is I first write the table of the values and then try to see any pattern that can be expressed with a simple formula or a simple variation of the previous formula. 

For the table we will need to pick an arbitray base. I reckon that 3 is a good candidate since it is very close to the one that we already have the formula for and it isn't a multiple of it or something. So let's create the table:



| $$n$$ | $$3^n$$ | sum  |
| ----- | ------- | ---- |
| 0     | 1       | 1    |
| 1     | 3       | 4    |
| 2     | 9       | 13   |
| 3     | 27      | 40   |
| 4     | 81      | 121  |
| 5     | 243     | 364  |
| 6     | 729     | 1093 |

Of course we do not need all the values until the 6th power. In fact until the 3rd it is more than enough. In fact, it is much easier to spot patterns with smaller numbers althogh this means that sometimes they are just conicidences. But a wise man once said:

> There are no accidents - Master Oogway

So let's evaluate what the formula could be if we picked $$n$$ to be 2, given that the base ($$b$$) is 3. We will try to solve given the series.

$$
\begin{aligned}
   \sum_{k=0}^{n-1}b^k&=? \\
   3^0+3^1 &=? \\
   4&=?
\end{aligned}
$$

Yes, $$?$$ is a very mathematical term. Anyways, we know have to find an expression that is equal to 4. We have said that it should be somewhat similar to the one from base 2 so why don't we try that?

$$
\begin{aligned}
4&=b^n-1 \\
4&=3^2-1 \\
4&=8
\end{aligned}
$$

Now, $$4 \neq 8$$ BUT, what can we do to transform 4 into 8 doing the less amount of work? Well, we could divide it by 2. But how to we justify dividing by two in the expression? Well $$3-1=2$$ so why not that. Now, we'll try to see if the proposed expression works.

$$
\sum_{k=0}^{n-1}b^k-1=\frac{b^n-1}{n-1}
$$

To see if it works we'll try another arbitrary value of $$n$$. This time 5. Let's see:

$$
\begin{aligned}
\sum_{k=0}^{n-1}b^k-1&=\frac{b^n-1}{n-1} \\
\sum_{k=0}^{5-1}3^k-1&=\frac{3^5-1}{5-1} \\
3^0 + 3^1 + \dotsm + 3^4 - 1 &= 121 \\
1 + 4 + 9 + 27 + 81 - 1 &= 121 \\
121&=121
\end{aligned}
$$

What?! It worked? Let's try with another value just to test it was not an accident. Let's choose 9 as the base and 7 as the power.

$$
\begin{aligned}
\sum_{k=0}^{7-1}9^k-1&=\frac{9^7-1}{7-1} \\
597871&=597871
\end{aligned}
$$

So that's it. This "proves" that the formula is correct. Such big numbers cannot be a coincidence (yes then can but I'll overlook this) so this must be the formula. 

## Conclusion

This small mathematical-themed post objective was to teach some basic analytic methods that you can use to "discover" mathematical formulas on the fly. This has proven to me useful numerous times during exams and I reckon it could help you aswell, even if you don't do exams anymore. I will create a similar-themed post to this one regarding the triangular numbers and how you can also come up with it, without knowing the formula.