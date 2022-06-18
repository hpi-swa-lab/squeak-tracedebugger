tests - primitives
testPrimitive118

	simulator timeIndices: (1 to: 3).
	
	"No vectors"
	self assertQuery: [1 tryPrimitive: 1 withArgs: {2}] unforkedValue: 3.
	
	self
		assertQuery: [thisContext tdbRetracingTimeIndex tryPrimitive: 1 withArgs: {2}]
		values: {3. 4. 5}.
	self
		assertQuery: [1 tryPrimitive: 1 withArgs: {thisContext tdbRetracingTimeIndex}]
		values: {2. 3. 4}.
	self
		assertQuery: [thisContext tdbRetracingTimeIndex tryPrimitive: 1 withArgs: {thisContext tdbRetracingTimeIndex}]
		values: {2. 4. 6}.
	self
		assertQuery: [1 tryPrimitive: thisContext tdbRetracingTimeIndex withArgs: {2}]
		values: {3. -1. true}.
	self
		assertQuery: [thisContext tdbRetracingTimeIndex tryPrimitive: thisContext tdbRetracingTimeIndex withArgs: {2}]
		values: {3. 0. false}.
	
	"Partially failing primitive"
	self
		assertQuery:
			[(1 tryPrimitive: ({1.0. 2. nil} at: thisContext tdbRetracingTimeIndex) withArgs: {2}) class]
		values: {Array. SmallInteger. Array}.