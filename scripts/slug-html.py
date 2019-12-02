#!/usr/bin/env python3
# coding=utf-8

'''slug-html'''

import sys

from bs4 import BeautifulSoup, NavigableString

doc = BeautifulSoup(sys.stdin.read(), 'html.parser')
post_content = (doc.select('body main article div[class="post-content"]')
                   .pop())
figure_highlight = post_content.select('figure[class="highlight"]')

for code_block in figure_highlight:
    code_block.name = 'div'

for code_el in post_content.select('code'):
    to_extract = []
    for nStr in code_el.descendants:
        _nStr = str(nStr)
        if not isinstance(nStr, NavigableString) or '\n' not in _nStr:
            continue
        for s in _nStr:
            newS = doc.new_tag('br') if s == '\n' else s
            nStr.insert_before(newS)
        to_extract.append(nStr)

    for x in to_extract:
        x.extract()

post_content_display = str(post_content).replace('\n', '')
print(post_content_display)
