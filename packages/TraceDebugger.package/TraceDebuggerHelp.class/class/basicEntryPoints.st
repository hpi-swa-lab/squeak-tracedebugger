pages - private
basicEntryPoints
	"This method was automatically generated. Edit it using:"
	"TraceDebuggerHelp edit: #basicEntryPoints"
	<generated>
	^(HelpTopic
		title: 'Entry points'
		contents: 
'Entry points

There are several ways to open a trace debugger:

1. Debug a Process or a block by sending #debugTrace to it:

[4 / 6] debugTrace.
[4 / 6] newProcess debugTrace.

You can also send #traceAndDebug to start with a complete trace (instead of tracing the program lazily as you step through it):

[4 / 6] traceAndDebug.
[4 / 6] newProcess traceAndDebug.

2. In a normal debugger, press the new Trace It button on the right. This will replace the debugger with a trace debugger and was considered the most convenient entry point by testers.

<#figureTraceIt>

3. To trace entire world cycles in Morphic, drop a tracer button in the world and click it:

TraceDebugger exampleWorldCyclesFor: 5 seconds.

For more inspiration, browse all invocation examples.!
]style[(12 55 26 12 11 9 1 1 1 1 1 1 2 10 3 1 1 1 1 1 2 10 1 10 1 20 14 97 1 1 1 1 1 1 2 13 3 1 1 1 1 1 2 10 1 13 1 5 21 15 8 139 16 95 14 22 1 1 1 7 1 24 31)b,,b,,Rcode:// self systemNavigation browseAllImplementorsOf: #debugTrace;,,I1,c119000000I1,I1,c000000119I1,I1,c119000000I1,I1,c000000119I1,I1,c119000000I1,I1,c000000119I1,I1,c119000000I1,I1,c000000119I1,I1,c000000119I1,I1,,Rurl:// self systemNavigation browseAllImplementorsOf: #traceAndDebug;,,I1,c119000000I1,I1,c000000119I1,I1,c119000000I1,I1,c000000119I1,I1,c119000000I1,I1,c000000119I1,I1,c119000000I1,I1,c000000119I1,I1,c000000119I1,I1,,b,,i,,I1,,I1,c000000126I1,I1,c126000000I1,I1,c000000126I1,I1,,Rcode:// ToolSet browseClass: TraceDebugger class category: ''examples'';!' readStream nextChunkText)
			key: #basicEntryPoints;
			shouldStyle: false;
			yourself