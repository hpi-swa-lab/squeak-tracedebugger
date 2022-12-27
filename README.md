# Trace Debugger

[![Tests](https://github.com/hpi-swa-lab/squeak-tracedebugger/actions/workflows/tests.yml/badge.svg)](https://github.com/hpi-swa-lab/squeak-tracedebugger/actions/workflows/tests.yml)
[![Coverage Status](https://coveralls.io/repos/github/hpi-swa-lab/squeak-tracedebugger/badge.svg?branch=main)](https://coveralls.io/github/hpi-swa-lab/squeak-tracedebugger)
[![Benchmarks](https://img.shields.io/badge/-benchmarks-blue)](https://hpi-swa-lab.github.io/squeak-tracedebugger/dev/bench/)
[![Build](https://github.com/hpi-swa-lab/squeak-tracedebugger/actions/workflows/build.yml/badge.svg)](https://github.com/hpi-swa-lab/squeak-tracedebugger/actions/workflows/build.yml)

A lightweight and efficient back-in-time debugger for [Squeak](http://squeak.org/) to trace and retrace past method invocations and state changes.
Powered by [SimulationStudio](https://github.com/LinqLover/SimulationStudio).

Key features:

- **Interactive call tree** instead of a stack list
- **Step back button**
- **New navigation shortcuts** (jump to sender, jump to callee, ...)
- **Context search** dialog
- **Context filters** (by package, selector, receiver, ...)
- **Snapshot inspectors/explorers** for objects during debugging
- **History explorer** for navigating through the side effects of objects

<p align="center">
<img src="https://github.com/hpi-swa-lab/squeak-tracedebugger/blob/gh-pages/screenshots/TraceDebugger.png?raw=true" width="50.2%"></img>
<img src="https://github.com/hpi-swa-lab/squeak-tracedebugger/blob/gh-pages/screenshots/HistoryExplorer.png?raw=true" width="45%"></img>
</p>

<small><b>Fun fact:</b> All screenshots are <a href="./.github/workflows/build.yml">CI-generated</a>. Find all other screenshots <a href="https://github.com/hpi-swa-lab/squeak-tracedebugger/tree/gh-pages/screenshots">here</a>.</small>

Read the [exposés and the product visions](./docs/) for more details about the aims and USPs of this project.
In the [`studies`](./studies/) folders, you can also find the documentation of all experiments that have been conducted so far.
There are many interesting open [issues](https://github.com/hpi-swa-lab/squeak-tracedebugger/issues) for future work.

## Installation

We offer a **pre-configured all-in-one image** for the latest [Squeak Trunk](https://files.squeak.org/trunk/). Please go to the [releases section](https://github.com/hpi-swa-lab/squeak-tracedebugger/releases), download and extract the latest `TraceDebugger-*.zip` archive, and execute it.

To install the TraceDebugger manually **for the latest Squeak Trunk,** evaluate the following in a workspace:

```smalltalk
Metacello new
	baseline: 'TraceDebugger';
	repository: 'github://hpi-swa-lab/squeak-tracedebugger';
	get;
	load.
```

For the LTS (long-term support) version **for Squeak 6.0,** you can use the following:

```smalltalk
Metacello new
	baseline: 'TraceDebugger';
	repository: 'github://hpi-swa-lab/squeak-tracedebugger:squeak60';
	get;
	load.
```

You can also check out the repository via [Squot](https://github.com/hpi-swa/Squot) and install all dependencies manually.

To install updates, evaluate the following:

```smalltalk
TraceDebugger selfUpdate.
```

(You can also do this via the [window menu ![window menu](./assets/windowMenuButton.png)](https://github.com/hpi-swa-lab/squeak-tracedebugger/blob/gh-pages/screenshots/windowMenu.png) of every trace debugger.)

## Usage

For a quick start, open a normal expression in a debugger and press the new <kbd>Trace it</kbd> button on the right. For a detailed manual on the TraceDebugger, please read the in-image help here:

```smalltalk
TraceDebuggerHelp openHelpBrowser.
```

A static version of the manual is also available [online](https://hpi-swa-lab.github.io/squeak-tracedebugger/help/); however, it is recommended to use the interactive in-image version instead.

(Again, you can also open this help via the [window menu ![window menu](./assets/windowMenuButton.png)](https://github.com/hpi-swa-lab/squeak-tracedebugger/blob/gh-pages/screenshots/windowMenu.png) of every trace debugger.)

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
			<td>Tracing/retracing machinery and UI for the TraceDebugger and the history explorer. Integration into the base system. Help contents.</td>
		</tr>
		<tr>
			<td><a href="packages/TraceDebuggerTests.package/">TraceDebuggerTests</a></td>
			<td>Unit tests, integration tests, and acceptance tests for the solution.</td>
		</tr>
		<tr>
			<td><a href="packages/TraceDebuggerBenchmarks.package/">TraceDebuggerBenchmarks</a></td>
			<td>Benchmarks for the speed of the tracing/retracing engine and the UI.</td>
		</tr>
		<tr>
			<td><a href="packages/TraceDebuggerJobs.package/">TraceDebuggerJobs</a></td>
			<td>Auxiliary CI/CD jobs to create screenshots. See also the folders <a href=".github/workflows/"><code>./github/workflows</code></a> and <a href="scripts/"><code>./scripts</code></a>.</td>
		</tr>
	</tbody>
</table>

Additionally, some parts of the work on this project have been contributed to different upstream dependencies, see [Upstream Contributions](./UPSTREAM.md).

## Related Projects

- [**Hidden Modularity:** Traces of Object Communication](https://github.com/LucPrestin/Hidden-Modularity) by Luc Prestin ([@LucPrestin](https://github.com/LucPrestin)) and Marcel Taeumel ([@marceltaeumel](https://github.com/marceltaeumel))
- [MessageSendRecorder](https://github.com/hpi-swa/MessageSendRecorder)

## Acknowledgments

This project was initially developed in the context of the Programming Experience Seminar 2021/22 @ [hpi-swa-teaching](https://github.com/hpi-swa-teaching) and developed further in the context of the Reverse Engineering Seminar 2022 @ [hpi-swa-teaching](https://github.com/hpi-swa-teaching). Many thanks to my careful advisor [@marceltaeumel](https://github.com/marceltaeumel)! Furthermore, I'd like to thank [@tom95](https://github.com/tom95) and [@stlutz](https://github.com/stlutz) for their valuable feedback on the prototype.
