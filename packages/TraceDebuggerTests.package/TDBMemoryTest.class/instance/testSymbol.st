tests
testSymbol
	"Regression test for #asTdbProxyInMemory:atTime:."

	| symbol |
	symbol := ByteSymbol new: 1.
	memory object: symbol priorTo: 1 fieldAt: 1 put: Character null.
	symbol copyFrom: 'x'.
	memory object: symbol priorTo: 2 fieldAt: 1 put: $x.
	
	self assert: Character null equals: (memory object: symbol atTime: 0) first.
	self assert: $x equals: (memory object: symbol atTime: 1) first.