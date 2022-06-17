tests - primitives
testCloneObject

	| array byteArray |
	simulator timeIndices: (1 to: 3).
	array := {0. 0. 0}.
	byteArray := #[0 0 0].
	
	"No vectors"
	self
		assertQuery: [array at: 1 put: 1; copy]
			value: {1. 0. 0};
		assertQuery: [array copy at: 1 put: 1; yourself]
			value: {1. 0. 0};
		assertQuery: [byteArray at: 1 put: 1; copy]
			value: #[1 0 0];
		assertQuery: [byteArray copy at: 1 put: 1; yourself]
			value: #[1 0 0].
	
	self
		assertQuery: [array at: 1 put: thisContext tdbRetracingTimeIndex; copy]
			values: {{1. 0. 0}. {2. 0. 0}. {3. 0. 0}};
		assertQuery: [array copy at: 1 put: thisContext tdbRetracingTimeIndex; copy]
			values: {{1. 0. 0}. {2. 0. 0}. {3. 0. 0}};
		assertQuery: [byteArray at: 1 put: thisContext tdbRetracingTimeIndex; copy]
			values: {#[1 0 0]. #[2 0 0]. #[3 0 0]};
		assertQuery: [byteArray copy at: 1 put: thisContext tdbRetracingTimeIndex; copy]
			values: {#[1 0 0]. #[2 0 0]. #[3 0 0]}.