examples
exampleScriptingAPIs
<tdbNotebook>
"NOTE: This should be kept in sync with TraceDebuggerHelp class>>#basicScriptingAPIs."

| cursor root children firstChild someContext stream |
cursor := TDBCursor traceForBlock: ['\w+' asRegex].
root := cursor context tdbFullStack first. "[] in TDBCursor class>>exampleScriptingAPIs"
children := cursor childContextsFor: root.
firstChild := children first. "ByteString(String)>>asRegex"
someContext := cursor findContextSuchThat: [:ctx | ctx method == (PositionableStream class>>#on:)]. "ReadStream class(PositionableStream class)>>on:"
someContext sender. "RxParser>>parse:"
stream := cursor returnValueFor: someContext ifPresent: #yourself. "a ReadStream"

(cursor object: stream atTime: 0) position. "nil"
(cursor object: stream atTime: (cursor maxTimeIndexFor: someContext)) position. "0"
(cursor object: stream atTime: (cursor maxTimeIndexFor: root)) position. "3"
(cursor object: stream atTime: (cursor maxTimeIndexFor: someContext)) next. "$\"

cursor object: stream collect: #position. "a TDBMemorySlice(*(0 to: 28) -> nil (29 to: 55) -> 0 (56 to: 174) -> 1 (175 to: 299) -> 2 (300 to: 2338) -> 3)*)"
cursor memory object: stream atTimes: ((cursor minTimeIndexFor: someContext) to: (cursor maxTimeIndexFor: someContext)) collect: #position. "a TDBMemorySlice(*(18 to: 28) -> nil (29 to: 36) -> 0)*)"
cursor object: stream collect: [:ea | [(ea originalContents first: ea position) copy] on: Error do: #yourself]. "a TDBMemorySlice((0 to: 23) -> MessageNotUnderstood: UndefinedObject>>first: (24 to: 28) -> MessageNotUnderstood: UndefinedObject>>- (29 to: 55) -> '' (56 to: 174) -> '\' (175 to: 299) -> '\w' (300 to: 2338) -> '\w+')"