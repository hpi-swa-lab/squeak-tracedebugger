tests - primitives
testPrimitiveExecuteMethod

	self assert: TDBTestObject equals: (simulator evaluate:
		[object executeMethod: Object >> #class]).