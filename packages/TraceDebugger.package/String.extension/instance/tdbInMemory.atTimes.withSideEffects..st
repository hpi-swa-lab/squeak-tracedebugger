*TraceDebugger-Core-proxies-converting
tdbInMemory: aMemory atTimes: timeIndices withSideEffects: sideEffects

	((aMemory includesObject: self)
		or: [sideEffects notNil and: [sideEffects includesObject: self]])
			ifFalse: [^ self]. "see #optimize comment in TDBMemory >> #object:atTimes:withSideEffects:"
	
	^ super tdbInMemory: aMemory atTimes: timeIndices withSideEffects: sideEffects