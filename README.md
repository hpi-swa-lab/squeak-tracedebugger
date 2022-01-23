# Trace Debugger

[![Tests](https://github.com/LinqLover/squeak-tracedebugger/actions/workflows/tests.yml/badge.svg)](https://github.com/LinqLover/squeak-tracedebugger/actions)
[![Coverage Status](https://coveralls.io/repos/github/LinqLover/squeak-tracedebugger/badge.svg?branch=main)](https://coveralls.io/github/LinqLover/squeak-tracedebugger)
[![Benchmarks](https://img.shields.io/badge/-benchmarks-blue)](https://LinqLover.github.io/squeak-tracedebugger/dev/bench/)

Yet another program-trace-based back-in-time debugger for [Squeak/Smalltalk](https://squeak.org/), aimed to improve the navigation experience during debugging.
Read the [exposé](./docs/exposé.md) and the [product visions](./docs/product-visions.md) for more details about the aims and USPs of this project.

Currently under initial development (in the context of the Programming Experience Seminar 2021/22 @ [hpi-swa-teaching](https://github.com/hpi-swa-teaching))!
Impression of the current progress:

![`TraceDebugger exampleRegex`](images/regex-trace.png)

Watch this repo for releases to get notified about major advances. 🙂

![image](https://user-images.githubusercontent.com/38782922/140797909-e27c6a5b-757d-45cb-aebe-55159b8e9dc4.png)

## Installation

Get a [recent VM](https://files.squeak.org/nightly/) first.
Then do the following in a workspace:

```smalltalk
Metacello new
    baseline: 'TraceDebugger';
    repository: 'github://LinqLover/squeak-tracedebugger';
    load.
```

You can also check out the repository via [Squot](https://github.com/hpi-swa/Squot) and install all dependencies manually.

## Usage

Debug an expression in the Trace Debugger:

```smalltalk
TraceDebugger openOn: ['\w+' asRegex].
```

Shortcut:
```smalltalk
[2 / 0] debugTrace.
```

For further examples, see the class-side `example` protocol of the `TraceDebugger` class.
