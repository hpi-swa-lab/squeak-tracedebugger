*TraceDebugger-Core-proxies-converting
tdbInMemory: aMemory atTime: timeIndex withSideEffects: sideEffects

	((aMemory includesObject: self)
		or: [sideEffects notNil and: [sideEffects includesObject: self]])
			ifFalse: [^ self]. "see #optimize comment in TDBMemory >> #object:atTime:withSideEffects:"
	
	^ super tdbInMemory: aMemory atTime: timeIndex withSideEffects: sideEffects