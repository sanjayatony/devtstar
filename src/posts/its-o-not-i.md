---
title: It's "o" not "i" (Vim)
date: 2022-05-19
tags: 
  - vim
---

Since in college I knew Vim. There was a Linux lesson, where we are using Mandriva inside a VMware. We also learn how to use Vim back then. From there I knew some basic command using Vim. 



I knew `:q` is to quit Vim. So the joke is not work for me. :v

And I knew from the beginning `i` is to go to insert mode, and that's mean I already can edit the file. The problem is, when i try to edit code using Vim I will try put in the the last line and press Enter to start typing in a new line. So what I did is like this.

- Move the cursor to the end of the line, using right arrow or `l` multiple times.
- Press `i`.
- Press right, to move cursor to end of line.
- Enter.

TIL I can do this instead.

- ~~Go to the end of line, press `$`~~.
- Press `o` to append a new line below the current line.

That will be save a lot of time. Maybe I should read the documentation since the beginning.
