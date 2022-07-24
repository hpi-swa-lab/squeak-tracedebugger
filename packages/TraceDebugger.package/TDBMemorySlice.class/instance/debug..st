support
debug: aBlock
	"Bring up a debugger evaluate aBlock with each of the receiver's values by in a TDBRangeRetracingSimulator. Experimental. See the comment in #collect: for further details on the execution semantics during range retracing."

	| index interval sideEffect value simulator |
	TDBExperimentalDebugRangeRetracingWarning signal: 'Experimental feature! This will debug the range retracing simulator. If the execution forks, you have to choose a subtime interval to narrow down the execution. Note that the debugger''s inspectors might show improper values. Use the context variable inspector on the right to be sure, or perform queries against ThisContext simulator. Suppress this warning if you don''t care.'.
	
	index := intervals size = 1
		ifTrue: [1]
		ifFalse:
			[(Project uiManager chooseFrom: intervals title: 'Time interval to debug?')
				ifNil: [^ nil]].
	interval := intervals at: index.
	sideEffect := sideEffects ifNotNil: [sideEffects at: index].
	value := rawValues at: index.
	
	simulator := TDBRetracingSimulator forMemory: memory atTimes: interval.
	sideEffect ifNotNil:
		[simulator sideEffects: sideEffect].
	self flag: #hacked. "better than #isDoIt below would be a #runUntil: argument"
	^ simulator
		debug: [aBlock value: value]
		runUntil: [:ctx | ctx selector isDoIt]