accessing
shouldIsolate: aBoolean
	"Indicate whether all side effects made by the simulated code should be virtualized to separate them from the rest of the running image. See also SimulationStudio's Sandbox class."

	| changed |
	changed := aBoolean ~= self shouldIsolate.
	
	aBoolean
		ifFalse: [sideEffects := ownObjects := nil]
		ifTrue:
			[sideEffects := sideEffects ifNil: [self sideEffectMemoryClass new].
			ownObjects := SimPluggableWeakKeyDictionary new
				"Simulation-safe WeakIdentityKeyDictionary. We must not send any message to any simulated object here (the object could inject arbitrary code in the executor by this, or it might simply not understand the message and raise an error). Use mirror primitives for identity and hash testing.
				Note: We would actually prefer a Set, but this is not proxy-safe."
				equalBlock: [:first :second | thisContext object: first eqeq: second];
				hashBlock: [:object | thisContext simObjectIdentityHash: object];
				yourself.
			self flag: #todo "Use efficient data structure for side effects (no runs)"].
	
	changed ifTrue:
		[self initializeAllPrimitives].