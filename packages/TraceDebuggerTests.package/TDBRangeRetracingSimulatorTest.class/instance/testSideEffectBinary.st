tests - primitives
testSideEffectBinary

	| array |
	simulator timeIndices: (1 to: 3).
	array := {0. 0. 0}.
	
	"No vectors"
	self
		assertQuery: [array atAllPut: 1; yourself]
			value: {1. 1. 1};
		assertQuery: [array copy atAllPut: 1; yourself]
			value: {1. 1. 1}.
	
	"Argument vector"
	self
		assertQuery: [array atAllPut: thisContext tdbRetracingTimeIndex; yourself]
			values: {{1. 1. 1}. {2. 2. 2}. {3. 3. 3}};
		assertQuery: [array copy atAllPut: thisContext tdbRetracingTimeIndex; yourself]
			values: {{1. 1. 1}. {2. 2. 2}. {3. 3. 3}}.
	
	"Receiver vector"
	self
		assertQuery:
			[{{0}. {0. 0}. {0. 0. 0}}
				in: [:arrays | (arrays at: thisContext tdbRetracingTimeIndex)
					atAllPut: thisContext tdbRetracingTimeIndex];
				yourself]
		values: {{{1}. {0. 0}. {0. 0. 0}}. {{0}. {2. 2}. {0. 0. 0}}. {{0}. {0. 0}. {3. 3. 3}}}.
	
	"Partially failing primitive"
	simulator timeIndices: (1 to: 2).
	array := #[0 0] copy.
	self
		assertQuery: [[array atAllPut: thisContext tdbRetracingTimeIndex - 1 + 255; yourself] ifError: [nil]]
			values: {#[255 255]. nil};
		assertQuery: [[array copy atAllPut: thisContext tdbRetracingTimeIndex - 1 + 255; yourself] ifError: [nil]]
			values: {#[255 255]. nil}.