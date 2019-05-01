#!/usr/bin/env python3
# coding=utf-8

'''slug-html'''

# Standard library imports.
from __future__ import division
import sys
import os
import atexit
import gc

from bs4 import BeautifulSoup

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

doc = BeautifulSoup(sys.stdin.read(), 'html.parser')
post_content = (doc.find_all(name='div', class_='post-content')
                   .pop())
post_content_doc = BeautifulSoup(str(post_content), 'html.parser')
