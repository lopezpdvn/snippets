---
layout: page
title: how to
permalink: /how-to/
---

## Setup

1. Using the Jekyll theme of your choice, render the site and copy the CSS
   styling from it to an Anki note type that you will use for your cards.

## Create notes

1. Add card of note type that supports cloze deletion with code blocks (please
   see [Setup](#setup)).
1. Enter dummy cloze and add card
1. Open in browser
1. Edit jekyll source file
1. Build & serve site
1. `vim _site/index.html`
1. `/post-c` (post-content)
1. `:%s/figure/div/g` (x\*2 substitutions where x is the number of code blocks)
1. For each element `<div class="highlight">`, for each HTML line except the
   first one, insert a `<br>` at the beginning of line. In vim select such
   lines and do `:'<,'>s/^/<br>/`
1. For each element `<div class="highlight">`, join all lines such that the
   whole element is in a single line.
1. Validate rendered output.
1. Copy all to Anki's _Text_ field on browser
1. Add cloze deletions to field *Text*.
1. Add fields *Hint*, *Extra*, *Tags*.

## Fix notes

1. Open the note field in the HTML editor, and make sure that cloze deletions
   do not span multiple lines characters, use `br` elements instead.
1. Open the note field in the HTML editor and make sure that `div` elements
   with class `highlight` do not span multiple lines. Use `br` elements
   instead.
