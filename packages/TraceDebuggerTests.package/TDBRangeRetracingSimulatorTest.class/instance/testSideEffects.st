tests
testSideEffects

	| result otherObject |
	result := simulator evaluate: [object griffle: 4; griffle].
	self assert: #(4) equals: result values.
	self assert: (result sideEffects first includesObject: object).
	self deny: (simulator sideEffects includesObject: object).
	
	otherObject := object species new.
	result := simulator evaluate:
		[(({object. object. object. object. otherObject} at: thisContext tdbRetracingTimeIndex + 1)
			griffle: 4;
			griffle)
				+ (thisContext tdbRetracingTimeIndex
					flag: #rangeRetracingGC; "Avoid non-deterministic coalescions here. We also cannot coalesce explicitly because this would ignore side effects."
					/ 10.0)].
	self assert: #(4.0 4.1 4.2 4.3 4.4) equals: result values.
	1 to: 4 do: [:i |
		self assert: ((result sideEffects at: i) includesObject: object).
		self deny: ((result sideEffects at: i) includesObject: otherObject)].
	self deny: ((result sideEffects at: 5) includesObject: object).
	self assert: ((result sideEffects at: 5) includesObject: otherObject).
	self deny: (simulator sideEffects includesObject: object).
	self deny: (simulator sideEffects includesObject: otherObject).