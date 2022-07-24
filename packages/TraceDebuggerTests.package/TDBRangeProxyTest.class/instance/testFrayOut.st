tests
testFrayOut

	proxy := self classUnderTest for: object inMemory: memory atTimes: (2 to: 3) withSideEffects: nil.
	
	self
		should: [proxy plonk]
		raise: TDBRetracingFrayOut
		withExceptionDo: [:error |
			self assert: proxy equals: error proxy.
			self assert: {2 to: 2. 3 to: 3} equals: error slice times.
			self assert: #(4 1) equals: error slice values].
	
	memory object: object priorTo: 4 instVarAt: 1 put: 4.
	self assert: 4 equals: proxy plonk.