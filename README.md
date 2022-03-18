# Trace Debugger

[![Tests](https://github.com/LinqLover/squeak-tracedebugger/actions/workflows/tests.yml/badge.svg)](https://github.com/LinqLover/squeak-tracedebugger/actions)
[![Coverage Status](https://coveralls.io/repos/github/LinqLover/squeak-tracedebugger/badge.svg?branch=main)](https://coveralls.io/github/LinqLover/squeak-tracedebugger)
[![Benchmarks](https://img.shields.io/badge/-benchmarks-blue)](https://LinqLover.github.io/squeak-tracedebugger/dev/bench/)

A lightweight and efficient back-in-time debugger for [Squeak](http://squeak.org/) to trace and retrace past method invocations and state changes.

Key features:

- **Interactive call tree** instead of a stack list
- **Step back button**
- **New navigation shortcuts** (jump to sender, jump to callee, ...)
- **Context search** dialog
- **Context filters** (by package, selector, receiver, ...)
- **Snapshot inspectors/explorers** for objects during debugging

![TraceDebugger](https://github.com/LinqLover/squeak-tracedebugger/blob/gh-pages/screenshots/TraceDebugger.png?raw=true)

Read the [exposé](./docs/exposé.md) and the [product visions](./docs/product-visions.md) for more details about the aims and USPs of this project.
In the [`studies`](./studies/) folders, you can also find the documentation of all experiments that have been conducted so far.

## Installation

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

For further examples, see the meta protocol `examples` of the `TraceDebugger` class.

## Architecture

This solution is organized as follows:

<table>
	<thead>
		<tr>
			<td><strong>Package</strong></td>
			<td><strong>Description</strong></td>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td><a href="packages/BaselineOfTraceDebugger.package/">BaselineOfTraceDebugger</a></td>
			<td>Package metadata. Contains scripts to set up the deploy image and fill it with an initial welcome text.</td>
		</tr>
		<tr>
			<td><a href="packages/TraceDebugger.package/">TraceDebugger</a></td>
			<td>Tracing machinery and UI for the TraceDebugger. Integration into the base system..</td>
		</tr>
		<tr>
			<td><a href="packages/TraceDebuggerTests.package/">TraceDebuggerTests</a></td>
			<td>Unit tests, integration tests, and acceptance tests for the solution.</td>
		</tr>
		<tr>
			<td><a href="packages/TraceDebuggerBenchmarks.package/">TraceDebuggerBenchmarks</a></td>
			<td>Benchmarks for the speed of the tracing engine and the UI.</td>
		</tr>
		<tr>
			<td><a href="packages/TraceDebuggerJobs.package/">TraceDebuggerJobs</a></td>
			<td>Auxiliary CI/CD jobs to create screenshots. See also the folders <a href=".github/workflows/"><code>./github/workflows</code></a> and <a href="scripts/"><code>./github/workflows</code></a>.</td>
		</tr>
	</tbody>
</table>

Additionally, some parts of the work on this projects have been contributed to different upstream dependencies, see [Upstream Contributions](./UPSTREAM.md).

## Acknowledgments

This project was initially developed in the context of the Programming Experience Seminar 2021/22 @ [hpi-swa-teaching](https://github.com/hpi-swa-teaching)). Many thanks to my careful advisor [@marceltaeumel](https://github.com/marceltaeumel)! Furthermore, I'd like to thank [@tom95](https://github.com/tom95) and [@stlutz](https://github.com/stlutz) for their valuable feedback to the protoype.
