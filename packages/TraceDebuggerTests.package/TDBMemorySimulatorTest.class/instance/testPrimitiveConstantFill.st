tests - primitives
testPrimitiveConstantFill

	| base |
	simulator shouldIsolate: true.
	
	base := #[0 0] copy.
	#(false true) do: [:shouldCopy |
		simulator
			evaluate:
				[| array stackpAfter stackpBefore |
				array := shouldCopy ifFalse: [base] ifTrue: [base copy].
				stackpBefore := thisContext stackPtr.
				
				array atAllPut: 3.
				self assert: (array = #[3 3]).
				
				stackpAfter := thisContext stackPtr.
				self assert: stackpBefore equals: stackpAfter]
			on: TestResult allErrors, TestResult failure
			do: [:ex | self fail: ex].
		self assert: (base = #[0 0])].