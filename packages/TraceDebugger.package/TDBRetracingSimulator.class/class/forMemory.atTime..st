instance creation
forMemory: aMemory atTime: timeIndex

	| retracingSimulator |
	retracingSimulator := self new
		memory: aMemory;
		timeIndex: timeIndex;
		yourself.
	^ "TDBSandboxSimulator new
		nextSimulator: retracingSimulator;
		yourself"
		retracingSimulator