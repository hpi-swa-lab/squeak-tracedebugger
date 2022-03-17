controlling
context: aContext doNamedPrimitiveIn: aCompiledMethod for: rcvr withArgs: arguments ifHit: aBlock

	| literal primitiveName |
	literal := aCompiledMethod literalAt: 1.
	literal isArray ifFalse: [^ self].
	primitiveName := literal second.
	
	literal first
		caseOf:
			{[#FloatArrayPlugin] ->
				["Only optional primitives that write state."
				self flag: #optimize. "Some primitives read only, and for the others, we could use #record:fields:"
				^ aBlock value:
					(self context: aContext primitiveFailTokenFor: nil "use image implementation")].
			[#Float64ArrayPlugin] ->
				["Only optional primitives that write state."
				self flag: #optimize. "Some primitives read only, and for the others, we could use #record:fields:"
				^ aBlock value:
					(self context: aContext primitiveFailTokenFor: nil "use image implementation")].
			[#MiscPrimitivePlugin] ->
				["Mostly optional primitives that read state."
				self flag: #optimize. "Allow-list read-only primitives"
				^ aBlock value:
					(self context: aContext primitiveFailTokenFor: nil "use image implementation")]}
		otherwise: [].