#!/usr/bin/env python3
# coding=utf-8

'''slug-html'''

# Standard library imports.
from __future__ import division
from html.parser import HTMLParser
import sys
import os
import atexit
import gc

class JekyllSlugger(HTMLParser):
    def __init__(self):
        super().__init__()
        html = False
        body = False
        main = False
        article = False
        post = False

    def handle_starttag(self, tag, attrs):
        if not is_post_content_element(tag, attrs):
            return
        print("Encountered post content:", tag)

def is_post_content_element(tag, attrs):
    if tag != 'div':
        return False

    for k, v in attrs:
        if k == 'class' and v == 'post-content':
            return True

    return False

def on_exit():
    '''Actions to do on exit.'''
    # Invoke the garbage collector.
    gc.collect()

# Program name from file name.
PN = os.path.splitext(sys.argv[0])[0]

# Log file.
LOGF = ''.join([PN, '_log', '.txt'])

atexit.register(on_exit)
slugger = JekyllSlugger()
slugger.feed(sys.stdin.read())

#print(sys.stdin.read(), end='')
