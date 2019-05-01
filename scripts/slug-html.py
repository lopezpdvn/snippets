#!/usr/bin/env python3
# coding=utf-8

'''slug-html'''

import sys

from bs4 import BeautifulSoup, NavigableString

doc = BeautifulSoup(sys.stdin.read(), 'html.parser')
post_content = (doc.select('body main article div[class="post-content"]')
                   .pop())
code_blocks = post_content.select('figure[class="highlight"]')

for code_block in code_blocks:
    code_block.name = 'div'
    for code_el in code_block.select('pre code'):
        for i in code_el.children:
            if not isinstance(i, NavigableString) or '\n' not in str(i):
                continue
            i.replace_with(doc.new_tag('br'))

print(post_content)
