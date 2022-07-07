tests - primitives
testPrimitiveExecuteMethod

	| proxy |
	proxy := memory object: object atTimes: (0 to: 4) withSideEffects: nil.
	self
		assert: TDBTestObject
		equals: (proxy perform: #class).