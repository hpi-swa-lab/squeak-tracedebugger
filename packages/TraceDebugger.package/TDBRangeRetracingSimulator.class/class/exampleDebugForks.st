examples
exampleDebugForks

	(self forMemory: TDBMemory new atTimes: (0 to: 5))
		debug: [(thisContext tdbRetracingTimeIndex // 3) even
			ifTrue: [#even yourself]
			ifFalse: [#odd yourself]].