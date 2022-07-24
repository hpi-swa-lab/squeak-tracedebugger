tests - primitives
testCloneObject

	| array byteArray |
	simulator timeIndices: (1 to: 3).
	array := {0. 0. 0}.
	byteArray := #[0 0 0].
	
	"No vectors"
	self
		assertQuery: [array at: 1 put: 10; copy]
			value: {10. 0. 0};
		assertQuery: [array copy at: 1 put: 10; yourself]
			value: {10. 0. 0};
		assertQuery: [byteArray at: 1 put: 10; copy]
			value: #[10 0 0];
		assertQuery: [byteArray copy at: 1 put: 10; yourself]
			value: #[10 0 0].
	
	self
		assertQuery: [array at: 1 put: thisContext tdbRetracingTimeIndex * 10; copy]
			values: {{10. 0. 0}. {20. 0. 0}. {30. 0. 0}};
		assertQuery: [array copy at: 1 put: thisContext tdbRetracingTimeIndex * 10; copy]
			values: {{10. 0. 0}. {20. 0. 0}. {30. 0. 0}};
		assertQuery: [byteArray at: 1 put: thisContext tdbRetracingTimeIndex * 10; copy]
			values: {#[10 0 0]. #[20 0 0]. #[30 0 0]};
		assertQuery: [byteArray copy at: 1 put: thisContext tdbRetracingTimeIndex * 10; copy]
			values: {#[10 0 0]. #[20 0 0]. #[30 0 0]}.