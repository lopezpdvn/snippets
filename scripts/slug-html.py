#!/usr/bin/env python3
# coding=utf-8

'''slug-html'''

# Standard library imports.
from __future__ import division
import sys
import os
import atexit
import gc

def on_exit():
    '''Actions to do on exit.'''
    # Invoke the garbage collector.
    gc.collect()

# Program name from file name.
PN = os.path.splitext(sys.argv[0])[0]

# Log file.
LOGF = ''.join([PN, '_log', '.txt'])

atexit.register(on_exit)

print(sys.stdin.read(), end='')
