---
layout: page
title: how to
permalink: /how-to/
---

1. Add card of note type *cloze_code_blocks*
1. Enter dummy cloze and add card
1. Open in browser
1. Edit jekyll source file
1. Build & serve site
1. `vim _site/index.html`
1. `/post-c` (post-content)
1. Delete from `</div class="post-content">`, which is just before
   `</article>`, to the end of file
1. Delete from `<div class=post-content">` to beginning of file
1. Remove outer `<div></div>`
1. `:%s/figure/div/g` (x\*2 substitutions where x is the number of code blocks)
1. Copy all to Anki's _Text_ field on browser
1. Add fields *Hint*, *Extra*, *Tags*.
