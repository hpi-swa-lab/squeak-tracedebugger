tests - primitives
testPrimitiveStringReplace

	| base |
	simulator shouldIsolate: true.
	
	base := #(1 2 3 4 5) copy.
	#(false true) do: [:shouldCopy |
		self assert:
			(simulator evaluate:
				[| array |
				array := shouldCopy ifFalse: [base] ifTrue: [base copy].
				array replaceFrom: 2 to: 4 with: #(6 7 8 9 10 11) startingAt: 3.
				array = #(1 8 9 10 5)]).
		self assert: (base = #(1 2 3 4 5))].