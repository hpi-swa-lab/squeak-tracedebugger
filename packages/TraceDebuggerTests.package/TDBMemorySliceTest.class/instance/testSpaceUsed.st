tests - support
testSpaceUsed
	"Smoke test."

	slice := self classUnderTest
		memory: self memoryClass new
		intervals: {1 to: 1}
		rawValues: {nil}.
	self assert: slice spaceUsed < 100.
	
	slice := self classUnderTest
		memory: self memoryClass new
		intervals: ((1 to: 1000) collect: [:ea | ea to: ea])
		rawValues: ((1 to: 1000) collect: [:ea | ea]).
	self assert: slice spaceUsed > (1000 * 8 * 2).
	self assert: slice spaceUsed < (1000 * 8 * 2 * 4).
	
	slice := self classUnderTest
		memory: self memoryClass new
		intervals: {1 to: 1}
		rawValues: {Array new: 1000}.
	self assert: slice spaceUsed > (1000 * 8).
	self assert: slice spaceUsed < (1000 * 8 * 4).
	
	slice := self classUnderTest
		memory: self memoryClass new
		intervals: {1 to: 1}
		rawValues: {nil}
		sideEffects: {self memoryClass new
			object: self priorTo: 1 atSlot: #plonk put: (Array new: 1000);
			yourself}.
	self assert: slice spaceUsed > (1000 * 8).
	self assert: slice spaceUsed < (1000 * 8 * 4).