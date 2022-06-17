benchmarks
benchSIMDPrimitiveLookup

	| array |
	array := {Object. Behavior. SmallInteger. Context}.
	^ simulator evaluate: [(array at: thisContext tdbRetracingTimeIndex + 1) identityHash]