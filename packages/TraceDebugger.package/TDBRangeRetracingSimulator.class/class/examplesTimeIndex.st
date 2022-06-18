examples
examplesTimeIndex

	(self forMemory: TDBMemory new atTimes: (0 to: 3)) evaluate:
		[thisContext tdbRetracingTimeIndex].
	
	(self forMemory: TDBMemory new atTimes: (0 to: 3)) evaluate:
		[thisContext tdbRetracingTimeIndex * 10].
	
	(self forMemory: TDBMemory new atTimes: (0 to: 3)) evaluate:
		[thisContext tdbRetracingTimeIndex even].
	
	(self forMemory: TDBMemory new atTimes: (0 to: 3)) evaluate:
		[(thisContext tdbRetracingTimeIndex even ifTrue: [-1])
			* thisContext tdbRetracingTimeIndex]. "error"
	
	(self forMemory: TDBMemory new atTimes: (1 to: 4)) evaluate:
		[#(a b c d e) copy at: thisContext tdbRetracingTimeIndex put: #x; copy].
	
	(self forMemory: TDBMemory new atTimes: (0 to: 3)) evaluate:
		[#(a b c d e) copy at: 1 put: thisContext tdbRetracingTimeIndex; yourself].