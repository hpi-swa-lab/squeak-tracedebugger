# Trace Debugger

[![Tests](https://github.com/LinqLover/squeak-tracedebugger/actions/workflows/tests.yml/badge.svg)](https://github.com/LinqLover/squeak-tracedebugger/actions)
[![Coverage Status](https://coveralls.io/repos/github/LinqLover/squeak-tracedebugger/badge.svg?branch=main)](https://coveralls.io/github/LinqLover/squeak-tracedebugger)

Yet another program-trace-based back-in-time debugger for Squeak/Smalltalk, aimed to improve the navigation experience during debugging. Currently under initial development (in the context of the Programming Experience Seminar 2021/22 @ [hpi-swa-teaching](https://github.com/hpi-swa-teaching))! Watch this repo for releases to get notified when there is something to try out. 🙂

![image](https://user-images.githubusercontent.com/38782922/140797909-e27c6a5b-757d-45cb-aebe-55159b8e9dc4.png)

## Installation

```smalltalk
Metacello new
    baseline: 'TraceDebugger';
    repository: 'github://LinqLover/squeak-tracedebugger';
    load.
```
