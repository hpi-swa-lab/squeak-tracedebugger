pages - private
basicScriptingAPIs
	"This method was automatically generated. Edit it using:"
	"TraceDebuggerHelp edit: #basicScriptingAPIs"
	<generated>
	^(HelpTopic
		title: 'Scripting APIs'
		contents: 
'Scripting APIs

If you are not happy with what the present tooling of the trace debugger offers, of course you are invited to open an issue in the repository!! Apart from that, here is short summary of relevant interfaces that you might want to use to assemble some information about a program trace yourself. Hand me a workspace with all code snippets.

Recording a program trace
cursor := TDBCursor traceForBlock: [''\w+'' asRegex].

Accessing the context tree (like the trace debugger does)
root := cursor context tdbFullStack first. "[] in UndefinedObject>>DoIt"
children := cursor childContextsFor: root.
firstChild := children first. "ByteString(String)>>asRegex"
someContext := cursor findContextSuchThat: [:ctx | ctx method == (PositionableStream class>>#on:)]. "ReadStream class(PositionableStream class)>>on:"
someContext sender. "RxParser>>parse:"
stream := cursor returnValueFor: someContext ifPresent: #yourself. "a ReadStream"

Do not manually access the trace instances. They are an implementation detail of the cursor and subjected to change. See the class comment for more information.

Stepping through a program trace (like the trace debugger does)
See the stepping protocol and TDBCursor exampleStepping.

For more information on the cursor interface, do this:
cursor exploreProtocol.

Accessing historic values (like the snapshot inspectors do)
All historic values are stored in the cursor''s memory and can be conveniently accessed through transparent proxies that just behave like the requested object at a certain time. Proxies can be sent further messages to access their state, all relevant answers will be wrapped in further proxy instances.

(cursor object: stream atTime: 0) position. "nil"
(cursor object: stream atTime: (cursor maxTimeIndexFor: someContext)) position. "0"
(cursor object: stream atTime: (cursor maxTimeIndexFor: root)) position. "3"

Note that all side effects during a proxy access will be isolated, so for instance, sending a proxy the message #printOn: will not actually modify the passed stream instance.

(cursor object: stream atTime: (cursor maxTimeIndexFor: someContext)) next. "$\"

For more details, refer to the comment in TDBProxy. If you ever need to escape from proxy hell, send aProxy copy tdbproxyYourself. See flag #proxyHacks.

Accessing historic ranges (like the history explorer does)
cursor object: stream collect: #position. "a TDBMemorySlice(... (0 to: 28) -> nil (29 to: 55) -> 0 (56 to: 174) -> 1 (175 to: 299) -> 2 (300 to: 2339) -> 3) ...)"
cursor memory object: stream atTimes: ((cursor minTimeIndexFor: someContext) to: (cursor maxTimeIndexFor: someContext)) collect: #position. "a TDBMemorySlice(... (18 to: 28) -> nil (29 to: 36) -> 0) ...)"

The following example illustrates that historic range queries typically need to perform a lot of error handling and need to copy objects for later reuse (#proxyHacks):

cursor object: stream collect: [:ea | [(ea originalContents first: ea position) copy] on: Error do: #yourself]. "a TDBMemorySlice((0 to: 23) -> MessageNotUnderstood: UndefinedObject>>first: (24 to: 28) -> MessageNotUnderstood: UndefinedObject>>- (29 to: 55) -> '''' (56 to: 174) -> ''\'' (175 to: 299) -> ''\w'' (300 to: 2339) -> ''\w+'')"

The resulting memory slices can be accessed and transformed. Noticeably, when you operate on the discretized values from a memory slice, your code will likely operate on transparent range proxies that represent a value in an entire time range. A range proxy will behave similar to a normal proxy, but if it is sent further messages that reveal any state that has changed within the time range, the proxy will signal a fray out error. For more details, please refer to the class comments in TDBMemorySlice and TDBRangeProxy.!
]style[(14 295 43 2 25 1 7 2 11 14 2 5 1 7 4 26 37 2 8 7 1 12 1 5 2 29 10 2 8 17 18 2 10 5 2 29 13 2 8 20 3 3 1 1 1 3 1 6 1 2 1 1 19 11 1 3 49 13 6 2 19 7 2 8 15 13 10 1 9 2 14 5 3 119 13 24 32 40 17 5 25 65 15 3 25 82 6 54 7 197 7 8 7 1 1 2 8 2 5 9 7 8 7 1 1 7 16 12 1 2 8 2 3 9 7 8 7 1 1 7 16 5 1 2 8 2 3 186 7 8 7 1 1 7 16 12 1 2 4 2 4 44 8 58 4 1 16 11 11 3 25 41 7 8 8 1 9 2 121 7 6 1 7 8 8 2 1 7 16 12 1 1 3 1 1 7 16 12 1 2 8 1 9 2 65 155 11 2 1 8 7 8 8 3 2 1 1 1 1 1 2 1 16 1 6 1 2 1 8 1 1 4 1 1 3 7 3 1 9 3 219 50 134 13 223 14 58 14 5 13 1)a0b,a0,a0dTraceDebuggerHelp openScriptingAPIWorkspace;;,a0,a0b,a0,,b,,c000000115,,c115000115n,,c000000115,,b,,b,,c000000115,,c000000115,,c000000115,,c000115115i,,b,,c000000115,,b,,c000000115,,c000115115i,,b,,c000000115,,c000000115,,cgray;,,c000000115,,c000000115,,c000000115,,c000115000,,c000000115,c000115000,,c000115115i,,c000000115,,c000115115i,,b,,c000000115,,c000000115,,c000000115,,c000115115i,,u,,LTDBCursor Comment;,,b,,Rcode://
ToolSet browseClass: TDBCursor category: ''stepping'';,,LTDBCursor class exampleStepping;,,c000000115,,b,,Rcode://
ToolSet browse: TDBCursor selector: #memory;,,Rcode://
ToolSet browse: TDBCursor selector: #object:atTime:;,,c000000115,,c000000115,,c115000000,,c000000115,,c000115115i,,c000000115,,c000000115,,c000115000,,c000000115,,c000115000,,c000000115,,c000115115i,,c000000115,,c000000115,,c000115000,,c000000115,,c000115000,,c000000115,,c000115115i,,c000000115,,c000000115,,c000115000,,c000000115,,c000115000,,c000000115,,c000115115i,,LTDBProxy Comment;,,c000000115,,c000000115,,Rcode://
self systemNavigation browseAllImplementorsOf: #proxyHacks;,,b,,c000000115,,c000000115,,c000000115,,c000115115i,,c000000115,,c000000115,,c000000115,,c000115000,,c000000115,,c000115000,,c000000115,,c000115000,,c000000115,,c000115000,,c000000115,,c000000115,,c000115115i,,Rcode://
self systemNavigation browseAllImplementorsOf: #proxyHacks;,,c000115115i,,c000000115,,c000000115,,c000000115,,cgray;,,c000115000,c115000115,c000000115,,c000000115,,c000000115,,c000000115,,c000000115,c115000115,,c000000115,c000115000,,c000000115,,c000000115,,c000000115,,c000115115i,,a0,Rcode://
TDBMemorySlice>>#rangeValueAtTime:;,a0,LTDBRetracingFrayOut Comment;,a0,LTDBMemorySlice Comment;,a0,LTDBRangeProxy Comment;,a0!' readStream nextChunkText)
			key: #basicScriptingAPIs;
			shouldStyle: false;
			yourself