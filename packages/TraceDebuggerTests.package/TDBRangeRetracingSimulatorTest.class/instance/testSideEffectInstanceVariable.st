tests - primitives
testSideEffectInstanceVariable

	"No vectors"
	self assertQuery: [object plonk: 4. object plonk] value: 4.
	
	self
		assertQuery: [object plonk: thisContext tdbRetracingTimeIndex negated. object plonk]
		values: {0. -1. -2. -3. -4}.