benchmarks
verifyBenchSIMDPrimitiveLookup: result

	| array |
	array := {Object. Behavior. SmallInteger. Context}.
	^ result values = (array collect: #identityHash)