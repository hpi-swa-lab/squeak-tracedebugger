*TraceDebugger-UI-public access
tdbMakeBlockForCue: aCue noPattern: noPattern ifFail: failBlock
	"Answer a BlockClosure corresponding to cue source. The block expects one argument, the receiver to evaluate the cue source against."

	| method methodNode |
	methodNode := self compileCue: aCue noPattern: noPattern ifFail: [^ failBlock value].
	method := self interactive
		ifTrue: [methodNode generateWithTempNames]
		ifFalse: [methodNode generate].
	^ [:receiver | receiver
		withArgs: (cue context ifNil: [#()] ifNotNil: [{cue context}])
		executeMethod: method]