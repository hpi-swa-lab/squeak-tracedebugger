tests - primitives
testPrimitiveExecuteMethod

	| proxy |
	proxy := memory object: object atTimes: (0 to: 4) withSideEffects: nil.
	self
		assert: SmallInteger
		equals: (proxy perform: #class).