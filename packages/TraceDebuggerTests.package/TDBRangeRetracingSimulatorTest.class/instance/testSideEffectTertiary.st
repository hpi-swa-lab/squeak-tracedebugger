tests - primitives
testSideEffectTertiary

	"No vectors"
	| array |
	array := {0. 0. 0}.
	self
		assertQuery: [array at: 2 put: 1; yourself]
			value: {0. 1. 0};
		assertQuery: [array copy at: 2 put: 1; yourself]
			value: {0. 1. 0}.
	
	array := {0. 0. 0}.
	self
		assertQuery: [array at: 2 put: thisContext tdbRetracingTimeIndex; yourself]
			values: {{0. 0. 0}. {0. 1. 0}. {0. 2. 0}. {0. 3. 0}. {0. 4. 0}};
		assertQuery: [array copy at: 2 put: thisContext tdbRetracingTimeIndex; yourself]
			values: {{0. 0. 0}. {0. 1. 0}. {0. 2. 0}. {0. 3. 0}. {0. 4. 0}}.
	array := {0. 0. 0. 0. 0}.
	self
		assertQuery: [array at: thisContext tdbRetracingTimeIndex + 1 put: 10; yourself]
			values: {{10. 0. 0. 0. 0}. {0. 10. 0. 0. 0}. {0. 0. 10. 0. 0}. {0. 0. 0. 10. 0}. {0. 0. 0. 0. 10}};
		assertQuery: [array copy at: thisContext tdbRetracingTimeIndex + 1 put: 10; yourself]
			values: {{10. 0. 0. 0. 0}. {0. 10. 0. 0. 0}. {0. 0. 10. 0. 0}. {0. 0. 0. 10. 0}. {0. 0. 0. 0. 10}}.
	self
		assertQuery: [array at: thisContext tdbRetracingTimeIndex + 1 put: thisContext tdbRetracingTimeIndex; yourself]
			values: {{0. 0. 0. 0. 0}. {0. 1. 0. 0. 0}. {0. 0. 2. 0. 0}. {0. 0. 0. 3. 0}. {0. 0. 0. 0. 4}};
		assertQuery: [array copy at: thisContext tdbRetracingTimeIndex + 1 put: thisContext tdbRetracingTimeIndex; yourself]
			values: {{0. 0. 0. 0. 0}. {0. 1. 0. 0. 0}. {0. 0. 2. 0. 0}. {0. 0. 0. 3. 0}. {0. 0. 0. 0. 4}}.
	
	"Instance variable"
	self
		assertQuery: [object instVarNamed: 'plonk' put: thisContext tdbRetracingTimeIndex; plonk]
		values: {0. 1. 2. 3. 4}.
	
	"Bits classes"
	array := #[0 0 0] copy.
	self
		assertQuery: [array at: 2 put: thisContext tdbRetracingTimeIndex; yourself]
			values: {#[0 0 0]. #[0 1 0]. #[0 2 0]. #[0 3 0]. #[0 4 0]};
		assertQuery: [array copy at: 2 put: thisContext tdbRetracingTimeIndex; yourself]
			values: {#[0 0 0]. #[0 1 0]. #[0 2 0]. #[0 3 0]. #[0 4 0]}.
	self
		shouldRaiseError: [simulator evaluate: [array at: 2 put: {thisContext tdbRetracingTimeIndex}; yourself]];
		shouldRaiseError: [simulator evaluate: [array copy at: 2 put: {thisContext tdbRetracingTimeIndex}; yourself]].