*TraceDebugger-UI-public access
tdbMakeBlockForCue: aCue noPattern: noPattern logged: logFlag ifFail: failBlock

	| block |
	block := self tdbMakeBlockForCue: aCue noPattern: noPattern ifFail: [^ failBlock value].
	logFlag ifTrue:
		[SystemChangeNotifier uniqueInstance evaluated: cue stringToLog context: cue context].
	^ block